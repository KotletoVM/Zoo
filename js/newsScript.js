const newsNum = new URL(document.location.href).searchParams.get('news')
const cardHolder = document.querySelector('.card-holder')
const newsElement = document.querySelector('.news')
const text = newsElement.querySelector('.news-text')
const img = newsElement.querySelector('img')
const button = newsElement.querySelector('.card-button')
const buttons = document.querySelectorAll('.card-button')
let newsDisplayed = false;
const news = [
    {text: 'Что Вы знаете о ежах? Что они забавные и колючие, умилительно фыркают и  ' +
            'сворачиваются в клубок при опасности? Мы предлагаем встретиться с ежом Добрыней и  ' +
            'узнать о нем много нового. Ждем Вас 12, 14,19,21,23,26,28,30 августа с 13.00 до 13.30 ' +
            'на тропе следопыта',
        src: 'img/ezhi.jpg',
        title: 'ЁЖИКИ В ЗООПАРКЕ'},
    {text: 'Открытие зоопарка после отмены ограничений\n' +
            '\n' +
            'Зоопарк возобновил работу после снятия ограничений из-за COVID-19.Фото: Сергей Николаев/ РГ' +
            'Ленинградский зоопарк возобновил прием посетителей. Вход на территорию возможен только в масках и перчатках, граждане обязаны соблюдать социальную дистанцию.\n' +
            '\n' +
            'Фото: Пресс-служба администрации Петербурга' +
            'В Петербурге начался сезон фонтанов' +
            'Ленинградский зоопарк был закрыт для посещений с 18 марта в связи с пандемией коронавируса и введением ограничений в городе. 29 июня зоопарк открылся вновь,' +
            ' это первое учреждение культуры в Петербурге, которое заработало с начала пандемии.\n' +
            '\n' +
            'Животных большое количество посетителей не испугало, наоборот, в зоопарке говорят,' +
            'что звери скучали без людей.',
        src: 'img/lemuri.jpg',
        title: 'ЗООПАРК ОТКРЫТ'},
    {text: '28 мая в Ленинградском зоопарке родился уникальный житель - один из наиболее красивых представителей отряда чешуйчатых и самый крупный из существующих хамелеонов – хамелеон Парсони. \n' +
            '\n' +
            'Родина этого животного—остров Мадагаскар, обитает он в дождевых тропических лесах. Встретить в России такого красавца можно очень редко, так как его содержание требует соблюдения большого количества условий - от температуры воздуха и высокой влажности до диаметра веток в террариуме. \n' +
            '\n' +
            'Главная сложность разведения хамелеона Парсони заключается в том, что инкубационный период этих гигантов занимает около 2х лет! В течение этого срока приходится постоянно менять температурный режим, чтобы сымитировать естественную среду обитания.' +
            'Лишь несколько человек в мире смогли получить потомство от этих удивительных существ, и мы гордимся, что один них родился в Ленинградском зоопарке! ',
        src: 'img/hz.jpg',
        title: 'ПОПОЛНЕНИЕ В ЗООПАРКЕ'}
]

function displayNews(e, newsNumber = this.dataset.number) {
    if (!newsDisplayed){
        window.history.replaceState(null, null, `?news=${newsNumber}`);
        cardHolder.classList.add('opacity-none')
        setTimeout(() => {
            cardHolder.classList.add('display-none')
            newsElement.classList.remove('display-none','opacity-none')
        }, 150)
        text.textContent = news[newsNumber].text
        img.src = news[newsNumber].src
        img.alt = news[newsNumber].title
        button.textContent = news[newsNumber].title
        newsDisplayed = true
    }
    else {
        window.history.replaceState(null, null, '?');
        newsElement.classList.add('opacity-none')
        setTimeout(() => {
            newsElement.classList.add('display-none')
            cardHolder.classList.remove('display-none','opacity-none')
        }, 150)
        newsDisplayed = false
    }
}

window.addEventListener('load', () => newsNum&&displayNews(undefined, newsNum), {once: true})

buttons.forEach(button => {
    button.addEventListener('mouseup', displayNews)
})