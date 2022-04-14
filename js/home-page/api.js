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
            for (i=0; i< slideTitles.length; i++) {
                slideTitles[i].innerHTML = sortedbyDate[i].title;
            }

            //show cover pictures
            let sliderImages = document.getElementsByClassName('sliderImg');
            for (i=0; i< sliderImages.length; i++) {
                sliderImages[i].src = sortedbyDate[i].cover;
            }
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