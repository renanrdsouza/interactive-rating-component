const button = document.getElementById('submit-button')
const rateItems = document.querySelectorAll('.list-item')
const rateDescription = document.getElementById('rate-description')
const ratingStateSection = document.getElementById('rating-state')
const thankYouSection = document.getElementById('thank-you-state')
let lastRated = ''

for (let i = 0; i < rateItems.length; i++) {
  rateItems[i].addEventListener('click', function () {
    if (lastRated) {
      rateItems[lastRated - 1].classList.remove('rate-selected')
    }

    lastRated = rateItems[i].dataset.value
    this.classList.add('rate-selected')
  })
}

button.addEventListener('click', function () {
  if (lastRated == '') {
    alert('Please, select a value.')
  } else {
    ratingStateSection.style.display = "none"
    thankYouSection.style.display = "flex"
    rateDescription.innerText = `You selected ${lastRated} out of 5.`
  }
})