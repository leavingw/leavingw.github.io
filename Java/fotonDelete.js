var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyxmoAVvAtKPaouk'}).base('appoeXg94zl1eIItK');

base('Foton').destroy(['reccqvRHoE2KALLKZ', 'rectjlFjClEO9JIKs'], function(err, deletedRecords) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Deleted', deletedRecords.length, 'records');
});