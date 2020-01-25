import React from "react";
import "./MapComponent.css";
import {
    control,
    Controls,
    custom,
    interaction,
    Interactions,
    layer,
    Layers,
    Map,
    Overlay,
    Overlays
    // @ts-ignore
} from 'react-openlayers';

export const MapComponent: React.FC = () => {
    var test = 'zzzzz';
    var showPopup = false;

    return (
        <div><Map view={{center: [0, 0], zoom: 2}} onClick={showPopup = !showPopup}>
            <Layers>
                <layer.Tile/>
                <layer.Vector zIndex="1"/>
            </Layers>
            <Overlays>
                <Overlay
                    // ref={comp => this.overlayComp = comp}
                    element="#popup"/>
            </Overlays>
            <Controls attribution={false} zoom={true}>
                <control.Rotate/>
                <control.ScaleLine/>
                <control.FullScreen/>
                <control.OverviewMap/>
                <control.ZoomSlider/>
                <control.ZoomToExtent/>
                <control.Zoom/>
            </Controls>
            <Interactions>
                <interaction.Select/>
                <interaction.Draw type='Point'/>
                {/*<interaction.Modify features={markers.features}/>*/}
            </Interactions>
        </Map>

            <custom.Popup>
            </custom.Popup>
        </div>
    );
};
