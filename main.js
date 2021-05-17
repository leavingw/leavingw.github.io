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
    upload.src = 'https://www.kungahuset.se/images/200.44d65b65143d2fef3c9628/1390819079165/H.M._Konung_Carl_XVI_Gustaf_Kungl.Hovstaterna_Alexis_DaflosW.jpg';
    document.body.appendChild(upload)
}
module.exports.search = function(event){
    console.log("search function called");
    console.log("search function got variable event:", event);
    console.log("search query received:", event.target[0].value);
    event.preventDefault();
    let searchquery = event.target[0].value;
    // Hämta lista med bilder från DB som matchar sökningen
    let imageUrls = getImagesFromDatabase(searchquery) // Ersätt med hämta från databas
    showImages(imageUrls) //Visa bilderna på sidan
}

function getImagesFromDatabase(searchquery) {
    console.log("getImagesFromDatabase function called")
    let images = ['https://www.kungahuset.se/images/200.44d65b65143d2fef3c9628/1390819079165/H.M._Konung_Carl_XVI_Gustaf_Kungl.Hovstaterna_Alexis_DaflosW.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png','https://www.kungahuset.se/images/200.44d65b65143d2fef3c9628/1390819079165/H.M._Konung_Carl_XVI_Gustaf_Kungl.Hovstaterna_Alexis_DaflosW.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png','https://www.kungahuset.se/images/200.44d65b65143d2fef3c9628/1390819079165/H.M._Konung_Carl_XVI_Gustaf_Kungl.Hovstaterna_Alexis_DaflosW.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png','https://www.kungahuset.se/images/200.44d65b65143d2fef3c9628/1390819079165/H.M._Konung_Carl_XVI_Gustaf_Kungl.Hovstaterna_Alexis_DaflosW.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png'] // Ersätt med hämta från databas
    console.log("Images found", images)
    return images
}

function showImages(imageUrls) {
    console.log("showImages function called")
    let imageSearchResults = document.getElementById("image-search-results")
    let imageList = document.createElement("ul")
    imageSearchResults.innerHTML = ''
    imageSearchResults.appendChild(imageList)

    for (let imageUrl of imageUrls) {
        console.log("imageUrl:", imageUrl)
        addImageToUlList(imageUrl, imageList)
    }
}

function addImageToUlList(imageUrl, imageList) {
    console.log("Showing image on screen")
    let upload = document.createElement("img")
    upload.src = imageUrl
    let li = document.createElement("li")
    li.appendChild(upload)
    imageList.appendChild(li)
}

function showImageOnScreen(imageUrl) {
    console.log("Showing image on screen")
    let upload = document.createElement("img")
    upload.src = imageUrl ;
    document.body.appendChild(upload)
}
