//this is where we pull info from


/* === PATCH NOTES API === */
fetch("https://jsonblob.com/api/964114737269063680")
    .then(response => response.json())
    .then(data => {
        let patchNotes = data.data;
        //console.log(patchNotes);

        function showSliderInfo() {
            let readMore = document.querySelectorAll("#read-more");
            let modalClose = document.querySelector("#close");
            let modalWindow = document.querySelector("#modal-container");
            let modalTitle = document.getElementsByClassName("modal-title");
            let modalImage = document.getElementById("mod-img");
            let modaltext = document.getElementsByClassName("modal-text"); 

            //sort patch notes by date
            let sortedbyDate = patchNotes.sort((a,b) => Date.parse(b.date) - Date.parse(a.date));

            //show titles
            let slideTitles = document.getElementsByClassName('patchNote');
            for (i=0; i< slideTitles.length; i++) {
                slideTitles[i].innerHTML = sortedbyDate[i].title;
            }

            //show cover pictures
            let sliderImages = document.getElementsByClassName('sliderImg');
            for (i=0; i< sliderImages.length; i++) {
                sliderImages[i].src = sortedbyDate[i].cover;
            }
            
            /*for(i=0;i<readMore.length;i++) {
                readMore[i].addEventListener("click", function() {
                    modalWindow.classList.add("show");
                    modalTitle[i].innerHTML = sortedbyDate[i].title;
                    modalImage[i].src = sortedbyDate[i].cover;
                });
            };

            modalClose.addEventListener("click", function() {
                modalWindow.classList.remove("show");
            });*/
        }
        showSliderInfo();


    })

/* === LEADERBOARD API === */
/* The api from the link https://dgxfkpkb4zk5c.cloudfront.net/leaderboards/affinity/EU/queue/competitive/act/573f53ac-41a5-3a7d-d9ce-d6a6298e5704?startIndex=0&size=10 does not work
so we copied it and put it on jsonblob*/
// players are already sorted by rank in the api
fetch("https://jsonblob.com/api/964178412378013696")
    .then(response => response.json())
    .then(data=> {
        let players = data.players;

        function showUsername() {

            let threeBestPlayers = players.slice(0,3);

            let playerUsername = document.getElementsByClassName('pl-username');
            for(i=0;i<playerUsername.length;i++) {
                playerUsername[i].innerHTML = threeBestPlayers[i].gameName + " #" + threeBestPlayers[i].tagLine;
            }
        }
        showUsername();
    })


/* === SKIN BUNDLES === */
fetch("https://jsonblob.com/api/964120260466982912")
    .then(response => response.json())
    .then(data => {
        let skins = data.data;

        function showTopratedSkins() {

            //sorted by rating
            let sortedByRating = skins.sort((s1,s2) => s1.rating < s2.rating ? 1 : s1.rating > s2.rating ? -1 : 0);
            //console.log(sortedByRating);

            //taking first 12 best rated
            let bestTwelve = sortedByRating.slice(0,12);
            console.log(bestTwelve);
            
            //putting the promo image into html
            let skinPic = document.getElementsByClassName('top-rated-img');
            for(i=0;i<skinPic.length;i++) {
                skinPic[i].src = bestTwelve[i].verticalPromoImage;
            }
            //putting titles into html
            let skinTitle = document.getElementsByClassName('skin-title');
            for(i=0;i<skinPic.length;i++) {
                skinTitle[i].innerHTML = bestTwelve[i].displayName;
            }
            //putting tiers into html
            let skinTier = document.getElementsByClassName('tier');
            for(i=0;i<skinTier.length;i++) {
                skinTier[i].innerHTML = bestTwelve[i].contentTier;
            }
            //putting prices into html
            let skinPrice = document.getElementsByClassName('price');
            for(i=0;i<skinPrice.length;i++) {
                skinPrice[i].innerHTML = bestTwelve[i].price + " VP";
            }
        }
        showTopratedSkins();
    })