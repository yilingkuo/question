// load the map
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// load the tiles
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {maxZoom: 18,
attribution: 'Map data &copy; <ahref="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,' +
'Imagery © <a href="http://mapbox.com">Mapbox</a>',
id: 'mapbox.streets'
}).addTo(mymap);

// Found location and add marker with accuracy of position
function onLocationFound(){
var marker;
var circle;	
mymap.locate({enableHighAccuracy:true, setView: true,maxZoom: 20, watch: true}) /* This will return map so you can do chaining */
        .on('touchstart', function(e){
			var lat = (e.latitude);
			var lng = (e.longitude);
			var newLatLng = new L.LatLng(lat, lng);
			if (typeof(marker)==='undefined'){
				marker= new L.marker([e.latitude, e.longitude]);
				marker.addTo(mymap).bindPopup('Your are here :)');
				circle = L.circle([e.latitude, e.longitude], e.accuracy/2, {
                weight: 1,
                color: 'blue',
                fillColor: '#cacaca',
                fillOpacity: 0.2
            }).addTo(mymap);
			}
			else{
				marker.setLatLng(newLatLng);
				circle.setLatLng(newLatLng);
			}
			//var marker = L.marker([e.latitude, e.longitude]).addTo(mymap);
            //marker = L.marker([e.latitude, e.longitude]).update(marker).bindPopup('Your are here :)');
            //var circle = L.circle([e.latitude, e.longitude], e.accuracy/2, {
            //    weight: 1,
            //    color: 'blue',
            //    fillColor: '#cacaca',
            //    fillOpacity: 0.2
            //}).addTo(mymap);
			//marker.setLatLng(newLatLng); 
			//circle.setLatLng(newLatLng)
			mymap.fitBounds(circle);
})};

function getCoords(){
	mymap.on('click touchstart', function(e) {
		
		var marker_coord = L.marker([e.latlng.lat, e.latlng.lng],{icon:testMarkerGreen}).addTo(mymap).bindPopup('<br>Point coordinate at </br><br><b>Lon: ' + e.latlng.lng + "</b></br><br><b>Lat: " + e.latlng.lat+'</br>');
})};

var testMarkerGreen=L.AwesomeMarkers.icon({

markerColor:'green'
});