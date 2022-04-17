//this is where we pull info from


/* === PATCH NOTES API === */
fetch("https://jsonblob.com/api/964114737269063680")
    .then(response => response.json())
    .then(data => {
        let patchNotes = data.data;
        //console.log(patchNotes);

        function showSliderInfo() {

            //sort patch notes by date
            let sortedbyDate = patchNotes.sort((a,b) => Date.parse(b.date) - Date.parse(a.date));

            //show titles
            let slideTitles = document.getElementsByClassName('patchNote');
            for (let i=0; i< slideTitles.length; i++) {
                slideTitles[i].innerHTML = sortedbyDate[i].title;
            }

            //show cover pictures
            let sliderImages = document.getElementsByClassName('sliderImg');
            for (let i=0; i< sliderImages.length; i++) {
                sliderImages[i].src = sortedbyDate[i].cover;
            }
        }
        showSliderInfo();

        function showSliderModal() {

            let sortedbyDate = patchNotes.sort((a,b) => Date.parse(b.date) - Date.parse(a.date));

            let readMore = document.querySelectorAll("#read-more");
            let modalClose = document.querySelector("#close");
            let modalWindow = document.querySelector("#slider-modal");
            let modalTitle = document.querySelector("#mod-title");
            let modalImage = document.querySelector("#mod-img");
            let modalDate = document.querySelector("#date-span");
            let modalChanges = document.querySelector("#changes-span");
            let modalLink = document.querySelector("#link-span");

            //modal window
            for(let i=0;i<readMore.length;i++) {
                readMore[i].addEventListener("click", function() {
                    modalWindow.classList.add("show");
                    modalTitle.innerHTML = sortedbyDate[i].title;
                    modalImage.src = sortedbyDate[i].cover;
                    modalDate.innerHTML = sortedbyDate[i].date;
                    modalChanges.innerHTML = sortedbyDate[i].changes;
                    modalLink.innerHTML = sortedbyDate[i].title;
                    modalLink.href = sortedbyDate[i].link;
                });
            };
            //close modal window
            modalClose.addEventListener("click", function() {
                modalWindow.classList.remove("show");
            });
        }
        showSliderModal();
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

        function showBestPlayerModal() {

            let bestPlayers = document.querySelectorAll(".best-player");
            let bpModalclose = document.querySelector("#bp-close");
            let bpModalWindow = document.querySelector("#best-player-modal");
            let bpModalUser = document.querySelector("#uname-span");
            let bpModalTag = document.querySelector("#tag-span");
            let bpModalRank = document.querySelector("#rank-span");
            let bpModalWins = document.querySelector("#win-span");

            for(let i=0;i<bestPlayers.length;i++) {
                bestPlayers[i].addEventListener("click", function() {
                    bpModalWindow.classList.add("show");
                    bpModalUser.innerHTML = threeBestPlayers[i].gameName;
                    bpModalTag.innerHTML = "#" + threeBestPlayers[i].tagLine;
                    bpModalRank.innerHTML = threeBestPlayers[i].rankedRating;
                    bpModalWins.innerHTML = threeBestPlayers[i].numberOfWins;
                });
            }
            bpModalclose.addEventListener("click", function() {
                bpModalWindow.classList.remove("show");
            });
        }
        showBestPlayerModal();
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
            //console.log(bestTwelve);
            
            //putting the promo image into html
            let skinPic = document.getElementsByClassName('top-rated-img');
            for(let i=0;i<skinPic.length;i++) {
                skinPic[i].src = bestTwelve[i].verticalPromoImage;
            }
            //putting titles into html
            let skinTitle = document.getElementsByClassName('skin-title');
            for(let i=0;i<skinPic.length;i++) {
                skinTitle[i].innerHTML = bestTwelve[i].displayName;
            }
            //putting tiers into html
            let skinTier = document.getElementsByClassName('tier');
            for(let i=0;i<skinTier.length;i++) {
                skinTier[i].innerHTML = bestTwelve[i].contentTier;
            }
            //putting prices into html
            let skinPrice = document.getElementsByClassName('price');
            for(let i=0;i<skinPrice.length;i++) {
                skinPrice[i].innerHTML = bestTwelve[i].price + " VP";
            }
        }
        showTopratedSkins();
    })

fetch("https://jsonblob.com/api/964120260466982912")
    .then(response => response.json())
    .then(data => {
        let skinS = data.data;

        function showTopRatedModal() {

            let sortedRating = skinS.sort((s1,s2) => s1.rating < s2.rating ? 1 : s1.rating > s2.rating ? -1 : 0);
            let bestTwelveSkins = sortedRating.slice(0,12);

            //getting elements
            let skinCards = document.querySelectorAll(".top-rated-item");
            let trModalWindow = document.querySelector("#top-rated-modal");
            let trModalclose = document.querySelector("#tr-close");
            let trTitle = document.querySelector("#tr-mod-title");
            let trImage = document.querySelector("#tr-mod-img");
            let trTier = document.querySelector("#tier-span");
            let trCost = document.querySelector("#cost-span");

            for(let i=0;i<skinCards.length;i++) {
                skinCards[i].addEventListener("click", function() {
                    trModalWindow.classList.add("show");
                    trTitle.innerHTML = bestTwelveSkins[i].displayName;
                    trImage.src = bestTwelveSkins[i].displayIcon;
                    trTier.innerHTML = bestTwelveSkins[i].contentTier;
                    trCost.innerHTML = bestTwelveSkins[i].price + " VP";
                })
            }
            trModalclose.addEventListener("click", function() {
                trModalWindow.classList.remove("show");
            })
        }
        showTopRatedModal();

    })