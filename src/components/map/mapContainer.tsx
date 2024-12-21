import React from "react";
import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
    return (
        <MapContainer className="h-96 w-auto" center={[35.692749, 51.422155]} zoom={15} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[35.692749, 51.422155]}></Marker>
        </MapContainer>
    );
};

export default Map;
