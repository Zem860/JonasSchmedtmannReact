import styles from './Map.module.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  const navigate = useNavigate()
  return (
    <div className={styles.mapContainer} onClick={()=>{navigate("form")}}>
      <h1>
        lat {lat} <br /> lng {lng}
      </h1>
      <button
        onClick={() => {
          setSearchParams({ lat: 123, lng: 456 });
        }}
      >
        Change Pos
      </button>
    </div>
  );
};

export default Map;
<></>;
