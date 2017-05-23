import React, { Component, PropTypes } from 'react';
import ol from 'openlayers';
import ControlPanel from './ControlPanel'


export class Map extends Component {
    constructor() {
        super();
    }

    initMap() {
        const url_root = new URL('http://localhost:8080/geoserver/wfs');
        const params = {
            service: 'wfs',
            version: '2.0.0',
            request: 'GetFeature',
            typeNames: 'testLayer:counties_china',
            outputFormat: 'application/json',
            exceptions: 'application/json',
            count: 100
        };

        Object.keys(params).forEach(key => url_root.searchParams.append(key, params[key]));
        const headers = new Headers({'Content-Type': 'application/json'});
        const source = new ol.source.Vector();
        const osm = new ol.layer.Tile({
            source:new ol.source.OSM()
        });
        const view = new ol.View({
            center: ol.proj.fromLonLat(this.props.center),
            zoom: this.props.zoom
        });
        window.map = new ol.Map({
            view: view,
            target: 'map',
            layers: [osm]
        });
    }

    componentDidMount() {
        this.initMap();
    }

    render() {
        return (
        <div id="wrapper" className="wrapper">
            <div id="map" className="map"></div>
        </div>
        );
    }
}

Map.propTypes = {
    center: PropTypes.arrayOf(PropTypes.number),
    zoom: PropTypes.number
};

Map.defaultProps = {
    center: [118.79, 32.04],
    zoom: 6
};

export default Map;
