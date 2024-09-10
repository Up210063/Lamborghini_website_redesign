document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([44.645, 11.599], 2); // Coordenadas centradas en Europa
  
    // Capa del mapa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    // Marcadores de fábricas de Lamborghini
    var factoryLocations = [
      { lat: 44.645, lng: 11.599, name: 'Fábrica Principal', description: 'Fábrica principal en Sant\'Agata Bolognese, Italia.', imageUrl: 'IMG/factory-main.jpg' },
      { lat: 44.635, lng: 11.582, name: 'Fábrica Cercana', description: 'Fábrica cercana (Ejemplo).', imageUrl: 'IMG/factory-nearby.jpg' }
    ];
  
    // Marcadores de distribuidores oficiales en todo el mundo
    var distributorLocations = [
      { lat: 40.7128, lng: -74.0060, name: 'Distribuidor en Nueva York', description: 'Distribuidor en Nueva York, EE.UU.', imageUrl: 'IMG/distributor-ny.jpg' },
      { lat: 34.0522, lng: -118.2437, name: 'Distribuidor en Los Ángeles', description: 'Distribuidor en Los Ángeles, EE.UU.', imageUrl: 'IMG/distributor-la.jpg' },
      { lat: 51.5074, lng: -0.1278, name: 'Distribuidor en Londres', description: 'Distribuidor en Londres, Reino Unido.', imageUrl: 'IMG/distributor-london.jpg' },
      { lat: 48.8566, lng: 2.3522, name: 'Distribuidor en París', description: 'Distribuidor en París, Francia.', imageUrl: 'IMG/distributor-paris.jpg' },
      { lat: 19.4326, lng: -99.1332, name: 'Distribuidor en Ciudad de México', description: 'Distribuidor en Ciudad de México, México.', imageUrl: 'IMG/distributor-cdmx.jpg' },
      { lat: 39.9042, lng: 116.4074, name: 'Distribuidor en Beijing', description: 'Distribuidor en Beijing, China.', imageUrl: 'IMG/distributor-beijing.jpg' },
      { lat: 35.6895, lng: 139.6917, name: 'Distribuidor en Tokio', description: 'Distribuidor en Tokio, Japón.', imageUrl: 'IMG/distributor-tokyo.jpg' },
      { lat: -33.8688, lng: 151.2093, name: 'Distribuidor en Sídney', description: 'Distribuidor en Sídney, Australia.', imageUrl: 'IMG/distributor-sydney.jpg' },
      { lat: -23.5505, lng: -46.6333, name: 'Distribuidor en São Paulo', description: 'Distribuidor en São Paulo, Brasil.', imageUrl: 'IMG/distributor-sao-paulo.jpg' },
      { lat: 55.7558, lng: 37.6173, name: 'Distribuidor en Moscú', description: 'Distribuidor en Moscú, Rusia.', imageUrl: 'IMG/distributor-moscow.jpg' }
    ];
  
    // Función para mostrar información en el panel lateral
    function showInfo(title, description, imageUrl, lat, lng) {
      document.getElementById('info-title').innerText = title;
      document.getElementById('info-description').innerText = description;
      document.getElementById('info-image').src = imageUrl;
      document.getElementById('info-coordinates').innerText = `Coordenadas: Lat ${lat.toFixed(4)}, Lng ${lng.toFixed(4)}`;
      document.getElementById('info-panel').style.display = 'block';
    }
  
    // Función para ocultar el panel lateral
    document.getElementById('close-btn').addEventListener('click', function() {
      document.getElementById('info-panel').style.display = 'none';
    });
  
    // Añadir los marcadores de fábricas al mapa
    factoryLocations.forEach(function(location) {
      L.marker([location.lat, location.lng]).addTo(map)
        .bindPopup('<strong>Fábrica</strong><br>' + location.name)
        .on('click', function() {
          showInfo(location.name, location.description, location.imageUrl, location.lat, location.lng);
        });
    });
  
    // Añadir los marcadores de distribuidores al mapa con ícono personalizado
    distributorLocations.forEach(function(location) {
      L.marker([location.lat, location.lng], {
        icon: L.divIcon({
          className: 'distributor-icon',
          html: '<div>' + location.name.charAt(0) + '</div>', // Usa la primera letra del nombre como marcador
          iconSize: [24, 24]
        })
      }).addTo(map)
        .bindPopup('<strong>Distribuidor</strong><br>' + location.name)
        .on('click', function() {
          showInfo(location.name, location.description, location.imageUrl, location.lat, location.lng);
        });
    });
  });
  