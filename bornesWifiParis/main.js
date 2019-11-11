// https://opendata.paris.fr/api/records/1.0/search/?dataset=sites-disposant-du-service-paris-wi-fi&facet=cp&facet=idpw&facet=etat2

let  app = new App('map', [48.856614, 2.3522219])
app.setMarkersFromApi('https://opendata.paris.fr/api/records/1.0/search/?dataset=sites-disposant-du-service-paris-wi-fi&rows=1000&facet=cp&facet=idpw&facet=etat2')