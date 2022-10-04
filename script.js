const entities = [
    {
      img: 'img/rostov-admiral.png',
      city: `Rostov-on-Don\nLCD admiral`,
      repairTime: '3.5 months',
      area: `81m2`
    },
    {
      img: 'img/sochi-thieves.png',
      city: 'Sochi\nThieves',
      repairTime: '4 months',
      area: "105m2"
    },
    {
      img: 'img/rostov-patriotic.png',
      city: 'Rostov-on-Don\nPatriotic',
      repairTime: '3 months',
      area: "93m2"
    }
]
const img = document.querySelector('.com-pro-double-second');
const repairTime = document.querySelector('.repair-time');
const city = document.querySelector('.city');
const area = document.querySelector('.area');

const setEntity = (index) => {
  img.style.backgroundImage = `url(${entities[index].img})`
  repairTime.innerText = entities[index].repairTime,
  city.innerText = entities[index].city,
  area.innerText = entities[index].area
}

const prevArrow = document.querySelector('.com-pro-arrow-left');
const nextArrow = document.querySelector('.com-pro-arrow-right');

const circle_1 = document.getElementById('circle-1');
const circle_2 = document.getElementById('circle-2');
const circle_3 = document.getElementById('circle-3');

const hotel_1 = document.getElementById('hotel-1');
const hotel_2 = document.getElementById('hotel-2');
const hotel_3 = document.getElementById('hotel-3');

let currentIndex = 0;

function CheckIndex(index) {
    if(index > 2) {
        index = 0;
    }
    if(index < 0) {
        index = 2;
    }
    return index;
}

function Select(index) {
    let circles = document.getElementById("circles");
    circles.children[index].classList.add("white");

    let navigation = document.getElementById("hotels-navigation");
    navigation.children[index].classList.add("com-pro-hotels-navigation-item-gold");
    navigation.children[index].firstChild.classList.add("word-gold");
}

function UnSelect(index) {
    let circles = document.getElementById("circles");
    circles.children[index].classList.remove("white");

    let navigation = document.getElementById("hotels-navigation");
    navigation.children[index].classList.remove("com-pro-hotels-navigation-item-gold");
    navigation.children[index].firstChild.classList.remove("word-gold");
}

function MouseSelect(plus, indexNumber) {
    UnSelect(currentIndex);
    if(plus) {
        currentIndex += 1;
    } else {
        currentIndex -= 1;
    }

    if(indexNumber != null) {
        currentIndex = indexNumber;
    }
    
    currentIndex = CheckIndex(currentIndex);
    Select(currentIndex);
    setEntity(currentIndex);
}

prevArrow.addEventListener('click', () => {
    MouseSelect(false);
})
nextArrow.addEventListener('click', () => {
    MouseSelect(true);
})

circle_1.addEventListener('click', () => { MouseSelect(false, 0); })
circle_2.addEventListener('click', () => { MouseSelect(false, 1); })
circle_3.addEventListener('click', () => { MouseSelect(false, 2); })

hotel_1.addEventListener('click', () => { MouseSelect(false, 0); })
hotel_2.addEventListener('click', () => { MouseSelect(false, 1); })
hotel_3.addEventListener('click', () => { MouseSelect(false, 2); })

