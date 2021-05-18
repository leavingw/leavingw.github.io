var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyxmoAVvAtKPaouk'}).base('appoeXg94zl1eIItK');

base('Foton').update([
  {
    "id": "reccqvRHoE2KALLKZ",
    "fields": {
      "Name": "Raket",
      "Notes": "Foto på raket, taget av..",
      "Attachments": [
        {
          "id": "attW9Lr2geJM6Ofbp"
        }
      ],
      "Licenstyp vid sälj": "FreeToUse",
      "Category": [
        "Övrigt"
      ],
      "Keywords": "Raket; Rymden; Ikon"
    }
  },
  {
    "id": "rectjlFjClEO9JIKs",
    "fields": {
      "Name": "Profil",
      "Notes": "Grafik på en profil, skapat av Bengt..",
      "Attachments": [
        {
          "id": "attYxH2GYApMo6a0E"
        }
      ],
      "Licenstyp vid sälj": "LimitedUse",
      "Category": [
        "Politik"
      ],
      "Keywords": "Politik; Dator; Ikon; Profil",
      "Kunder": [
        "recoTOUsQOOO8VC6d"
      ]
    }
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function(record) {
    console.log(record.get('Name'));
  });
});