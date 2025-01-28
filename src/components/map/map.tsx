import {useRef, useEffect} from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import { City, CommonOfferType, OfferType } from '../../types/types';

import useMap from '../../hooks/use-map';
import { MARKER } from '../../const';

type MapProps = {
  city: City;
  offers: OfferType[] | CommonOfferType[];
  activeCardId: string | null;
  mapPlace: 'cities' | 'offer';
}

const defaultMarker = new Icon(MARKER.default);
const currentMarker = new Icon(MARKER.current);

function Map({city, offers, activeCardId, mapPlace}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const { latitude: lat, longitude: lng } = offer.location;
        const marker = new Marker({ lat, lng });

        if (mapPlace === 'offer') {
          if (offer.id === activeCardId) {
            marker.setIcon(currentMarker).addTo(markerLayer);
          } else {
            marker.setIcon(defaultMarker).addTo(markerLayer);
          }
        } else {

          marker.setIcon(
            activeCardId !== undefined && offer.id === activeCardId
              ? currentMarker
              : defaultMarker
          ).addTo(markerLayer);
        }
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [city, map, offers, activeCardId, mapPlace]);

  return <section className={`${mapPlace}__map map`} ref={mapRef} />;
}

export default Map;
