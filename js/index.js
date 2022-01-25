'use strict'
let amountSlider = document.querySelector('#amountSlider')
let periodSlider = document.querySelector('#periodSlider')
let loanAmount = document.getElementById('loanAmount')
let loanPeriod = document.getElementById('loanPeriod')
let monthyCost = document.querySelector('#cost')
let applyButton = document.querySelector('button')
const min = amountSlider.min
const max = amountSlider.max
const value = amountSlider.value
loanAmount.textContent = parseInt(amountSlider.value)
loanPeriod.textContent = parseInt(periodSlider.value)
amountSlider.addEventListener('input', showAmountValue, false)
function showAmountValue() {
  loanAmount.innerHTML = parseInt(amountSlider.value).toLocaleString('fr-FR')
  calculateMonthyCost()
  loanAmount.textContent = amountSlider.value
  let bulletPosition = amountSlider.value / amountSlider.max
  loanAmount.style.left = bulletPosition * 40 + 'em'
  amountSlider.oninput = function () {
    this.style.background = `linear-gradient(to right, #6b1fae 0%, #6b1fae ${
      ((this.value - this.min) / (this.max - this.min)) * 100
    }%, #DEE2E6 ${
      ((this.value - this.min) / (this.max - this.min)) * 100
    }%, #DEE2E6 100%)`
  }
}
periodSlider.addEventListener('input', showPeriodValue, false)
function showPeriodValue() {
  loanPeriod.textContent = parseInt(periodSlider.value)
  let bulletPosition = periodSlider.value / periodSlider.max
  loanPeriod.style.left = bulletPosition * 17 + 'em'
  calculateMonthyCost()
  periodSlider.oninput = function () {
    this.style.background = `linear-gradient(to right, #6b1fae 0%, #6b1fae ${
      ((this.value - this.min) / (this.max - this.min)) * 100
    }%, #DEE2E6 ${
      ((this.value - this.min) / (this.max - this.min)) * 100
    }%, #DEE2E6 100%)`
  }
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
