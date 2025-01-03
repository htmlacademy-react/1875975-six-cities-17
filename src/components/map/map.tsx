import { useEffect, useRef } from 'react';

function Map() {
  const mapRef = useRef(null);
  return <section className="cities__map map" ref={mapRef} />;
}

export default Map;
