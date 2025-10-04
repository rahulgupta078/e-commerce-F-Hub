

let timerID;
var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";

    timerID = setTimeout(() => {
        showSlides()
        timerID = null;
    }
        , 3000); // Change image every 3 seconds
}


function dropDown1() {
    let content = document.querySelector(".dropdown-content1");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dropdown-menu1");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dropdown-menu1");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dropdown-menu1");
        menu.style.display = "none";
    });
}
dropDown1();

function dropDown2() {
    let content = document.querySelector(".dropdown-content2");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dropdown-menu2");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dropdown-menu2");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dropdown-menu2");
        menu.style.display = "none";
    });
}
dropDown2();

function dropDown3() {
    let content = document.querySelector(".dropdown-content3");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dropdown-menu3");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dropdown-menu3");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dropdown-menu3");
        menu.style.display = "none";
    });
}
dropDown3();

function dropDown4() {
    let content = document.querySelector(".dropdown-content4");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dropdown-menu4");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dropdown-menu4");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dropdown-menu4");
        menu.style.display = "none";
    });
}
dropDown4();

function dropDown5() {
    let content = document.querySelector(".dropdown-content5");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dropdown-menu5");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dropdown-menu5");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dropdown-menu5");
        menu.style.display = "none";
    });
}
dropDown5();



function showMore() {
    var dots = document.getElementById("tca");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Show more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Show less";
      moreText.style.display = "inline";
    }
  }

  function successfulPayment() {
    const form = document.getElementById("myForm");

    const cardNumber = form.formClass.value;
    const name = form.formClass1.value;
    const valid = form.valid.value;
    const cvv = form.cvv.value;


    let cardDetails = {
      cardNumber,
      name,
      valid,
      cvv
        
    };
    for(k in  cardDetails) {
        if(cardDetails[k].length == 0) {
            alert("Please filled all feild")
            return;
        }
    }
    setTimeout(function(){ 
      window.location.href = "successfulPayment.html"; 
    }, 3000);
    
    
  }