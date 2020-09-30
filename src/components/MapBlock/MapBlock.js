import React, { useState, useEffect, useRef } from 'react';
import './MapBlock.scss';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';



const MapBlock = ({title, capture}) => {
    
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXJtYW5pYWsiLCJhIjoiY2tmb2RieGt6MGpnMzJ6b2V2am00YTEyZSJ9.lPE1wAp1CvNDpI4C57mUNQ';
    
    const mapContainer = useRef(null);

    const [mapState] = useState({
        lng: 32,
        lat: 48.5,
        zoom: 4.8
    });

    useEffect(() => {
        new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: [mapState.lng, mapState.lat],
            zoom: mapState.zoom
            });
        });

    return(
        <section className='map'>
            <div className='container'>
                <h2 className='map-title'>
                    { title }
                </h2>
                <div className="map-container">
                    <div ref={mapContainer} className="mapContainer" />
                </div>
                <p className="map-capture">
                    { capture }
                </p>
            </div>
        </section>
    )
};

export default MapBlock;