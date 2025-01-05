import {useRef, useEffect} from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import { City, OfferType } from '../../types/types';

import useMap from '../../hooks/use-map';
import { MARKER } from '../../const';

type MapProps = {
  city: City;
  offers: OfferType[];
  activeCardId: string | null;
}

const defaultMarker = new Icon(MARKER.default);
const currentMarker = new Icon(MARKER.current);

function Map({city, offers, activeCardId}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const { latitude: lat, longitude: lng } = offer.location;
        const marker = new Marker({ lat, lng });

        marker
          .setIcon(
            activeCardId !== undefined && offer.id === activeCardId
              ? currentMarker
              : defaultMarker
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeCardId]);

  return <section className="cities__map map" ref={mapRef} />;
}

export default Map;
