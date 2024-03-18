import { getUser } from "/src/scripts/services/user.js";
import { getRepositories } from "/src/scripts/services/repositories.js";
import { getEvents } from "/src/scripts/services/events.js";

import { user } from "/src/scripts/objects/user.js"
import { screem } from "/src/scripts/objects/screem.js"

document.getElementById('btn-search').addEventListener('click', () => {
    let userName = document.getElementById('input-search').value
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    let userName = e.target.value
    let key = e.which || e.keyCode
    let enterKeyPress = key === 13
    if(enterKeyPress){
        getUserData(userName)
    }
})

async function getUserData(userName){
    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepositories(userName)
    const eventsResponse = await getEvents(userName)
    
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsResponse)

    console.log(user)
    
    screem.renderUser(user)
    screem.renderEvents(user)
}

