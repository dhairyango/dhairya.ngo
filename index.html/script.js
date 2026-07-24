/*==================================================
DHAIRYA NGO WEBSITE
SCRIPT.JS
PART 1
==================================================*/


/*=========================
AOS
=========================*/

AOS.init({
    duration: 1000,
    once: true
});


/*=========================
MOBILE MENU
=========================*/

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");

    });

}


/*=========================
SMOOTH SCROLL
=========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*=========================
BACK TO TOP
=========================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        backToTop.style.display="flex";

    }

    else{

        backToTop.style.display="none";

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================
LOADER
=========================*/

window.addEventListener("load",()=>{

    const loader=document.querySelector(".loader-wrapper");

    setTimeout(()=>{

        loader.style.opacity="0";

        loader.style.visibility="hidden";

    },1200);

});

/*==================================================
SCRIPT.JS
PART 2
COUNTERS • TESTIMONIALS • GSAP
==================================================*/


/*=========================
ANIMATED COUNTERS
=========================*/

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target = +counter.dataset.target;
    const speed = 100;
    const increment = target / speed;

    let count = 0;

    const update = () => {

        count += increment;

        if (count < target) {

            counter.innerText = Math.ceil(count);

            requestAnimationFrame(update);

        } else {

            counter.innerText = target + "+";

        }

    };

    update();

};

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter(entry.target);
            counterObserver.unobserve(entry.target);

        }

    });

}, { threshold: 0.5 });

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/*=========================
TESTIMONIAL AUTO SLIDER
=========================*/

const slider = document.querySelector(".testimonial-slider");

if (slider) {

    let scrollAmount = 0;

    setInterval(() => {

        const maxScroll = slider.scrollWidth - slider.clientWidth;

        scrollAmount += 380;

        if (scrollAmount > maxScroll) {

            scrollAmount = 0;

        }

        slider.scrollTo({

            left: scrollAmount,

            behavior: "smooth"

        });

    }, 3500);

}


/*=========================
GSAP HERO ANIMATION
=========================*/

if (typeof gsap !== "undefined") {

    gsap.from(".hero-text h4", {

        y: -40,
        opacity: 0,
        duration: 1

    });

    gsap.from(".hero-text h1", {

        y: 60,
        opacity: 0,
        duration: 1,
        delay: .2

    });

    gsap.from(".hero-text p", {

        y: 60,
        opacity: 0,
        duration: 1,
        delay: .4

    });

    gsap.from(".hero-buttons", {

        y: 50,
        opacity: 0,
        duration: 1,
        delay: .6

    });

    gsap.from(".hero-image", {

        x: 120,
        opacity: 0,
        duration: 1.2,
        delay: .5

    });

}


/*=========================
FLOATING ICONS
=========================*/

document.querySelectorAll(".floating").forEach((icon, index) => {

    if (typeof gsap !== "undefined") {

        gsap.to(icon, {

            y: 15,
            duration: 2 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"

        });

    }

});


/*=========================
BUTTON RIPPLE EFFECT
=========================*/

document.querySelectorAll(".btn-primary").forEach(button => {

    button.addEventListener("click", function(e) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        ripple.style.left = e.offsetX + "px";
        ripple.style.top = e.offsetY + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/*==================================================
SCRIPT.JS
PART 3
ACTIVE NAV • NEWSLETTER • SCROLL EFFECTS
==================================================*/


/*=========================
ACTIVE NAVIGATION
=========================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================
NEWSLETTER FORM
=========================*/

const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const email = this.querySelector("input").value.trim();

        if (!email) {

            alert("Please enter your email address.");

            return;

        }

        alert("🎉 Thank you for joining the Dhairya community!");

        this.reset();

    });

}


/*=========================
SCROLL REVEAL
=========================*/

const revealElements = document.querySelectorAll(
".drive-card,.community-card,.feature-card,.mission-card,.impact-card,.testimonial-card,.partner-card"
);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:0.2});

revealElements.forEach(el=>{

    revealObserver.observe(el);

});


/*=========================
HEADER SHADOW
=========================*/

window.addEventListener("scroll",()=>{

    const navbar=document.querySelector(".navbar");

    if(window.scrollY>50){

        navbar.style.boxShadow="0 8px 30px rgba(0,0,0,.12)";

    }else{

        navbar.style.boxShadow="0 2px 20px rgba(0,0,0,.05)";

    }

});


/*=========================
CURRENT YEAR
=========================*/

const year=document.getElementById("year");

if(year){

    year.textContent=new Date().getFullYear();

}


console.log("🌱 Dhairya NGO Website Loaded Successfully!");


/*=========================
AUTO SCROLL DRIVES
=========================*/

const driveContainer = document.querySelector(".drives-grid");

if (driveContainer) {

let autoScroll = setInterval(() => {

driveContainer.scrollLeft += 1.2;

if (

driveContainer.scrollLeft >=

driveContainer.scrollWidth -

driveContainer.clientWidth

) {

driveContainer.scrollLeft = 0;

}

},20);

driveContainer.addEventListener("mouseenter",()=>{

clearInterval(autoScroll);

});

driveContainer.addEventListener("mouseleave",()=>{

autoScroll=setInterval(()=>{

driveContainer.scrollLeft+=1.2;

if(

driveContainer.scrollLeft>=

driveContainer.scrollWidth-

driveContainer.clientWidth

){

driveContainer.scrollLeft=0;

}

},20);

});

}

function openPopup(event) {
  event.preventDefault(); // Stops the link from reloading/jumping
  
  const modal = document.getElementById('imageModal');
  // Use setProperty to absolutely force the browser to make it visible
  modal.style.setProperty('display', 'flex', 'important');
}

function closePopup() {
  const modal = document.getElementById('imageModal');
  modal.style.setProperty('display', 'none', 'important');
}

function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  
  // This toggles a class named 'active' on and off every time you click
  navLinks.classList.toggle('active');
}