// JavaScript Document
var winkelwagen = document.querySelector("header div:nth-of-type(2) ul li:nth-of-type(2)");
var element = document.querySelector("header p");
var zoeken = document.querySelector("header div:nth-of-type(2) ul li:first-of-type");
var zoekbalk = document.querySelector("form input");
var imgElement = document.querySelector(".afbeeldingveranderen");

winkelwagen.addEventListener("mouseover", function(){
  element.classList.add("anders");
})

winkelwagen.addEventListener("mouseout", function(){
  element.classList.remove("anders");
})


zoeken.addEventListener("click", function(){
  zoekbalk.classList.toggle("zichtbaar");
})


imgElement.addEventListener("mouseover", function(){
    imgElement.src = "images/13.0218.03blakeskuster5.jpg";
})

imgElement.addEventListener("mouseout", function(){
    imgElement.src = "images/13.0216.03blakeskuster_1.jpg";
})

