
//Weapons API

let filterBtns = document.getElementsByClassName('filter-btn');

fetch("https://valorant-api.com/v1/weapons")
    .then(response => response.json())
    .then(data => {
        let weapons = data.data;
        //console.log(weapons);

        //removing the knife from weapon array
        let onlyGuns = [];
        weapons.forEach(weapon => {
            if(weapon.shopData !== null)
            onlyGuns.push(weapon);
        });
        //console.log(onlyGuns);


        //how to display all weapons
        //making weapons cards
        onlyGuns.forEach((weapon) => {
            let card = document.createElement("div");
            card.classList.add('card');
            if(weapon.shopData.category === "Heavy Weapons") {
                card.classList.add("Heavy");
            }else if(weapon.shopData.category === "Sniper Rifles") {
                card.classList.add("Sniper");
            }else {
                card.classList.add(weapon.shopData.category);
            }
            //weapon name
            let weaponName = document.createElement("h3")
            weaponName.innerHTML = weapon.displayName;
            card.appendChild(weaponName);
            //weapon image
            let imgContainer = document.createElement("div");
            imgContainer.classList.add('image-container');
            let image = document.createElement("img");
            image.setAttribute("src", weapon.displayIcon);
            imgContainer.appendChild(image);
            card.appendChild(imgContainer);
            //weapon category
            let gunCategory = document.createElement("div");
            gunCategory.classList.add('a-category');
            let gunCategoryText = document.createElement("span");
            gunCategoryText.innerHTML = "Category: " + weapon.shopData.category;
            gunCategory.appendChild(gunCategoryText);
            card.appendChild(gunCategory);
            //gun price
            let gunPrice = document.createElement("div");
            gunPrice.classList.add('a-price');
            let gunPriceText = document.createElement("span");
            gunPriceText.innerHTML = "Ingame price: " + weapon.shopData.cost;
            gunPrice.appendChild(gunPriceText);
            card.appendChild(gunPrice);
            //add weapon to html
            document.getElementById('weapons').appendChild(card);
        });

        //on button click, filter weapons
        document.getElementById('all').addEventListener("click", function() {
            //remove active class for all buttons
            for(i=0; i<filterBtns.length;i++) {
                filterBtns[i].classList.remove('active');
            }
            //add active class to the curent filter button
            document.getElementById('all').classList.add('active');
            //filter weapons
            filterAll();
        })

        document.getElementById('pistols').addEventListener("click", function() {
            for(i=0; i<filterBtns.length;i++) {
                filterBtns[i].classList.remove('active');
            }
            document.getElementById('pistols').classList.add('active');
            filterPistols();
        })

        document.getElementById('smgs').addEventListener("click", function() {
            for(i=0; i<filterBtns.length;i++) {
                filterBtns[i].classList.remove('active');
            }
            document.getElementById('smgs').classList.add('active');
            filterSmgs();
        })

        document.getElementById('shotguns').addEventListener("click", function() {
            for(i=0; i<filterBtns.length;i++) {
                filterBtns[i].classList.remove('active');
            }
            document.getElementById('shotguns').classList.add('active');
            filterShotguns();
        })

        document.getElementById('rifles').addEventListener("click", function() {
            for(i=0; i<filterBtns.length;i++) {
                filterBtns[i].classList.remove('active');
            }
            document.getElementById('rifles').classList.add('active');
            filterRifles();
        })

        document.getElementById('snipers').addEventListener("click", function() {
            for(i=0; i<filterBtns.length;i++) {
                filterBtns[i].classList.remove('active');
            }
            document.getElementById('snipers').classList.add('active');
            filterSnipers();
        })

        document.getElementById('heavy').addEventListener("click", function() {
            for(i=0; i<filterBtns.length;i++) {
                filterBtns[i].classList.remove('active');
            }
            document.getElementById('heavy').classList.add('active');
            filterHeavy();
        })

        //show all weapons
        function filterAll() {
            let elements = document.querySelectorAll(".card");
            elements.forEach(element => {
                element.classList.remove('hide');
            })
        }

        //filter pistols
        function filterPistols() {

            //takng all weapons
            let elements = document.querySelectorAll(".card");
            //displaying only pistols and hiding all other weapons
            elements.forEach(element => {
                if(element.classList.contains("Pistols")) {
                    element.classList.remove('hide');
                }else {
                    element.classList.add('hide');
                }
            })
        };

         //filter smgs
        function filterSmgs() {

            let elements = document.querySelectorAll(".card");
    
            elements.forEach(element => {
                if(element.classList.contains("SMGs")) {
                    element.classList.remove('hide');
                }else {
                    element.classList.add('hide');
                }
            })
        };

         //filter shotguns
        function filterShotguns() {

            let elements = document.querySelectorAll(".card");
    
            elements.forEach(element => {
                if(element.classList.contains("Shotguns")) {
                    element.classList.remove('hide');
                }else {
                    element.classList.add('hide');
                }
            })
        };

         //filter rifles
        function filterRifles() {

            let elements = document.querySelectorAll(".card");
    
            elements.forEach(element => {
                if(element.classList.contains("Rifles")) {
                    element.classList.remove('hide');
                }else {
                    element.classList.add('hide');
                }
            })
        };

        //filter snipers
        function filterSnipers() {

            let elements = document.querySelectorAll(".card");
    
            elements.forEach(element => {
                if(element.classList.contains("Sniper")) {
                    element.classList.remove('hide');
                }else {
                    element.classList.add('hide');
                }
            })
        };

        //filter heavy machineguns
        function filterHeavy() {

            let elements = document.querySelectorAll(".card");

            elements.forEach(element => {
                if(element.classList.contains("Heavy")) {
                    element.classList.remove('hide');
                }else {
                    element.classList.add('hide');
                }
            })
        };
    
    });