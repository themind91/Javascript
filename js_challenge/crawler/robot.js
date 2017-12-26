const Telegraf = require('telegraf');
const TOKEN="?";
const app = new Telegraf(TOKEN);
const axios = require('axios');


app.on('text', ctx => {

    const subreddit = ctx.message.text;

    if(subreddit.includes('/NadaPraFazer')){
        var len = subreddit.lentgh;
        var subreddits = subreddit.slice(13,len);
        getSubReddits(subreddits.split(";"),ctx);
        
    }else{
        ctx.reply('Digite o comando ex /NadaPraFazer cats;dogs;trips para obter resultados');
    }
  
  });
  
app.startPolling();

function getSubReddits(subreddits,ctx){
      for(var i =0; i< subreddits.length; i++){
        axios
        .get(`https://reddit.com/r/${subreddits[i].trim()}.json`)
        .then(res => {
          const data = res.data.data;
          if (data.children.length < 1)
            return ctx.reply("The subreddit couldn't be found.");
          else
          replyAllData(data,ctx);
        })
    
        .catch(err => console.log(err));
      }
     
}

function replyAllData(data,ctx){
    for(var j =0; j < data.children.length; j++){
        if(data.children[j].data.ups >= 5000){
           var link = `https://reddit.com/${data.children[j].data.permalink}`;
           ctx.reply(link);  
        }
    }

}