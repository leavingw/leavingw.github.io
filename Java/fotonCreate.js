var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyxmoAVvAtKPaouk'}).base('appoeXg94zl1eIItK');

base('Foton').create([
  {
    "fields": {
      "Name": "Raket",
      "Notes": "Foto på raket, taget av..",
      "Attachments": [
        {
          "url": "https://dl.airtable.com/.attachments/ffaa16514bd7601f9fe5c366041adae0/3b335004/icon.JPG"
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
    "fields": {
      "Name": "Profil",
      "Notes": "Grafik på en profil, skapat av Bengt..",
      "Attachments": [
        {
          "url": "https://dl.airtable.com/.attachments/4cbbe9a9181a389a161629bbee57cbf4/0aaf495b/icon2.JPG"
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
  records.forEach(function (record) {
    console.log(record.getId());
  });
});