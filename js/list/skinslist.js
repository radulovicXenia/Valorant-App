
//Skins API
let filterBtns = document.getElementsByClassName('filter-btn');

fetch("https://jsonblob.com/api/964120260466982912")
    .then(response => response.json())
    .then(data => {
        let skins = data.data;


        //function to display all skins
        //making skin cards
        skins.forEach((skin) => {
            let card = document.createElement("div");
            card.classList.add('card', skin.contentTier);
            //skin name
            let skinName = document.createElement("h3")
            skinName.innerHTML = skin.displayName;
            card.appendChild(skinName);
            //skin image
            let imgContainer = document.createElement("div");
            imgContainer.classList.add('image-container');
            let image = document.createElement("img");
            image.setAttribute("src", skin.displayIcon);
            imgContainer.appendChild(image);
            card.appendChild(imgContainer);
            //skin tier
            let skinTier = document.createElement("div");
            skinTier.classList.add('a-tier');
            let skinTierText = document.createElement("span");
            skinTierText.innerHTML = "Tier: " + skin.contentTier;
            skinTier.appendChild(skinTierText);
            card.appendChild(skinTier);
            //skin price
            let skinPrice = document.createElement("div");
            skinPrice.classList.add('a-price');
            let skinPricetext = document.createElement("span");
            skinPricetext.innerHTML = skin.price + " VP";
            skinPrice.appendChild(skinPricetext);
            card.appendChild(skinPrice);
            //add agent to html
            document.getElementById('skins').appendChild(card);
        })

        //on button click, filter skins
        document.getElementById('all').addEventListener("click", function() {
            //remove active class for all buttons
            for(i=0; i<filterBtns.length;i++) {
                filterBtns[i].classList.remove('active');
            }
            //add active class to the curent filter button
            document.getElementById('all').classList.add('active');
            //filter skins
            filterAll();
        })

        document.getElementById('select').addEventListener("click", function() {
            for(i=0; i<filterBtns.length;i++) {
                filterBtns[i].classList.remove('active');
            }
            document.getElementById('select').classList.add('active');
            filterSelect();
        })

        document.getElementById('deluxe').addEventListener("click", function() {
            for(i=0; i<filterBtns.length;i++) {
                filterBtns[i].classList.remove('active');
            }
            document.getElementById('deluxe').classList.add('active');
            filterDeluxe();
        })

        document.getElementById('premium').addEventListener("click", function() {
            for(i=0; i<filterBtns.length;i++) {
                filterBtns[i].classList.remove('active');
            }
            document.getElementById('premium').classList.add('active');
            filterPremium();
        })

        document.getElementById('exclusive').addEventListener("click", function() {
            for(i=0; i<filterBtns.length;i++) {
                filterBtns[i].classList.remove('active');
            }
            document.getElementById('exclusive').classList.add('active');
            filterExclusive();
        })

        document.getElementById('ultra').addEventListener("click", function() {
            for(i=0; i<filterBtns.length;i++) {
                filterBtns[i].classList.remove('active');
            }
            document.getElementById('ultra').classList.add('active');
            filterUltra();
        })

        //show all skins
        function filterAll() {
            let elements = document.querySelectorAll(".card");
            elements.forEach(element => {
                element.classList.remove('hide');
            })
        }

        //filter select tier skins
        function filterSelect() {

            //takng all skins
            let elements = document.querySelectorAll(".card");
            console.log(elements);
            //displaying only select tier skins and hiding all other skins
            elements.forEach(element => {
                if(element.classList.contains("Select")) {
                    element.classList.remove('hide');
                }else {
                    element.classList.add('hide');
                }
            })
        };

         //filter deluxe
        function filterDeluxe() {

            let elements = document.querySelectorAll(".card");
            console.log(elements);
    
            elements.forEach(element => {
                if(element.classList.contains("Deluxe")) {
                    element.classList.remove('hide');
                }else {
                    element.classList.add('hide');
                }
            })
        };

         //filter premium
        function filterPremium() {

            let elements = document.querySelectorAll(".card");
            console.log(elements);
    
            elements.forEach(element => {
                if(element.classList.contains("Premium")) {
                    element.classList.remove('hide');
                }else {
                    element.classList.add('hide');
                }
            })
        };

         //filter exclusive
        function filterExclusive() {

            let elements = document.querySelectorAll(".card");
            console.log(elements);
    
            elements.forEach(element => {
                if(element.classList.contains("Exclusive")) {
                    element.classList.remove('hide');
                }else {
                    element.classList.add('hide');
                }
            })
        };

        //filter ultra
        function filterUltra() {

            let elements = document.querySelectorAll(".card");
            console.log(elements);
    
            elements.forEach(element => {
                if(element.classList.contains("Ultra")) {
                    element.classList.remove('hide');
                }else {
                    element.classList.add('hide');
                }
            })
        };
    
    })