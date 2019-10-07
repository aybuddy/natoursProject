/* eslint-disable */

console.log('Hello from the client side!');
const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoiYXlidWRkeSIsImEiOiJjazFmeHZ3ZXIwdW83M2hwN2wxbDl6cXc1In0.WNybvv_GiC232d1Dzl6LiQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/aybuddy/ck1fy4y9243lp1co4p70fs0qk',
  scrollZoom: false
  // center: [-118.113491, 34.111745],
  // zoom: 7,
  // interactive: false
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
  // Create marker
  const el = document.createElement('div');
  el.className = 'marker';

  // Add marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom'
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  // Add popup
  new mapboxgl.Popup({
    offset: 30
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);

  // Extend map bounds to include current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100
  }
});
