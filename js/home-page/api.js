//this is where we pull info from


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