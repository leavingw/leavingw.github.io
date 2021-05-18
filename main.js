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

function getImagesFromDatabase(searchQuery, callback) {
    let searchFormula = createSearchFormula(searchQuery);
   
    let imageUrls = [];
    // Based on https://airtable.com/appoeXg94zl1eIItK/api/docs#javascript/table:foton:list
    airtableBase('Foton').select({
        // Selecting the first 3 records in database:
        maxRecords: 3,
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
                imageUrls.push(attachments[0].url);
            }

        });
   
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
   
    }, function done(err) {
        if (err) { console.error(err); return; }
        console.log("getImagesFromDatabase - imageUrls", imageUrls);
        callback(imageUrls)
    });
}

function createSearchFormula(searchQuery) {
    // var myFilter = `AND(LOWER("${searchQuery.split(" ").join('"), LOWER("')}"))`;
    var searchTerms = searchQuery.split(" ");
    var searchFormula = `SEARCH(LOWER("${searchQuery}"), {keywords})`;
    console.log("searchTerms", searchTerms);
    console.log("searchTerms.length", searchTerms.length);

    if(searchTerms.length > 1) {
        console.log("if statement");
        var myFilter = 'OR(SEARCH(LOWER("';

        myFilter += searchTerms.join(`"), {keywords}), SEARCH(LOWER("`)
        myFilter += `"), {keywords})`;
        myFilter += `)`;
        searchFormula = myFilter;
    }
    console.log("searchFormula", searchFormula);
   
    return searchFormula;
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
