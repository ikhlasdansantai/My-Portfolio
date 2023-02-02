const giselleVideoContainer = document.getElementsByClassName("greeting-video")[0];
const giselleVideo = document.getElementsByClassName("giselle-video")[0];
const playVideoBtn = document.getElementsByClassName("my-cv")[0];

playVideoBtn.addEventListener("click", () => {
  giselleVideoContainer.classList.add("show");
  giselleVideo.play();

  giselleVideo.addEventListener("ended", () => {
    setTimeout(() => {
      giselleVideoContainer.classList.remove("show");
    }, 100);
  });
});

const friesMenu = document.getElementsByClassName("fries-menu")[0];
const navMobile = document.getElementsByClassName("nav-mobile-menus")[0];

friesMenu.addEventListener("click", () => {
  navMobile.classList.toggle("nav-show");
  if (navMobile.classList.contains("nav-show")) {
    friesMenu.classList.add("fixed-fries-menu");
  } else {
    friesMenu.classList.remove("fixed-fries-menu");
  }
});

// *LIGTMODE DARKMODE

const switcherButton = document.getElementsByClassName("darkmode-lightmode-checkbox");
const switcherContainers = document.getElementsByClassName("switcher")[0];
const displayTransition = document.getElementsByClassName("lightmode-darkmode-transition")[0];

for (let i = 0; i < switcherButton.length; i++) {
  const switcher = switcherButton[i];

  switcher.addEventListener("click", () => {
    const lightModeTransition = document.getElementsByClassName("lightmode-transition")[0];
    const DarkModeTransition = document.getElementsByClassName("darkmode-transition")[0];

    if (displayTransition.classList.contains("lightmode")) {
      toLightMode();
    } else if (displayTransition.classList.contains("darkmode")) {
      toDarkmode();
    }
  });
}

function toLightMode() {
  displayTransition.classList.add("darkmode-transition-active");
  displayTransition.classList.add("lightmode-transition-active");
  displayTransition.classList.add("darkmode");
  displayTransition.classList.remove("lightmode");
  switcherContainers.classList.add("darkmode-active");
  document.body.classList.add("dark-theme");
}

function toDarkmode() {
  displayTransition.classList.add("lightmode");
  displayTransition.classList.remove("darkmode");
  displayTransition.classList.remove("darkmode-transition-active");
  displayTransition.classList.add("lightmode-transition-active");
  document.body.classList.remove("dark-theme");
}

// *Typed JS
const typed = new Typed("#typed", {
  strings: ["Front End Developer", "UI Designer", "Instagram Content Creator"],
  typeSpeed: 125,
  backSpeed: 100,
  loop: true,
});

// *Accordion
const headers = document.querySelectorAll(".accordion-header");
headers.forEach((header) => {
  header.addEventListener("click", () => {
    const panel = header.nextElementSibling;
    console.log(header.children[1]);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      header.children[1].style.transform = "rotate(0deg)";
      header.children[1].style.transition = "100ms";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      header.children[1].style.transform = "rotate(45deg)";
      header.children[1].style.transition = "100ms";
    }
  });
});

// *Random Quotes
const quoteText = document.getElementsByClassName("quotes")[0];
const quoteAuthor = document.getElementsByClassName("quotes-author")[0];
const quotesButton = document.getElementsByClassName("quote-btn")[0];

quotesButton.addEventListener("click", (e) => {
  e.preventDefault();

  let randomQuotes = Math.floor(Math.random() * quotes.length);

  quoteText.innerHTML = quotes[randomQuotes].quotes;
  quoteAuthor.innerHTML = quotes[randomQuotes].author;
});

const quotes = [
  {
    quotes: "I want to see what happens if i don't give up.",
    author: "-ikhlasdansantai",
  },
  {
    quotes: "Do something today that your future self will thank you for.",
    author: "-ikhlasdansantai",
  },
  {
    quotes: "Study now be proud later.",
    author: "-sangDewa",
  },
  {
    quotes: "Don't spend another year doing the same shit.",
    author: "-sangDewa",
  },
  {
    quotes: "Don't spend another year doing the same shit.",
    author: "-sangDewa",
  },
  {
    quotes: "Winner never quit and quitter never win.",
    author: "-sangDewa",
  },
  {
    quotes: "Walau berjalan di jalur berbeda, langit yang luas menghubungkan kita.",
    author: "-JKT48",
  },
  { quotes: "Banyak belajar biar bisa bantu banyak orang", author: "Indonesia Belajar" },
];

//  *SOON
const quotesGenerator = (quotes, author = "@NewUser") => {
  this.quotes = quotes;
  this.author = author;
};

// *Form Section
const contactForm = document.getElementsByClassName("contact-form")[0];
const formLabels = document.querySelectorAll(".formBox label");
const formInputs = document.querySelectorAll(".formBox input");

for (let i = 0; i < formInputs.length; i++) {
  const formInput = formInputs[i];

  for (let j = 0; j < formLabels.length; j++) {
    const formLabel = formLabels[i];

    formInput.addEventListener("focus", () => {
      formLabel.classList.add("moveTop");
    });

    formInput.addEventListener("blur", () => {
      if (formInput.value.length >= 1) {
        formLabel.classList.add("moveTop");
      } else if (formInput.value.length === 0) {
        formLabel.classList.remove("moveTop");
      } else {
        formLabel.classList.add("moveTop");
      }
    });
  }
}

const contactBtn = document.getElementsByClassName("contact-button")[0];

contactBtn.addEventListener("click", (e) => {
  directTo();
  setTimeout(() => {
    return;
  }, 4000);
});

function directTo() {
  let timerInterval;
  Swal.fire({
    title: "Form Berhasil Dikirim!",
    html: "I will close in <b></b> milliseconds.",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      return;
    }
  });
}

let toTopIcon = document.getElementsByClassName("to-top")[0];
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    toTopIcon.style.display = "block";
  } else {
    toTopIcon.style.display = "none";
  }
});
toTopIcon.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
