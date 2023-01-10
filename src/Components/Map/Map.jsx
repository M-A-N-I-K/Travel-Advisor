import React from "react";
import GoogleMapReact from "google-map-react";
const Map = () => {
	const coordinates = { lat: 0, lng: 0 };
	return (
		<div className="map">
			<GoogleMapReact
				bootstrapURLKeys={{
					key: "AIzaSyA3VMjWK06KCqs_wiiLa0bWowWmRIYs8Ds",
				}}
				defaultCenter={coordinates}
				center={coordinates}
				defaultZoom={14}
				margin={[50, 50, 50, 50]}
				options={""}
				onChange={""}
				onChildClick={""}
			></GoogleMapReact>
		</div>
	);
};

export default Map;
