function initMap() {
  let Jacksonville = {city: {lat: 30.274438, lng: -81.388347}, zoom: 5}
  let map = createMap(Jacksonville);
}

function createMap({ city, zoom}) {
  return(
    new google.maps.Map(document.getElementById('map'),
    {
      center: city,
      zoom: zoom
    })
  )
}
