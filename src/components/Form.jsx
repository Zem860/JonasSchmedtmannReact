// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Button from "./Button";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Spinner from "./Spinner";
import Message from "./Message";
import "react-datepicker/dist/react-datepicker.css";
import { useCities } from "../context/CitiesContext";
export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [emoji, setEmoji] = useState("")
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [geoCodingError, setGeoCodingError] = useState("")
  const navigate = useNavigate()
  const [mapLat, mapLng] = useUrlPosition()//每次只要執行點擊事件觸發form就會檢查一次location
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false)
  const {createCity, isLoading} = useCities();
  useEffect(() => {
    if (!mapLat && !mapLng) return;

    async function fetchCityData() {
      try {
        setIsLoadingGeocoding(true)
        //從geocode裡面抓資料，
        const res = await fetch(`${BASE_URL}?latitude=${mapLat}&longitude=${mapLng}`)
        const data = await res.json();
        if (!data.countryCode) throw new Error('That dose not seem to be a country. Click somewhere else 😊😊')
        setCityName(data.city || data.locality || "");
        setCountry(data.countryName)
        setEmoji(convertToEmoji(data.countryCode))
        setGeoCodingError("")
      } catch (err) {
        setGeoCodingError(err.message)

      } finally {
        setIsLoadingGeocoding(false)
      }
    }

    fetchCityData();
  }, [mapLat, mapLng])

  async function handleSubmit(e) {
    e.preventDefault();
    if (!cityName || !date) return;
    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,    
      position: { lat:mapLat, lng:mapLng },
     
    }
    await createCity(newCity)
    navigate("/app/cities")
  }
  if (isLoadingGeocoding) return <Spinner />
  if (!mapLat && !mapLng) return <Message message="Start by clicking somewhere on the map" />
  if (geoCodingError) return <Message message={geoCodingError} />
  return (
    <form className={`${styles.form} ${isLoading?styles.loading:""}`}onSubmit={handleSubmit}>
      {/* {geoCodingError && <Message message={geoCodingError} />} */}

      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>
      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        {/* <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        /> */}
        <DatePicker id="date" onChange={date => setDate(date)} selected={date} dateFormat="dd/MM/yyyy" />
      </div>
      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>
      <div className={styles.buttons}>
        <Button type='primary' >Add</Button>
        <Button type='back' onClick={(e) => { e.preventDefault(); navigate(-1) }}>&larr; Back</Button>
      </div>
    </form>
  );
}

export default Form;
