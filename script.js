console.log("Hello from script.js!");

//let LastScrollTop = 0;
//const header = 
//document.getElementById('header');

//window.addEventListener('scroll', () => {
  //  const currentScroll = window.scrollY
    // || document.documentElement.scrollTop;
//
  //   if (currentScroll > LastScrollTop) {
    //    header.classList.add('hidden');
     //} else {
       // header.classList.remove('hidden');
     //}

     //LastScrollTop = currentScroll;
   //});


/* background */

   //  const interBubble = document.querySelector('.interactive');
   //  let curX = 0;
   //  let curY = 0;
   //  let tgX = 0;
   //  let tgY = 0;

   //  function move() {
   //      curX += (tgX - curX) / 20;
   //      curY += (tgY - curY) / 20;
   //      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
   //      requestAnimationFrame(() => {
   //          move();
   //      });
   //  }

   //  window.addEventListener('mousemove', (event) => {
   //      tgX = event.clientX;
   //      tgY = event.clientY;
   //  });

   //  move();


/*
   document.addEventListener("DOMContentLoaded", function() {
      // Get all the <a> elements in the navigation
      const navLinks = document.querySelectorAll("nav a");
  
      // Add click event listeners to each navigation link
      navLinks.forEach(function(navLink) {
          navLink.addEventListener("click", function(event) {
              event.preventDefault();
              const targetId = this.getAttribute("href"); // Get the href attribute of the clicked link
              const targetSection = document.querySelector(targetId); // Get the section with the corresponding ID
              targetSection.scrollIntoView({ behavior: "smooth" });   // Scroll to the target section smoothly
          });
      });
  
      // Add scroll event listener to highlight the active navigation link
      window.addEventListener("scroll", function() {
          const fromTop = window.scrollY;
          navLinks.forEach(function(navLink) {
              const section = document.querySelector(navLink.getAttribute("href"));
              if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                  navLink.classList.add("active");
              } else {
                  navLink.classList.remove("active");
              }
          });
      });
  });
  */
  const textValues = [
    {
      element: document.getElementById('section1h1'),
      englishHTML: '<i>Mejorar</i> tus características.<br><i>Restaurar</i> tu confianza.',
      spanishHTML: '<i>Enhance</i> your features.<br><i>Restore</i> your confidence.'
    },
    {
      element: document.getElementById('nava1'),
      englishHTML: 'Hoger',
      spanishHTML: 'Home'
    },
    {
      element: document.getElementById('nava2'),
      englishHTML: 'Más',
      spanishHTML: 'More'
    },
    {
      element: document.getElementById('nava3'),
      englishHTML: 'Sobre',
      spanishHTML: 'About'
    },
    {
      element: document.getElementById('nava4'),
      englishHTML: 'Contacto',
      spanishHTML: 'Contact'
    },
    {
      element: document.getElementById('section1p'),
      englishHTML: 'Especialista en belleza personalizada, certificada en inyectores faciales, <br> con sede en España...',
      spanishHTML: 'Personallized in beauty specialty, certified in facial injectors, <br> based in spain...'
    },
    {
      element: document.getElementById('section1button'),
      englishHTML: 'Leer Más',
      spanishHTML: 'Read More'
    },
    {
      element: document.getElementById('section2h1'),
      englishHTML: 'Descubrir Más',
      spanishHTML: 'Discover more'
    },
    // Add other elements as needed
  ];
console.log(textValues);


const elEng = document.getElementById('englishBtn')
const elSpn = document.getElementById('spanishBtn')

elEng.addEventListener('click',()=>{
  changeLanguage('spanish')
})
elSpn.addEventListener('click',()=>{
  changeLanguage('english')
})
function changeLanguage(language) {

    textValues.forEach(item => {
      if (item.element && language === 'spanish') {
        item.element.innerHTML = item.spanishHTML;
        console.log(elEng.classList.contains('active'));

      } else if (item.element && language === 'english') {
        item.element.innerHTML = item.englishHTML;

      }
    });    
    if (language === 'spanish') {
      elSpn.classList.remove('active')
      elEng.classList.add('active')
    } else  {
      elSpn.classList.add('active')
      elEng.classList.remove('active')
    }



    document.getElementById('siteWrapper').style.display= 'none';
    setTimeout(() => {
      document.getElementById('siteWrapper').style.display= 'block';
      
    }, 50);
  // Store the selected language in localStorage for persistence
  localStorage.setItem('language', language);

}

// Check localStorage for previously selected language and set it accordingly
window.onload = function() {
  var storedLanguage = localStorage.getItem('language');
  if (storedLanguage) {
      changeLanguage(storedLanguage);
  } else {
      // Default to Spanish
      changeLanguage('spanish');
  }
};
