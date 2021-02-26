// button hover effect

click = () => {
    const rotateElelmaent = document.querySelector(".fas");
    if (rotateElelmaent.classList.contains("rotate")) {
        rotateElelmaent.classList.remove("rotate");
    } else {
        rotateElelmaent.classList.add("rotate");
    }
}
document.getElementById("onclick").addEventListener("click", click);




// typing effect

const typeTextSpan = document.querySelector(".typingText");
const cursorSpan = document.querySelector(".cursor");
const textarray = ["Food", "Traveling", "Eating", "Coding"];
const typingDelay = 200;
const newTextDelay = 2000;
const erasingDelay = 100;

let charIndex = 0;
let textArrayIndex = 0;

type = () => {

    if (charIndex < textarray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("Animation")) {
            cursorSpan.classList.add("Animation");
        }
        typeTextSpan.textContent += textarray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);

    } else {
        cursorSpan.classList.remove("Animation");
        setTimeout(erase, typingDelay + 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("Animation")) {
            cursorSpan.classList.add("Animation");
        }
        typeTextSpan.textContent = textarray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);


    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textarray.length) {
            textArrayIndex = 0;
        }
        setTimeout(type, typingDelay + 500);

    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTextDelay + 250);
});

//  animated skill bars

const skillsSelection = document.getElementById("skill_selection");
const progressBars = document.querySelector('.progerss_bar');

function showProgress() {
    var elems = document.getElementsByClassName("progerss_bar");

    Array.from(elems).forEach(v => {
        //   this.parentElement.getElementsByClassName('content')[0].classList.toggle('hidden');
        const value = v.dataset.progress;
        v.style.width = `${value}%`;
    });
}

function hideProgress() {
    var elems = document.getElementsByClassName("progerss_bar");

    Array.from(elems).forEach(v => {
        v.style.width = 0;
    });
}




window.addEventListener("scroll", () => {
    const sectionPos = skillsSelection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;


    if (sectionPos < screenPos) {
        showProgress();
    } else {
        hideProgress();
    }
})