const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {

    for(i = 0; i < allRonds.length; i++){

        if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){

            let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.5})

            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: true
            })
            .setTween(tween)
            // .addIndicators()
            .addTo(controller)

        }

    }

})


const txtAnim = document.querySelector('h1');
new Typewriter(txtAnim, {
  deleteSpeed: 40
})
.changeDelay(40)
.typeString('Moi c\'est Osmane')
.pauseFor(300)
.typeString('<strong>, Dev Full-Stack</strong>')
.pause(1000)
.deleteChars(10)
.typeString('<span style="color: midnightblue"> CSS</span> !')
.pauseFor(100)
.deleteChars(5)
.typeString('<span style="color: violet"> Ract</span> !')
.pauseFor(100)
.deleteChars(6)
.typeString('<span style="color: gray"> Letsgo</span> !')
.deleteChars(10)
.typeString('<span style="color: lightblue"> Sayain</span> !')
.start()


// 'darkMode'
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#checkbox');

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', null);
}
 
if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 
  
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {  
    disableDarkMode(); 
  }
});
