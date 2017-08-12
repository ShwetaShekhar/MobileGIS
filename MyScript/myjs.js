        
		<!-- My Javascript Code -->
      var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([73.85, 18.52]),
          zoom: 8
        })
      });
    </script>