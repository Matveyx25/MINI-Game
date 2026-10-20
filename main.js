const topButton = document.querySelector('#button-top')
const leftButton = document.querySelector('#button-left')
const rightButton = document.querySelector('#button-right')
const bottomButton = document.querySelector('#button-bottom')

const player = document.querySelector('.player')
const playground = document.querySelector('.playground')

rightButton.addEventListener('click', () => {
	if(+player.style.left.split('px')[0] !== playground.clientWidth - player.clientWidth){
		let newValue = +player.style.left.split('px')[0] + 20
		
		player.setAttribute('style', `left: ${newValue}px;`)
	}
})