
$(document).ready(function () {
    $(this).scrollTop(0);
});


AOS.init();


$(document).ready(function () {
    setTimeout(function () {
        $('.initial-anim').removeClass("overflow-hidden-height");
    }, 15000);
});


// <!-- for navbar -->
// <!-- <script>
console.clear();

const html = document.documentElement;
const toggle = document.getElementById("toggle");
const body = document.getElementById("body");

const closebtn = document.getElementById("closebtn");

const circle = document.getElementById("bg-circle");
const circleWidth = circle.clientWidth;

// Math calcul to get Height, Width, Diagonal and Circle Radius

const getVpdr = () => {
    const vph = Math.pow(html.offsetHeight, 2); // Height
    const vpw = Math.pow(html.offsetWidth, 2); // Width
    const vpd = Math.sqrt(vph + vpw); // Diagonal
    return (vpd * 2) / circleWidth; // Circle radius
};

const openNavbar = () => {
    const openTimeline = new TimelineMax();
    openTimeline.to(".anavbar", {
        display: "flex"
    });
    openTimeline.to("#bg-circle", {
        scale: getVpdr(),
        ease: Expo.easeInOut
    });
    openTimeline.staggerFromTo(".anavbar ul li", 0.1, {
        y: 25,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    }, 0.1, 1);
    openTimeline.staggerFromTo(".anavbar a", 0.1, {
        y: 25,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    }, 0.1, 1);
};

const closeNavbar = () => {
    const closeTimeline = new TimelineMax();
    closeTimeline.staggerFromTo(".anavbar ul li", 0.2, {
        y: 0,
        opacity: 1,
        delay: 0.2
    }, {
        y: 25,
        opacity: 0
    }, -0.1);
    closeTimeline.to("#bg-circle", 0.1, {
        scale: 0,
        ease: Expo.easeInOut,
        delay: -0.2
    });
    closeTimeline.to(".anavbar", 0, {
        display: "none"
    });
};

let isOpen = false;

toggle.onclick = function () {
    this.classList.add("active");
    body.classList.add("overflow-hide");
    openNavbar();
};
closebtn.onclick = function () {
    toggle.classList.remove("active");
    closeNavbar();
    body.classList.remove("overflow-hide");
};
// // On windows resize, recalcule circle radius and update

window.onresize = () => {
    if (isOpen) {
        gsap.to("#bg-circle", 0.1, {
            scale: getVpdr(),
            ease: Expo.easeInOut
        });
    }
};
// </script> -->






$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".navbar").addClass("navbar-fixed");
    } else {
        $(".navbar").removeClass("navbar-fixed");
    }
});

var typed = new Typed('.small-typing p', {
    strings: ["...afflicted with connecting the unconnected dots to decode beyond obvious solutions"],
    typeSpeed: 45,
    startDelay: 6000,
    showCursor: false


});

var typed2 = new Typed('.smallpara', {
    strings: ["Hello from the obsessively afflicted...."],
    typeSpeed: 30,
    showCursor: false


});