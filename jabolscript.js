function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

let name = getCookie("username");

if (!name) {
    name = window.prompt("What is your name?");
    if (name !== null && name.trim() !== "") {
        setCookie("username", name, 7); // Store the name for 7 days
    } else {
       windows.location.reload();
    }
}

if (name) {
    document.getElementById("imongngalan").textContent = `Hello, ${name}!`;
}

let isClicked = false;

document.getElementById("image").onclick = function() {
    let hotdogs = document.getElementById("hotdogs");

    if (!isClicked) {
        this.classList.add("clicked"); 

        setTimeout(() => {
            this.style.display = "none";  
            hotdogs.style.display = "block"; 
        }, 2000); 

        isClicked = true;
    }
};