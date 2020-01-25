var map, osm;
map = new OpenLayers.Map('map');
osm = new OpenLayers.Layer.OSM();
map.addLayer(osm);
var lonlat = this.calculateLonLat(0, 0);
var zoom = 4;
map.setCenter(lonlat, zoom);
var marker = new OpenLayers.Layer.Markers("Markers");
var size = new OpenLayers.Size(40, 40);
var offset = new OpenLayers.Pixel(-(size.w / 2), -(size.h / 2));
var icon = new OpenLayers.Icon('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZ06Wh8dKlZHS0hja_9YcxkI3e4t_DNbSgONoYmYB05R6ACsdMA&s', size, offset);
map.addLayer(marker);
var trackMarker = new OpenLayers.Marker(lonlat, icon);
marker.addMarker(trackMarker);

function calculateLonLat(longitude, latitude) {
    return new OpenLayers.LonLat(longitude, longitude).transform(new OpenLayers.Projection("EPSG:4326"), new OpenLayers.Projection("EPSG:900913"));
}
