//valorant api with maps-page-page information
fetch("https://valorant-api.com/v1/maps")
    .then(response => response.json())
    .then(data => {
        let maps = data.data;


        function showMaps() {

            let mapTitle = document.getElementsByClassName('m-title');
            let mapCoordinates = document.getElementsByClassName('m-coor');
            let mapSplashArt = document.getElementsByClassName('m-img');

            //adding titles
            for (i=0;i<mapTitle.length;i++) {
                mapTitle[i].innerHTML = (maps[i].displayName).toUpperCase();
            }

            //adding coordinates
            for (i=0;i<mapCoordinates.length;i++) {
                mapCoordinates[i].innerHTML = maps[i].coordinates;
            }

            for (i=0;i<mapSplashArt.length;i++) {
                mapSplashArt[i].src = maps[i].splash;
            }
        }
        showMaps();
    })
