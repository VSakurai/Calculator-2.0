const inputEL = document.querySelector('.input')
const bodyEL = document.querySelector('body')

inputEL.checked = JSON.parse(localStorage.getItem('mode'))

updateBody()

function updateBody() {
	if (inputEL.checked) {
		bodyEL.classList.add('dark-mode')
	} else {
		bodyEL.classList.remove('dark-mode')
	}
}

inputEL.addEventListener('change', () => {
	updateBody()
	updateLocalStorage()
})

function updateLocalStorage() {
	localStorage.setItem('mode', JSON.stringify(inputEL.checked))
}
