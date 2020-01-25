import React from "react";
import "./Map.css";
import { Map, TileLayer, ImageOverlay, Popup } from "react-leaflet";

const position = [47.00367, 28.907089];

const worldImaginary =
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

const natGeo =
  "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}";

const map = "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png";

function getRandomBounds() {
  const randomLat = Math.random() * 180 - 90;
  const randomLong = Math.random() * 360 - 180;

  return [
    [randomLat, randomLong],
    [randomLat + 10, randomLong + 10]
  ];
}

/**
 *
 * @param {{
 * data: import("../App").ExtinctAnimal[]
 * }} props
 */
export const MapContainer = props => {
  const extinctAnimals = props.data;

  return (
    <>
      <Map onClick={e => console.log(e)} center={position} zoom={4} id="mapid">
        <TileLayer url={natGeo} />
        {extinctAnimals.map(el => (
          <ImageOverlay
            key={el.name}
            url={el.imgUrl}
            bounds={getRandomBounds()}
          />
        ))}
      </Map>
    </>
  );
};
