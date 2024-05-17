
const urlBase  = "https://api.github.com/users/Scurra55HS/followers";
document.addEventListener("DOMContentLoaded", function() {
    fetch('https://api.github.com/users/marlucealves1')
    .then(response => response.json())
    .then(data => {
        console.log(data.avatar_url)
        const perfilDiv = document.getElementById('perfil')
        perfilDiv.innerHTML = `
            <h2 class="nome">${data.name}</h2>
            <img class="perfil-img" src="${data.avatar_url}" alt="Avatar">
            <p class="bio">${data.bio}</p>
        `

        fetch(data.followers_url)
            .then(response => response.json())
            .then(followersData => {
                const listaSeguidoresDiv = document.getElementById('listaSeguidores')
                followersData.forEach(follower => {
                    listaSeguidoresDiv.innerHTML += `
                        <div class="seguidor">
                            <img src="${follower.avatar_url}" alt="Avatar">
                        </div>
                    `
                })
            })
            .catch(error => console.error('Erro ao carregar:', error))
    })
    .catch(error => console.error('Erro ao carregar :', error))
})
