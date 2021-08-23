function setPlayerStyle(player) {
    player.style.border = '1px solid red';
    player.style.margin = '10px';
    player.style.padding = '10px';
    player.style.borderRadius = '20px';
}

const players = document.getElementsByClassName('player');

for (const player of players) {
    setPlayerStyle(player);

}

function addPlayer() {
    const playersContainer = document.getElementById('players')
    const player = document.createElement('div');
    player.classList.add('player')
    player.innerHTML = `
    <h4 class="player-name">New Player</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod pariatur dolore laudantium enim deserunt deleniti velit doloribus quas quam incidunt, dolorem tempore. Quas illo aut ullam eius quidem tempore quo!
                </p>
    `
    setPlayerStyle(player);
    playersContainer.appendChild(player);

}

document.getElementById('players').addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = "green";
    } else {
        event.target.parentNode.style.backgroundColor = 'red'

    }
})