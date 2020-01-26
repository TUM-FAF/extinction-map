import React from "react";
import "./Map.css";
import { Map, TileLayer, ImageOverlay } from "react-leaflet";

const position = [47.00367, 28.907089];

const worldImaginary =
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

const natGeo =
  "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}";

const map = "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png";

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
        {extinctAnimals.map((el, i) =>
          el.year >= props.sliderValue || props.sliderValue === Infinity ? (
            <ImageOverlay key={el.name} url={el.image.src} bounds={el.bounds} />
          ) : null
        )}
      </Map>
    </>
  );
};
