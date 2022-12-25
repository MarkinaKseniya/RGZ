// declaring variables

const ef15 = document.getElementById('ef15');
const ef13 = document.getElementById('ef13');
const ef5 = document.getElementById('ef5');
const ef4 = document.getElementById('ef4');
const ef11 = document.getElementById('ef11');
const ef1 = document.getElementById('ef1');
ef11.addEventListener('click', () => {
    let start = Date.now();

    setInterval(() => {
        let int = Date.now() - start;
        ef11.style.rotate = `${int/5}deg`;
        if (int >= 10000) {

            ef11.style.rotate = '0deg'
            return;
          }
    }, 20)
  
})
ef1.addEventListener('click', () => {
    let start = Date.now();
    ef1.style.position = 'absolute';
    setInterval(() => {
        let int = Date.now() - start;
        ef1.style.right = `${int/5}px`;
        if (int >= 10000) {
            ef1.style.position = 'initial'
            return;
          }
    }, 20)
  
})
ef4.addEventListener('mouseenter', (e) => {
    let opacity = 20;

    setInterval(function ik() {
        if(opacity > 50){
            e.target.style.opacity = `${opacity}%`
            opacity = Math.ceil(Math.random()*100);
        } else {
            e.target.style.opacity = `${opacity}%`
            opacity = Math.ceil(Math.random()*100);
        }
    },1000);
    
})
function randColor(elem) {
    
                var element = document.getElementById(elem),
                    
                    r = Math.floor(Math.random() * (256)),
                    g = Math.floor(Math.random() * (256)),
                    b = Math.floor(Math.random() * (256)),

                    color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    
                element.style.backgroundColor = color;
           
            }
ef5.addEventListener('click',() => {
    randColor(ef5.id);
})
ef13.addEventListener('click', (e) => {
    if(ef13.style.filter === 'sepia(100%)'){
        ef13.style.filter = 'sepia(0%)'
    }else {
        ef13.style.filter = 'sepia(100%)'
    }
  
})
ef15.addEventListener('click', () => {

    if(ef15.src === 'https://i.redd.it/urk3diig5ue61.png'){
        ef15.src = 'https://i.redd.it/6do158vk2ue61.png'
    } else {
        ef15.src = 'https://i.redd.it/urk3diig5ue61.png'
    }
})
var typeText = document.querySelector(".typeText")
var textToBeTyped = "милые маленькие котёнки"
var index = 0, isAdding = true

function playAnim() {
  setTimeout(function () {
    // set the text of typeText to a substring of the text to be typed using index.
    typeText.innerText = textToBeTyped.slice(0, index)
    if (isAdding) {
      // adding text
      if (index > textToBeTyped.length) {
        // no more text to add
        isAdding = false
        //break: wait 2s before playing again
        setTimeout(function () {
          playAnim()
        }, 2000)
        return
      } else {
        // increment index by 1
        index++
      }
    } else {
      // removing text
      if (index === 0) {
        // no more text to remove
        isAdding = true
      } else {
        // decrement index by 1
        index--
      }
    }
    // call itself
    playAnim()
  }, 120)
}
// start animation
playAnim()


const btnAlert = document.getElementById('btn');
btnAlert.addEventListener('click', () => {
    alert('Подарок')
})
btnClick.addEventListener('click', (e) => {
    console.log(e.target.innerText)
    const points = ['Завтра','Опять','в','Школу']
    let currentIndex = points.indexOf(e.target.innerText);
    console.log(currentIndex)
    e.target.innerText = points[currentIndex+1] ?? points[0];
})
const promtClick = document.getElementById('btnPromt');

promtClick.addEventListener('click', () => {
    let res = prompt('Сколько вы весите??');
    let list = document.getElementById('soc-opros');
    let current = document.getElementById(res)
     
    if(current){
        console.log(current.innerText)
        current.innerText = String(Number(current.innerText)+1);
    } else {
        let p = document.createElement('p');
        let counter = document.createElement('span');
        counter.innerText = '1'
        p.innerText = `${res} кг :`;
        counter.id = res;
        p.append(counter);
        list.append(p);
    }

})