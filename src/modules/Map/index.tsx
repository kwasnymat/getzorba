import { useRef } from "react";
import { useSelector } from "react-redux";
import { Map, Source, Layer, MapRef, GeoJSONSource } from "react-map-gl";

import { RootState } from "../../shared/store/store";
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
} from "./layers";

export const MapComponent = () => {
  const mapRef = useRef<MapRef>(null);
  const { properties } = useSelector((state: RootState) => state.properties);

  const onClick = (event: any) => {
    const feature = event.features[0];
    const clusterId = feature.properties.cluster_id;

    const mapboxSource = mapRef?.current?.getSource(
      "earthquakes"
    ) as GeoJSONSource;

    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err || !mapRef || !mapRef.current) {
        return;
      }

      mapRef.current.easeTo({
        center: feature.geometry.coordinates,
        zoom,
        duration: 500,
      });
    });
  };

  const mappedProperties = properties.map((property) => ({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [property.address.location[1], property.address.location[0]],
    },
    properties: {
      name: property.name,
    },
  }));

  const geoJSON = {
    type: "FeatureCollection",
    features: mappedProperties,
  };

  return (
    <Map
      initialViewState={{
        latitude: 27.964157,
        longitude: -82.452606,
        zoom: 5,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={process.env.REACT_APP_MAP_TOKEN}
      interactiveLayerIds={[clusterLayer.id!]}
      onClick={onClick}
      ref={mapRef}
    >
      <Source
        id="earthquakes"
        type="geojson"
        // @ts-ignore
        data={geoJSON}
        cluster={true}
        clusterMaxZoom={14}
        clusterRadius={50}
      >
        <Layer {...clusterLayer} />
        <Layer {...clusterCountLayer} />
        <Layer {...unclusteredPointLayer} />
      </Source>
    </Map>
  );
};
