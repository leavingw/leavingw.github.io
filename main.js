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