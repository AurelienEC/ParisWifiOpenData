class App {
    /**
     * 
     * @param {String} mapId 
     * @param {Array[Double, Double]} mapCenter 
     * 
     * mapCenter is of [Latitud, Longitud]
     */
    constructor(mapId, mapCenter){
        this.map = this.setMap(mapId, mapCenter)
    }

    setMap(mapId, mapCenter){
        var map = L.map(mapId).setView(mapCenter, 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        return map 
    }

    setMarkersFromApi(url){
        ajaxGet(url, (results )=> {
            let parsedResults = JSON.parse(results)
            for(const accessPoint of parsedResults.records) {
                L.marker(accessPoint.fields.geo_point_2d).addTo(this.map)
                    .bindPopup(accessPoint.fields.nom_site)
                    .openPopup();
            }
        });
    }
}