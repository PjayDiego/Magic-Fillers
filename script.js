const textValues = [
  {
    element: document.getElementById("nava1"),
    englishHTML: "Inicio",
    spanishHTML: "Home",
  },
  {
    element: document.getElementById("nava2"),
    englishHTML: "Más",
    spanishHTML: "More",
  },
  {
    element: document.getElementById("nava3"),
    englishHTML: "Sobre",
    spanishHTML: "Service",
  },
  {
    element: document.getElementById("nava4"),
    englishHTML: "Contacto",
    spanishHTML: "Contact",
  },
  {
    element: document.getElementById("section1p"),
    englishHTML:
      "Especialista en belleza personalizada,<br> certificada en inyectores faciales,<br> con sede en España...",
    spanishHTML:
      "Personallized in beauty specialty,<br> certified in facial injectors, based in spain...",
  },
  {
    element: document.getElementById("section1button"),
    englishHTML: "Leer Más",
    spanishHTML: "Read More",
  },
  {
    element: document.getElementById("section2h1"),
    englishHTML: "Descubrir Más",
    spanishHTML: "Discover More",
  },
  {
    element: document.getElementById("hohop1"),
    englishHTML:
      "-Realza tu belleza natural y consigue un aspecto joven y radiante con los tratamientos estéticos faciales elaborados por expertos. Ubicados en España y especializados en el arte de la estética facial, ofrecemos una gama de tratamientos de relleno cuidadosamente seleccionados y adaptados a tus necesidades únicas.",
    spanishHTML:
      "-Enhance your natural beauty and achieve a youthful, radiant with the experty crafted facial aesthetics treatments. Located in Spain and specialized in the art of facial aesthetics, offering a range of carefully curated filler treatments tailored to your unique needs.",
  },
  {
    element: document.getElementById("hohop2"),
    englishHTML:
      "-Restaura el volumen, suaviza las líneas y revitaliza tu piel con resultados de apariencia natural. Utilizamos técnicas avanzadas y rellenos de primera calidad para esculpir y contornear tus rasgos. Ya sea que busques rejuvenecer tu cutis, definir tus pómulos o realzar tus labios, nuestros expertos en belleza están aquí para ayudarte a lograr el aspecto deseado con precisión y cuidado.",
    spanishHTML:
      "-Restore volume, smoothe those lines, and revitalize your skin with natural-looking results.  Utilizing advanced techniques and premiun quality filler to sculpt and contour your features. Whether You're looking to rejuvenate your complexion, define your cheekbones, or enhance your lips, our beauty experts are here to aid you achieve your desired look with precision and care.",
  },
  {
    element: document.getElementById("section1b1"),
    englishHTML: "Leer Más",
    spanishHTML: "Read More",
  },
  {
    element: document.getElementById("section2b2"),
    englishHTML: "Nuestro Servicio",
    spanishHTML: "Our Service",
  },
  {
    element: document.getElementById("section2side1"),
    englishHTML: "<i>Mejorar</i>",
    spanishHTML: "<i>Enhance</i>",
  },
  {
    element: document.getElementById("section2side2"),
    englishHTML: "<i>restaurar</i>",
    spanishHTML: "<i>Restore</i>",
  },
  {
    element: document.getElementById("idk1"),
    englishHTML: "Resultados<br> Duraderos",
    spanishHTML: "Lasting Results",
  },
  {
    element: document.getElementById("section4h2"),
    englishHTML: "nuestro Servicio",
    spanishHTML: "Our Service",
  },
  {
    element: document.getElementById("idk3"),
    englishHTML: "Consulta<br> Gratis",
    spanishHTML: "Free Consultation",
  },
  {
    element: document.getElementById("idk2"),
    englishHTML: "Calidad<br> Premium",
    spanishHTML: "Premium Quality",
  },
  {
    element: document.getElementById("span1"),
    englishHTML: "Aumento del mentón",
    spanishHTML: "Chin Enhancment",
  },
  {
    element: document.getElementById("span2"),
    englishHTML: "Remodelación de nariz",
    spanishHTML: "Nose Remodelation",
  },
  {
    element: document.getElementById("span3"),
    englishHTML: "Esculpir la línea de la mandíbula",
    spanishHTML: "Jawline Sculpting",
  },
  {
    element: document.getElementById("span4"),
    englishHTML: "Desgarro a través",
    spanishHTML: "Tear-Through",
  },
  {
    element: document.getElementById("span5"),
    englishHTML: "Alineación facial",
    spanishHTML: "Facial Aligntment",
  },
  {
    element: document.getElementById("span6"),
    englishHTML: "Aumento de labios",
    spanishHTML: "Lips Augmentation",
  },
  {
    element: document.getElementById("p1"),
    englishHTML:
      "El mentón suele subestimarse. Puede hacernos parecer más exitosos, seguros, masculinos o femeninos. Resalta nuestros mejores rasgos y completa la armonía y simetría facial.",
    spanishHTML:
      "The chin is often underestimated. It can make us look more successful, confident, masculine or feminine. It extensaccintuacis our best features, and completes facial harmony and symmetry.",
  },
  {
    element: document.getElementById("p2"),
    englishHTML:
      "Corrija las imperfecciones nasales y eleve la punta de la nariz con nuestro tratamiento rápido para obtener resultados duraderos sin tiempo de recuperación.",
    spanishHTML:
      "Correct nasal imperfections and add nose tip-lift with our quick treatment for a long lasting results with no downtime.",
  },
  {
    element: document.getElementById("p3"),
    englishHTML:
      "Obtenga un rostro perfecto y listo para fotografiar con nuestras técnicas avanzadas para esculpir la mandíbula, levantar los pómulos y aumentar el mentón.",
    spanishHTML:
      "Get the picture-ready perfect face with our advanced techniques for jawline sculpting, cheekbone lifting, and chin augmentation.",
  },
  {
    element: document.getElementById("p4"),
    englishHTML:
      "Utilizamos la mejor combinación de ácido hialurónico + vitaminas + aminoácidos para rejuvenecer la piel debajo de los ojos, eliminar la mirada cansada y lograr un rostro fresco y de aspecto más joven.",
    spanishHTML:
      "We use the best combination of hyaluronic acid+vitamins+amino acids to rejuvenate the under eye skin, eliminate tired-looking eyes, for a fresh and younger looking face.",
  },
  {
    element: document.getElementById("p5"),
    englishHTML:
      "Alinee sus proporciones faciales y agregue más feminidad o masculinidad a su rostro disminuyendo o aumentando el ancho de la línea de la mandíbula en proporción a los pómulos.",
    spanishHTML:
      "Align your facial proportions and add more femininity or masculinity to your face by decreasing or increasing the width of the jawline proportionate to the cheekbones’.",
  },
  {
    element: document.getElementById("p6"),
    englishHTML:
      "Nuestros labios carnosos de aspecto natural respetan la simetría natural de los labios, lo que le dará el volumen deseado a los labios sin un aspecto falso exagerado.",
    spanishHTML:
      "Our natural looking full lips respect natural lip symmetry that will give you the desired plump to the lips without the exaggerated fake look.",
  },
  {
    element: document.getElementById("pp"),
    englishHTML:
      "La privacidad de los pacientes está garantizada según sus preferencias. Todos los derechos reservados.",
    spanishHTML:
      "Patients privacy are ensured to their preference. All rights reserved.",
  },
  {
    element: document.getElementById("us"),
    englishHTML: "Contacta con nosotras",
    spanishHTML: "Contact Us",
  },
  {
    element: document.getElementById("copyr"),
    englishHTML: "&copy; 2024 DK. Liquid Beauty. Reservados todos los derechos",
    spanishHTML: "&copy; 2024 DK. Liquid Beauty. All rights reserved",
  },
];

const elEng = document.querySelectorAll(".englishBtn");
const elSpn = document.querySelectorAll(".spanishBtn");

elEng.forEach((btn) =>
  btn.addEventListener("click", () => {
    changeLanguage("spanish");
  })
);
elSpn.forEach((btn) =>
  btn.addEventListener("click", () => {
    changeLanguage("english");
  })
);
function changeLanguage(language) {
  textValues.forEach((item) => {
    if (item.element && language === "spanish") {
      item.element.innerHTML = item.spanishHTML;
    } else if (item.element && language === "english") {
      item.element.innerHTML = item.englishHTML;
    }
  });
  if (language === "spanish") {
    elSpn.forEach((el) => el.classList.remove("active"));
    elEng.forEach((el) => el.classList.add("active"));
  } else {
    elSpn.forEach((el) => el.classList.add("active"));
    elEng.forEach((el) => el.classList.remove("active"));
  }

  document.getElementById("siteWrapper").style.display = "none";
  setTimeout(() => {
    document.getElementById("siteWrapper").style.display = "block";
  }, 50);
  // Store the selected language in localStorage for persistence
  localStorage.setItem("language", language);
}

// Check localStorage for previously selected language and set it accordingly
window.onload = function () {
  var storedLanguage = localStorage.getItem("language");
  if (storedLanguage) {
    changeLanguage(storedLanguage);
  } else {
    // Default to Spanish
    changeLanguage("spanish");
  }
};

// 5. Scroll on animation JS

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidethem");
hiddenElements.forEach((el) => observer.observe(el));

// 6. Header

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 10);
});

function smoothScroll(targetId) {
  var target = document.getElementById(targetId);
  target.scrollIntoView({ behavior: "smooth" });
}

/* MENUUUUUUUUUUUUUUUUUUUUUUUUUUUU */

const phoneMenu = document.querySelector(".burger");

phoneMenu.addEventListener("click", () => {
  if (document.body.classList.contains("menu-active")) {
    document.body.classList.remove("menu-active");
  } else {
    document.body.classList.add("menu-active");
  }
});

