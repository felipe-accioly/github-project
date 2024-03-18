const screem = {
    userProfile: document.querySelector('.profile-data'),

    renderUser(user){
        this.userProfile.innerHTML = `
        <div class="info">
            <img src="${user.avatarUrl}" alt="foto de perfil do usuário">
            <div class="data">
                <h2>${user.name ?? "O usuário não possui nome cadastrado 😢"}</h2>
                <p>${user.bio ?? "O usuário não possui bio cadastrada 😢"}</p>
                <p>Seguidores: ${user.followers}</p>
                <p>Seguindo: ${user.following}</p>
            </div>
        </div>`

        let repositoriesItens = ''

        user.repositories.forEach(repo => repositoriesItens += 
            `
        <li>
                <a href="${repo.html_url}" target="_blank">${repo.name}<br>
                <div class="info-repositories">
                    <span>🚀 ${repo.forks}</span>
                    <span>🧑‍💻 ${repo.watchers}</span>
                    <span>⭐ ${repo.stargazers_count}</span>
                    <span>🔤 ${repo.language ?? "🚫"}</span>
                </div>
            </a>
        </li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `
            <div class="repositories section">
                <h2>Repositórios</h2>
                <ul>${repositoriesItens}</ul>
            </div>
            `
        }
    },

    renderEvents(user){
        let eventsItens = '';

        user.events.forEach( event => {
            if(event.payload.commit){
                event.payload.commit.forEach(commit => {
                    eventsItens += `
                    <li>
                        <p>
                            <span class="name">${event.repo.name}</span> - ${commit.message}
                        </p>
                    </li>`
                })
            }
        })
        
        if(user.events.length > 0){
            this.userProfile.innerHTML += `
            <div class="events">
                <h2>Eventos</h2>
                <ul>${eventsItens}</ul>
            </div>`
        }else{
            this.userProfile.innerHTML += `
            <div class="events">
                <h2>Eventos</h2>
                <ul>
                    <li>
                        <h3>Nenhum evento recente</h3>
                    </li>
                </ul>
            </div>`
        }
    }
}
    //     let eventsItens = ''
    //     let count = 0

    //     user.events.forEach(events => {
    //         if(count < 10 && (events.type === 'CreateEvent' || events.type === 'PushEvent')){

    //             eventsItens += `<li><span>${events.repo.name}</span> - Voltar aqui!`;
    //             count ++;
    //         }
    // })
        
    //     this.userProfile.innerHTML += `
    //     <div class="events">
    //         <h2>Eventos</h2>
    //         <ul>${eventsItens}</ul>
    //     </div>`
        
    // }

export { screem }