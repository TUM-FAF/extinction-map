import React from "react";
import "./Map.css";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const position = [47.00367, 28.907089];

const worldImaginary =
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

const natGeo =
  "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}";

const map = "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png";

export const MapContainer = () => {
  return (
    <>
      <Map center={position} zoom={4} id="mapid">
        <TileLayer url={natGeo} />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </>
  );
};
