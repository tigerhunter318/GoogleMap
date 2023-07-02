import React, { useEffect, useState} from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import settings from '../../settings';
import './styles.css';

const MapContainer = (props) => {
	const [mapLoading, setMapLoading] = useState(true);

	useEffect(() => {
		// Simulate a delay for demonstration purposes
		const timeout = setTimeout(() => {
		  setMapLoading(false);
		}, 2000);
	
		return () => clearTimeout(timeout);
	}, []);
	return mapLoading ? (
        <div className="loading-screen">Loading map...</div>
      )
	  : (
		<Map
		google={props.google}
		zoom={14}
		style={{ width: '100%', height: '100%' }}
		initialCenter={{
			lat: 37.7749,
			lng: -122.4194
		}}
		/>
	);
};

export default GoogleApiWrapper({
apiKey: settings.MAP_API_KEY
})(MapContainer);
