"use strict";

document.addEventListener("DOMContentLoaded", getData);

let person;
let queue;
let date;

setInterval(function(){
    getData();
    location.reload();

}, 10000);


// fetch json every 10th second
async function getData(){
    let template = document.querySelector("#person");
    let section = document.querySelector("#people");
    
    let personObj = await fetch("https://kea-alt-del.dk/kata-distortion/");
    person = await personObj.json();

    let clone = template.cloneNode(true).content;

    clone.querySelector("#inQ").textContent = "Queue number: " + person.inQueue;
    clone.querySelector("#loggedAt").textContent = person.loggedAt;
    clone.querySelector("#beer");

    date = person.loggedAt;
    console.log(date);
    getDate(date);

    // how many are in queue now - show in middle of circle
    queue = person.inQueue;
    getNumber(queue);


    if (person.inQueue < 10 ) {
        document.querySelector(".logo").style.fill = "lightgreen";
    }

    else if (person.inQueue > 10 && 20) {
        document.querySelector(".logo").style.fill = "yellow";
    }

    else if (person.inQueue > 20 && 25) {
        document.querySelector(".logo").style.fill = "darkred";
    }

    section.appendChild(clone);
};


function getNumber(queue){
    document.querySelector("#number").textContent = queue;    
    // console.log(queue);
}


function getDate(date){
    document.querySelector("#date").textContent = date;    
    // console.log(date);
}







