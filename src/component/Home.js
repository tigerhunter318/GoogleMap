import React from 'react';
import './styles.css';
import MapContainer from './Map/Map';

const Home = () => {
	return (
	<div>
		<div className="main">
			<div className="left-column">
				{/* buttons, input forms, and other content for the left side */}
			</div>
			<div className="right-column">
				<MapContainer />
			</div>
		</div>
	</div>
	);
};

export default Home;
