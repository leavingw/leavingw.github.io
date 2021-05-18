var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyxmoAVvAtKPaouk'}).base('appoeXg94zl1eIItK');

base('Foton').select({
    // Selecting the first 3 records in database:
    maxRecords: 3,
    view: "database"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

// If you only want the first page of records, you can
// use `firstPage` instead of `eachPage`.
base('Foton').select({
    view: 'database'
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
    });
});