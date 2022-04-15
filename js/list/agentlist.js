
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
        console.log(agentsNoduplicate);

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

        /*function filterAgents(keyword) {

            //it should remove 'hide' class from the agent card so that it only shows agents with the keyword
            let elements = document.getElementsByClassName('card');
            elements.forEach(element => {
                if(element.classList.contains(keyword)) {
                    element.classList.remove('hide');
                }else {
                    element.classList.add('hide');
                }
            });
        };
        filterAgents('Duelists');*/
    
    })