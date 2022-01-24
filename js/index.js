'use strict'
let amountSlider = document.querySelector('#amountSlider')
let periodSlider = document.querySelector('#periodSlider')
let loanAmount = document.getElementById('loanAmount')
let loanPeriod = document.getElementById('loanPeriod')
let monthyCost = document.querySelector('#cost')
let applyButton = document.querySelector('button')
loanAmount.textContent = parseInt(amountSlider.value)
loanPeriod.textContent = parseInt(periodSlider.value)
amountSlider.addEventListener('input', showAmountValue, false)
function showAmountValue() {
  loanAmount.innerHTML =  parseInt(amountSlider.value).toLocaleString('fr-FR')
  let bulletPosition = (amountSlider.value / amountSlider.max)
    loanAmount.style.left = (bulletPosition * 6) + "em";
  calculateMonthyCost()
}
console.log(typeof(loanAmount.textContent))
periodSlider.addEventListener('input', showPeriodValue, false)
function showPeriodValue() {
  loanPeriod.textContent = parseInt(periodSlider.value)
  let bulletPosition = (periodSlider.value / periodSlider.max);
  loanPeriod.style.left = (bulletPosition * 7) + "em";
  calculateMonthyCost()
}

function calculateMonthyCost() {
  let x =
    parseInt(amountSlider.value) *
    0.00825 *
    Math.pow(1 + 0.00825, parseInt(loanPeriod.textContent) * 12)

  let y = Math.pow(1 + 0.00825, parseInt(loanPeriod.textContent) * 12) - 1
  let totalAmount = x / y

  monthyCost.innerHTML = totalAmount.toFixed(0)
}
applyButton.addEventListener('click', handleClick, false)
function handleClick() {
  let months = parseInt(loanPeriod.textContent) * 12
  console.log(
    `loan-application/?amount=${parseInt(
      loanAmount.textContent
    )}&months=${months}`
  )
}
