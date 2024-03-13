const img = [
    { number: 1, src: './img/one.png' },
    { number: 2, src: './img/two.png' },
    { number: 3, src: './img/three.png' },
    { number: 4, src: './img/four.png' },
    { number: 5, src: './img/five.png' },
    { number: 6, src: './img/six.png' },
]
const img1 = document.querySelector('.player1_img')
const img2 = document.querySelector('.player2_img')
const play = document.querySelector('button')
const h2 = document.querySelector('h2')

function changeDicesOfPlayer() {
    let user1 = generateRandomNumber() - 1
    let user2 = generateRandomNumber() - 1
    img1.src = img[user1].src
    img2.src = img[user2].src

    checkWinner(user1, user2)
}
function checkWinner(player1, player2) {

    if (player1 === player2) {
        h2.textContent = 'Draw'
    } else if (player1 > player2) {
        h2.textContent = `Player A Won the Game`
    } else {
        h2.textContent = `Player B Won the Game`
    }

}

play.addEventListener('click', changeDicesOfPlayer)
changeDicesOfPlayer()
function generateRandomNumber() {
    return Math.floor(Math.random() * (6 - 1) + 1)
}
