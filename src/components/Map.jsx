import styles from './Map.module.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvent } from 'react-leaflet';
import { useCities } from '../context/CitiesContext';
import { useGeolocation } from '../hooks/useGeolocation';
import { useUrlPosition } from '../hooks/useUrlPosition';
import Button from './Button';
const Map = () => {
  const [MapPosition, setMapPosition] = useState([40, 0]);
  const { cities } = useCities();
  const {isLoading:isLoadingPosition, position:geoLocationPosition, getPosition} = useGeolocation()
  const [mapLat,mapLng] = useUrlPosition()
  useEffect(() => {
    if (!isNaN(mapLat) && !isNaN(mapLng)) {
      setMapPosition([mapLat, mapLng]);
    }
  }, [mapLat, mapLng]);

  useEffect(()=>{
    if (geoLocationPosition){
      setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng])
    }
  },[geoLocationPosition])

  return (
    <div className={styles.mapContainer}>
      {!geoLocationPosition && <Button type='position' onClick={getPosition}>{isLoadingPosition?"Loading...":"Use Your Position"}</Button>}
      <MapContainer
        className={styles.map}
        center={MapPosition}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            key={city.id}
            position={[city.position.lat, city.position.lng]}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={MapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
};

function ChangeCenter({ position }) {
  const map = useMap();
  if (position.every((coord) => typeof coord === 'number' && !isNaN(coord))) {
    map.setView(position);
  }

  return null;
}

function DetectClick (){
  const navigate = useNavigate()
  useMapEvent({
    click: (e) => {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;
      navigate(`form?lat=${lat}&lng=${lng}`);
    },
  });
  return null
}

export default Map;
