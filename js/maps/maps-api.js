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

        function showMapModal() {


            //getting elements
            let mapCard = document.querySelectorAll(".map-block");
            let mapModalWindow = document.querySelector("#map-modal");
            let mapModalClose = document.querySelector("#map-close");
            let mapModalTitle = document.querySelector("#map-mod-title");
            let mapModalImage = document.querySelector("#map-mod-img");
            let mapModalDescription = document.querySelector("#map-desc");

            //modal window
            for(let i=0;i<mapCard.length;i++) {
                mapCard[i].addEventListener("click", function() {
                    mapModalWindow.classList.add("show");
                    mapModalTitle.innerHTML = maps[i].displayName;
                    mapModalImage.src = maps[i].splash;
                    mapModalDescription.innerHTML = "Real life coordinates: " + maps[i].coordinates;
                })
            }
            mapModalClose.addEventListener("click", function() {
                mapModalWindow.classList.remove("show");
            })
        }
        showMapModal();
    })
