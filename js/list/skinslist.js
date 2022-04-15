
//Skins API

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

    
    })