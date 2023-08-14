const parisImage = document.querySelector("img");

parisImage.onclick = () => {
    const mySrc = parisImage.getAttribute("src");
    if(mySrc === "./assets/parisatnight.jpeg") {
        parisImage.setAttribute("src", "./assets/parisatnight2.jpeg");
    } else {
        parisImage.setAttribute("src", "./assets/parisatnight.jpeg");
    }
};