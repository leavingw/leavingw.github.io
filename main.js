var Airtable = require('airtable');
Airtable.configure({ apiKey: 'keyBAW8gQGoBIlqC8' });
var airtableBase =  new Airtable().base('appoeXg94zl1eIItK');

module.exports.search = function(event){
    console.log("search function called");
    console.log("search function got variable event:", event);
    console.log("search query received:", event.target[0].value);
    event.preventDefault();
    let searchQuery = event.target[0].value;
    // Hämta lista med bilder från DB som matchar sökningen
    getImagesFromDatabase(searchQuery, showImages); // showImages is called when all images that match the searchQuery have been retrieved
    console.log("Search-Done")
}

module.exports.sendMail = function(event){
    console.log("sendMail function called");
    console.log("sendMail function got variable event:", event);
}

function getImagesFromDatabase(searchQuery, onSuccess) {
    let searchFormula = createSearchFormula(searchQuery);
   
    let imageUrls = [];
    let imageDetails = [];
    // Based on https://airtable.com/appoeXg94zl1eIItK/api/docs#javascript/table:foton:list
    airtableBase('Foton').select({
        // Selecting the first 3 records in database:
        maxRecords: 100,
        pageSize: 3,
        view: "database",
        filterByFormula: searchFormula
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
   
        records.forEach(function(record) {
            console.log('Retrieved Record:', record);
            console.log('Retrieved Record- Name:', record.get('Name'));
            console.log('Retrieved Record -Attachments:', record.get('Attachments'));

            let attachments = record.get('Attachments');

            if(attachments.length > 0) {
                imageUrls.push(attachments[0].url)
                imageDetails.push({
                    id: record.get('PKbildID'),
                    url: attachments[0].url,              
                    licenseType: record.get('LicenseType'),
                    
                })
            }


        });
   
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
   
    }, function done(err) {
        if (err) { console.error(err); return; }
        console.log("getImagesFromDatabase - imageUrls", imageUrls);
        console.log("getImagesFromDatabase - imagedetails", imageDetails);
        if(imageUrls.length == 0){
            alert("No search result, please try different terms")
        }
        onSuccess(imageDetails)
    });
}

function createSearchFormula(searchQuery) {
    // var myFilter = `AND(LOWER("${searchQuery.split(" ").join('"), LOWER("')}"))`;
    var searchTerms = searchQuery.split(" ");
    var searchFormula = `SEARCH(LOWER("${searchQuery}"), LOWER({keywords}))`;
    console.log("searchTerms", searchTerms);
    console.log("searchTerms.length", searchTerms.length);

    if(searchTerms.length > 1) {
        console.log("if statement");
        var myFilter = 'OR(SEARCH(LOWER("';

        myFilter += searchTerms.join(`"), LOWER({keywords})), SEARCH(LOWER("`)
        myFilter += `"), LOWER({keywords}))`;
        myFilter += `)`;
        searchFormula = myFilter;
    }
    console.log("searchFormula", searchFormula);
   
    return searchFormula;
}

function showImages(imagesDetails) {
    console.log("showImages function called")
    console.log("showImages function received", imagesDetails)
    let imageSearchResults = document.getElementById("image-search-results")
    let imageList = document.createElement("ul")
    imageSearchResults.innerHTML = ''
    imageSearchResults.appendChild(imageList)
//Let imageUrl of imageUrls) imageUrls = ["string1", "string2", ]
//Let imageDetails of imagesDetails) imagesDetails = [{id:"bildid", url:"string1"}, {id:"bildid", url:"string2"}, ]
    for (let imageDetails of imagesDetails) {
        console.log("imageUrl:", imageDetails.url)
        addImageToUlList(imageDetails, imageList)
    }
}

function addImageToUlList(imageDetails, imageList) {
    console.log("Showing image on screen")
    let li = document.createElement("li")

    let image = document.createElement("img")
    image.src = imageDetails.url
    li.appendChild(image)

    let idParagraph = document.createElement("p")
    idParagraph.innerText = "Picture id: " + imageDetails.id
    idParagraph.classList.add("picture-id")
    li.appendChild(idParagraph)

    let licenseTypeParagraph = document.createElement("p")
    licenseTypeParagraph.innerText = imageDetails.licenseType
    // licenseTypeParagraph.innerText = "License type: " + imageDetails.licenseType
    licenseTypeParagraph.classList.add("license-type")
    licenseTypeParagraph.classList.add(imageDetails.licenseType)
    li.appendChild(licenseTypeParagraph)

    imageList.appendChild(li)
}


