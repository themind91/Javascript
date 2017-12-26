console.log(' start to scrapping things ');

var page = require("webpage").create();
var url = 'https://www.reddit.com/r/cats/';
page.settings.userAgent = 'SpecialAgent';

page.open(url,function(status){
    
    if(!status)return console.log(' erro ao carregar a página ');

    var ua = page.evaluate(function(){

        try{
            return document;
        }catch(err){
            return err;
        }
        
    });
    
    console.log(" teste " + ua);
    getScores(ua);
    phantom.exit();

    

})


function getScores(elements){
    var objects = document.getElementsByClassName('sitetable linklisting')[0].childNodes;
    len = elements.length;

    for(var i =0; i< len; i++){
        score = elements.getElementsByClassName('score unvoted')[i];
        console.log(score);
        break;
    }
}