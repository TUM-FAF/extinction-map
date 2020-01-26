import React from "react";
import "./Map.css";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const position = [47.00367, 28.907089];

const worldImaginary =
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

const natGeo =
  "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}";

const map = "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png";

/**
 *
 * @param {import("../App").ExtinctAnimal} el
 * @param {number} index
 */
function createNewMarker(el, index) {
  const icon = new L.Icon({
    iconUrl: el.image.src,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [parseInt(el.image.width), parseInt(el.image.height)]
  });

  return (
    <Marker key={el.name + index} position={el.position} icon={icon}>
      <Popup>
        <strong>Name:</strong> {el.name}
        <br />
        <strong>Region:</strong> {el.region}
      </Popup>
    </Marker>
  );
}

/**
 *
 * @param {{
 * data: import("../App").ExtinctAnimal[];
 * sliderValue: number;
 * }} props
 */
export const MapContainer = props => {
  const extinctAnimals = props.data;

  return (
    <>
      <Map onClick={e => console.log(e)} center={position} zoom={3} id="mapid">
        <TileLayer url={natGeo} />
        {extinctAnimals.map((el, index) =>
          el.year >= props.sliderValue || props.sliderValue === Infinity ? (
            createNewMarker(el, index)
          ) : null
        )}
      </Map>
    </>
  );
};
