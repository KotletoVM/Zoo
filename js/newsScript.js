const cardHolder = document.querySelector('.card-holder')
const news = document.querySelector('.news')
const text = news.querySelector('.news-text')
const img = news.querySelector('img')
const buttons = document.querySelectorAll('.card-button')

const newsText = ['', '', '']
const newsImg = ['', '', '']

function displayNews() {
    cardHolder.style.display = 'none'
    news.style.display = ''
    text.textContent = this.dataset.number
}

buttons.forEach(button => {
    button.addEventListener('mouseup', displayNews)
})