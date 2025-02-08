let isClicked = false;

document.getElementById("image").onclick = function() {
    let hotdogs = document.getElementById("hotdogs");

    if (!isClicked) {
        this.classList.add("clicked"); // Zoom out the image

        setTimeout(() => {
            this.style.display = "none";  // Hide the image
            hotdogs.style.display = "block"; // Show the hotdog
        }, 3000); // Matches animation duration (1s)
        
        isClicked = true;
    }
};

alert.toString = function() {
    return "I'm a hotdog!";
};
