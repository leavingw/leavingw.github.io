(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.mymodule = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
console.log("det här är main.js..2")

//function test(){
module.exports.test = function(){
    console.log("nu ändras det igen")
    const search_results = document.querySelectorAll("button#bertil");
    console.log("search_results", search_results);
   let button = search_results[0];
   button.innerHTML="Jag är bertil"
}
module.exports.addparagraph = function(){
    console.log("Document", document)
    let paragraph = document.createElement("p")
    paragraph.innerHTML = "Jag är en paragraf"
    document.body.appendChild(paragraph)
}
module.exports.upload = function(){
    console.log("Document", document)
    let upload = document.createElement("img")
    upload.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
    document.body.appendChild(upload)
}    
},{}]},{},[1])(1)
});
