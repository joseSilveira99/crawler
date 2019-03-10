var request = require('request');
var cheerio = require('cheerio');
const fs = require('fs');
var faker = require('faker');


console.log(faker.name.firstName());
console.log(faker.name.lastName());
console.log(faker.phone.phoneNumber());

/*request('https://www.uol.com.br/', function(err, res, body){
    if(err) console.log('erro: '+ err);

    var $ = cheerio.load(body);

    $('.submanchete').each(function(){
        //var title = $(this).find('a').text().trim();
        var context = $(this).find('h2').text().trim();
		var context2 = $(this).find('span').text().trim();

        console.log(context+ ' - '+ context2);
		
    });
});*/


/*
var request = require('request');
var cheerio = require('cheerio');
const fs = require('fs');

request('https://www.imdb.com/chart/moviemeter', function(err, res, body){
    if(err) console.log('erro: '+ err);

    var $ = cheerio.load(body);

    $('.lister-list tr').each(function(){
        var title = $(this).find('.titleColumn a').text().trim();
        var rating = $(this).find('.imdbRating strong').text().trim();

        //console.log('Titulo: '+ title +' Nota: '+ rating);
        fs.appendFile('imdb.txt', title + ' ' + rating + '\n', function(err){
            if(err) throw err;
            console.log('Saved!');
        });
    });
});
*/