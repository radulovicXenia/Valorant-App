
//Agents API
const filterBtns = document.getElementsByClassName('filter-btn');

fetch("https://valorant-api.com/v1/agents")
    .then(response => response.json())
    .then(data => {
        let agents = data.data;

        //there is an agent duplicate in the API
        //i have to remove the duplicate and work with a new array of agents
        let agentsNoduplicate = []
        agents.forEach((agent) => {
            if(agent.isPlayableCharacter === true) {
                agentsNoduplicate.push(agent);
            }
        })
        //console.log(agentsNoduplicate);

        //function to display all agents
        //making agent cards
        agentsNoduplicate.forEach((agent) => {
            let card = document.createElement("div");
            card.classList.add('card', agent.role.displayName);
            //agent name
            let agentName = document.createElement("h3")
            agentName.innerHTML = agent.displayName;
            card.appendChild(agentName);
            //agent image
            let imgContainer = document.createElement("div");
            imgContainer.classList.add('image-container');
            let image = document.createElement("img");
            image.setAttribute("src", agent.fullPortraitV2);
            imgContainer.appendChild(image);
            card.appendChild(imgContainer);
            //agent role
            let agentRole = document.createElement("div");
            agentRole.classList.add('a-role');
            let agentRoletext = document.createElement("span");
            agentRoletext.innerHTML = "Agent Role: " + agent.role.displayName;
            agentRole.appendChild(agentRoletext);
            card.appendChild(agentRole);
            //agent description
            let agentDescription = document.createElement("div");
            agentDescription.classList.add('a-desc');
            let agentDescText = document.createElement("span");
            agentDescText.innerHTML = agent.description;
            agentDescription.appendChild(agentDescText);
            card.appendChild(agentDescription);
            //add agent to html
            document.getElementById('agents').appendChild(card);
        })

        document.getElementById('all').addEventListener("click", function() {
            filterAll();
        })

        document.getElementById('duelist').addEventListener("click", function() {
            filterDuelists();
        })

        document.getElementById('inititator').addEventListener("click", function() {
            filterInitiators();
        })

        document.getElementById('sentinel').addEventListener("click", function() {
            filterSentinels();
        })

        document.getElementById('controller').addEventListener("click", function() {
            filterControllers();
        })

        //show all agents
        function filterAll() {
            let elements = document.querySelectorAll(".card");
            elements.forEach(element => {
                element.classList.remove('hide');
            })
        }

        //filter duelists
        function filterDuelists() {

            //takng all agents
            let elements = document.querySelectorAll(".card");
            console.log(elements);
            //displaying only duelists and iding all other agents
            elements.forEach(element => {
                if(element.classList.contains("Duelist")) {
                    element.classList.remove('hide');
                }else {
                    element.classList.add('hide');
                }
            })
        };

         //filter initiators
         function filterInitiators() {

            let elements = document.querySelectorAll(".card");
            console.log(elements);
    
            elements.forEach(element => {
                if(element.classList.contains("Initiator")) {
                    element.classList.remove('hide');
                }else {
                    element.classList.add('hide');
                }
            })
        };

         //filter Sentinels
         function filterSentinels() {

            let elements = document.querySelectorAll(".card");
            console.log(elements);
    
            elements.forEach(element => {
                if(element.classList.contains("Sentinel")) {
                    element.classList.remove('hide');
                }else {
                    element.classList.add('hide');
                }
            })
        };

         //filter controllers
         function filterControllers() {

            let elements = document.querySelectorAll(".card");
            console.log(elements);
    
            elements.forEach(element => {
                if(element.classList.contains("Controller")) {
                    element.classList.remove('hide');
                }else {
                    element.classList.add('hide');
                }
            })
        };
    })
