

/**
 * Adds markers to the map highlighting the locations of the captials of
 * France, Italy, Germany, Spain and the United Kingdom.
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function addMarkersToMap(map) {
  var parisMarker = new H.map.Marker({ lat: 48.8567, lng: 2.3508 });
  map.addObject(parisMarker);

  var romeMarker = new H.map.Marker({ lat: 41.9, lng: 12.5 });
  map.addObject(romeMarker);

  var berlinMarker = new H.map.Marker({ lat: 52.5166, lng: 13.3833 });
  map.addObject(berlinMarker);

  var madridMarker = new H.map.Marker({ lat: 40.4, lng: -3.6833 });
  map.addObject(madridMarker);

  var londonMarker = new H.map.Marker({ lat: 51.5008, lng: -0.1224 });
  map.addObject(londonMarker);
}

/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
var platform = new H.service.Platform({
  app_id: "VDNOxYSWX9hxhHHsg3BC",
  app_code: "6cSttrhTiZJrIOp5Z9jNiA",
  useHTTPS: true
});
var pixelRatio = window.devicePixelRatio || 1;
var defaultLayers = platform.createDefaultLayers({
  tileSize: pixelRatio === 1 ? 256 : 512,
  ppi: pixelRatio === 1 ? undefined : 320
});

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById("map"), defaultLayers.normal.map, {
  center: { lat: 50, lng: 5 },
  zoom: 4,
  pixelRatio: pixelRatio
});

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
//addMarkersToMap(map);

function placeMarker(){
	event.preventDefault()
	let coordinates = event.target.coordinates.value
	let coordsArray = coordinates.split(",")
	let marker = new H.map.Marker({ lat: coordsArray[0], lng: coordsArray[1] });
	map.addObject(marker);
	map.setCenter(marker.getPosition());
}

function setCenter(coords){
	console.log(`lat: ${coords[0]}, lng: ${coords[1]}`);
	
	map.l.center = { lat: coords[0], lng: coords[1] }
	console.log(map.l.center);
	console.log(ui);
	
}