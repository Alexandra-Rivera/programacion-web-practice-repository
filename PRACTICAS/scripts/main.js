const parisImage = document.querySelector("img");

parisImage.onclick = () => {
    const mySrc = parisImage.getAttribute("src");
    if(mySrc === "./assets/parisatnight.jpeg") {
        parisImage.setAttribute("src", "./assets/parisatnight2.jpeg");
    } else {
        parisImage.setAttribute("src", "./assets/parisatnight.jpeg");
    }
};

/*This code takes references to the new button and the heading */
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


/*This function triggers the method promt() that allows us to enter data, then 
localStorage stores the data in the browser. With SetItem we create and store a data item
called name and it sets the value myName. Then we change the text of the heading with a string and the name entered
*/
function setUserName() {
    const myName = prompt("Please enter your name. ");
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome, ${myName} !`;
    }
}

/*If there's nothing in the storage, the browser will call the function setUserName
but if there's is data stored, then we ask for the item name and print the string along with it as the heading.
*/

if(!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome, ${storedName}`; 
}


/*
The button will trigger again the function setUserName every time it is pressed. 
In order to change the prior value. 
*/
myButton.onclick = () => {
    setUserName();
}