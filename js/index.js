// First one
const headerH1 = document.querySelector('.logo-heading');

headerH1.addEventListener("mouseleave", () => {
    headerH1.style.fontSize = "5rem";
    headerH1.style.color = "green";
}); // changing h1 font size to 5 rem, color to green when mouse leaving this object

// Second

const aboutUS = document.querySelector("a:nth-child(2)");

aboutUS.addEventListener("mouseenter", () => {
    aboutUS.textContent = "About me";
}); // In nav About us changing to About me when you put you cursor up there

// Third

const adventureP = document.querySelectorAll(".text-content p");

adventureP.forEach(title => {
    title.addEventListener("click", () => {
        title.style.color = "white";
        title.style.backgroundColor = "black";
    })
}); // changing font color to white and background color to black on double click;

// 4

const introPic = document.querySelector(".intro img");

document.addEventListener("keydown", (e) => {
    if (e.key === "a") {
        introPic.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5CEimyBe424TzTY7ItLmz-ovZT7KxwLQzew&usqp=CAU";
    }
}); // changing intro image when pressing "a" key ;

// 5
const adventureImg = document.querySelector(".img-content img")

window.addEventListener('scroll', () => {
    adventureImg.src = "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg";
});

// 6

const middleH2 = document.querySelector(".text-content h2");

window.addEventListener("wheel", () => {
    middleH2.style.border = "5px solid purple";
}); // adding border when wheeing

// 7

window.addEventListener("online", (event) => {
    if (event === true) {
        console.log("The browser has gained access to the network");
    } else {
        console.log("The browser has lost access to the network.");
    }
});

// 8 with stopPropagation

const body = document.querySelector(".main-navigation");

body.addEventListener("click", () => {
    body.style.backgroundColor = "yellow";
});

const blog = document.querySelector("a:nth-child(3)");

blog.addEventListener("click", (event) => {
    blog.style.fontSize = "6rem";
    event.stopPropagation();
});

// 9

window.addEventListener("keypress", (event) => {
    if (event.key !== "a") {
        alert("please press a");
    }
});


// 10
window.addEventListener("load", (event) => {
    if (event === true) {
        event.preventDefault();
    } else {
        console.log("something went wrong");
    }
});

// stopping nav items from prevent default

const stopNav = document.querySelectorAll(".nav-link");

stopNav.forEach(title => {
    title.href = "https://www.google.com/";
    title.addEventListener("click", (event) => {
        event.preventDefault();
    });
});

document.querySelector('.nav a').addEventListener('click', event => {
    event.preventDefault();
});