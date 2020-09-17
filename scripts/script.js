// JavaScript Document
var winkelwagen = document.querySelector("header section:nth-of-type(2) ul li:nth-of-type(2)");
var element = document.querySelector("header p");

winkelwagen.addEventListener("mouseover", function(){
  element.classList.add("anders");
})

winkelwagen.addEventListener("mouseout", function(){
  element.classList.remove("anders");
})

var zoeken = document.querySelector("header section:nth-of-type(2) ul li:first-of-type");
var zoekbalk = document.querySelector("form input");

zoeken.addEventListener("click", function(){
  zoekbalk.classList.toggle("zichtbaar");
})
