let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let sissors = document.getElementById('sissors')
let playerpicked = document.getElementById('playerpicked')
let compicked = document.getElementById('computerpicked')
let whowins = document.getElementById('whowins')
let playerscore = document.getElementById('playerscore')
let comnum = document.getElementById('comnum')
let playerimg = document.getElementById('playerchoiceimg')
let computerimg = document.getElementById('computerchoiceimg')

let playernumber = 0
let computerscore = 0

rock.addEventListener("click", function (event){
    event.preventDefault()
    let randomnumber = Math.floor(Math.random()*3)
    console.log(randomnumber)
    if(randomnumber == 0) {
        console.log('draw')
        compicked.innerHTML = 'rock'
        whowins.innerHTML = 'DRAW'
        computerimg.src = "icons/rock.jpg"
    }else if(randomnumber == 1) {
        console.log('lose')
        compicked.innerHTML = 'paper'
        whowins.innerHTML = 'YOU LOSE'
        computerscore++
        comnum.innerHTML = computerscore.toString()
        computerimg.src = "icons/paper.jpg"
    }else if(randomnumber == 2) {
        console.log('win')
        compicked.innerHTML = 'sissors'
        whowins.innerHTML = 'YOU WIN'
        playernumber++
        console.log(playernumber.toString())
        playerscore.innerHTML = playernumber.toString()
        computerimg.src = "icons/sissor.jpg"
    }
    playerimg.src = 'icons/rock.jpg'
    playerpicked.innerHTML = "rock"
})

paper.addEventListener("click", function (){
    let randomnumber = Math.floor(Math.random()*3)
    console.log(randomnumber)
    if(randomnumber == 0) {
        console.log('win')
        compicked.innerHTML = 'rock'
        whowins.innerHTML = 'YOU WIN'
        playernumber++
        console.log(playernumber.toString())
        playerscore.innerHTML = playernumber.toString()
        computerimg.src = "icons/rock.jpg"
    }
    if(randomnumber == 1) {
        console.log('draw')
        compicked.innerHTML = 'paper'
        whowins.innerHTML = 'DRAW'
        computerimg.src = "icons/paper.jpg"
    }
    if(randomnumber == 2) {
        console.log('lose')
        compicked.innerHTML = 'sissors'
        whowins.innerHTML = 'YOU LOSE'
        computerscore++
        comnum.innerHTML = computerscore.toString()
        computerimg.src = "icons/sissor.jpg"
    }
    playerpicked.innerHTML = "paper"
    playerimg.src = 'icons/paper.jpg'
})

sissors.addEventListener("click", function (){
    let randomnumber = Math.floor(Math.random()*3)
    console.log(randomnumber)
    if(randomnumber == 0) {
        console.log('lose')
        compicked.innerHTML = 'rock'
        whowins.innerHTML = 'YOU LOSE'
        computerscore++
        comnum.innerHTML = computerscore.toString()
        computerimg.src = "icons/rock.jpg"
    }
    if(randomnumber == 1) {
        console.log('win')
        compicked.innerHTML = 'paper'
        whowins.innerHTML = 'YOU WIN'
        playernumber++
        console.log(playernumber.toString())
        playerscore.innerHTML = playernumber.toString()
        computerimg.src = "icons/paper.jpg"
    }
    if(randomnumber == 2) {
        console.log('draw')
        compicked.innerHTML = 'sissors'
        whowins.innerHTML = 'DRAW'
        computerimg.src = "icons/sissor.jpg"
    }
    playerpicked.innerHTML = "sissors"
    playerimg.src = 'icons/sissor.jpg'
})
