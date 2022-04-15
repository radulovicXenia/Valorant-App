
//Weapons API

fetch("https://valorant-api.com/v1/weapons")
    .then(response => response.json())
    .then(data => {
        let weapons = data.data;
        console.log(weapons);


        //how to display all weapons
        //making weapons cards
        weapons.forEach((weapon) => {
            let card = document.createElement("div");
            card.classList.add('card');
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
            gunPriceText.innerHTML = weapon.shopData.cost;
            gunPrice.appendChild(gunPriceText);
            card.appendChild(gunPrice);
            //add weapon to html
            document.getElementById('weapons').appendChild(card);
        });

    
    });