const inc = document.querySelector('.inc')
const dec = document.querySelector('.dec')
const countVal = document.querySelector('.count')
const reset = document.querySelector('.reset')

reset.addEventListener('click', () => {
    countVal.textContent = 0
})
inc.addEventListener('click', () => {
    let userInputValue = +document.querySelector('input').value
    countVal.textContent = Number(countVal.textContent) + Number(userInputValue)
})
dec.addEventListener('click', () => {
    let userInputValue = +document.querySelector('input').value
    countVal.textContent = Number(countVal.textContent) - Number(userInputValue)
})