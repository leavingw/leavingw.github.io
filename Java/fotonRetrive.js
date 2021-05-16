var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyxmoAVvAtKPaouk'}).base('appoeXg94zl1eIItK');

base('Foton').find('reccqvRHoE2KALLKZ', function(err, record) {
    if (err) { console.error(err); return; }
    console.log('Retrieved', record.id);
});