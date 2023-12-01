import React, { useEffect, useRef } from 'react';
import { useTheme } from '../js/ThemeContext';
import Header from './Header';
import '../css/restaurantes.css'
import veganIcon from '../assets/vegan-restaurant-icon.png'

const mapStyles = {
  width: '100%',
  height: '100vh',
};

function RestaurantesContent() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`restaurantes-container ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <div className='restaurantes'>
        <h1>Restaurantes Veganos Próximos</h1>
        <hr />
        <div id="map" style={mapStyles}></div>
      </div>
    </div>
  );
}

const Restaurantes = () => {
  const scriptRef = useRef(null);

  useEffect(() => {
    // Verifica se a API do Google Maps JavaScript já foi carregada
    if (!window.google || !window.google.maps) {
      if (!scriptRef.current) {

        // Cria um elemento de script
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDWZ8HUr03nM8OhKF3z3dvQK1nHmbpZnHA&libraries=places&callback=initMap`;
        script.async = true;
        script.defer = true;

        // Adicionar o script ao cabeçalho do documento
        document.head.appendChild(script);

        script.onload = () => {
          window.initMap();
        }

        //Função de callback global
        window.initMap = () => {
          console.log("initMap foi chamado!")
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
              const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };

              const map = new window.google.maps.Map(document.getElementById('map'), {
                center: userLocation,
                zoom: 14,
                gestureHandling: 'coperative',
              });

              const marker = new window.google.maps.Marker({
                position: userLocation,
                map: map,
                title: 'Sua Localização'
              });

              var service = new window.google.maps.places.PlacesService(map);

              var request = {
                location: userLocation,
                radius: 10000, 
                keyword: 'vegan restaurant',
                types: ['restaurant', 'food']
              };

              function clearMarkers(markers) {
                markers.forEach(marker => marker.setMap(null));
                markers.length = 0;
              }

              const mapMarkers = [];
              let infoWindows = [];

              // Fazer a pesquisa
              service.nearbySearch(request, function (results, status) {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                  clearMarkers(mapMarkers);

                  infoWindows.forEach((infoWindow) => {
                    infoWindow.close();
                  })

                  for (var i = 0; i < results.length; i++) {
                    var place = results[i];
                    console.log("Local Completo:", place);

                    //Filtrar tipo indesejados
                    const filteredTypes = place.types.filter(
                      (type) => type !== 'point_of_interest' && type !== 'establishment'
                    );

                    console.log("Tipos Filtrados:", filteredTypes)

                    if (
                      filteredTypes.length > 0 &&
                      (filteredTypes.includes('restaurant') || filteredTypes.includes('food'))
                    ) {

                      // Adicionar marcador para cada restaurante encontrado
                      try {
                        var marker = new window.google.maps.Marker({
                          position: place.geometry.location,
                          map: map,
                          title: place.name,
                          icon: veganIcon,
                        });

                        const infoWindow = new window.google.maps.InfoWindow();
                        infoWindow.setContent(
                          `
                             <div style="
                              max-width: 200px;
                              color: #000;
                             ">
                              <h3>${place.name}</h3>
                              <p>${place.vicinity}</p>
                              <p>Nota: ${place.rating !== 0 ? place.rating : 'Indefinida'}</p>  
                              <a style="color: #0000CD; text-decoration: underline;" href="https://www.google.com/maps/search/?api=1&query=${place.geometry.location.lat()},${place.geometry.location.lng()}" target="_blank">Ver no Google Maps</a>
                              <!-- Adicione mais informações conforme necessário -->
                            </div>
                          `
                        )

                        // Função para garantir a referência correta
                        function onMarkerClick() {
                          map.setZoom(16);
                          map.setCenter(this.getPosition());

                          infoWindow.open(map, marker);
                        }

                        marker.addListener('click', onMarkerClick);
                        mapMarkers.push(marker);

                        marker.addListener('click', function () {
                          map.setZoom(16);
                          map.setCenter(marker.getPosition());



                          infoWindows.push(infoWindow);

                          infoWindows.forEach((prevInfoWindow) => {
                            window.google.maps.event.addListener(prevInfoWindow, 'closeclick', function () {
                              map.setZoom(13);
                              map.setCenter(userLocation);
                            });

                            prevInfoWindow.close();
                          });

                          infoWindow.open(map, this);
                        });

                        console.log("Estrutura do window.google.maps:", window.google.maps);

                        console.log("Marcador adicionado:", place.name);
                      } catch (error) {
                        console.error("Erro ao adicionar marcador:", error);
                      }
                    }
                  }

                  if (mapMarkers.length > 1) {
                    // Criar um limite que contém todos os marcadores
                    var bounds = new window.google.maps.LatLngBounds();
                    mapMarkers.forEach(marker => bounds.extend(marker.getPosition()));

                    // Ajustar o mapa para conter todos os marcadores
                    map.fitBounds(bounds);
                  }
                }
              });
            });
          } else {
            alert("Geolocalização não suportada pelo seu navegador.");
          }
        };

        scriptRef.current = script;
      }
    } else {
      window.initMap();
    }
  }, []);

  return (
    <RestaurantesContent />
  );
}

export default Restaurantes;
