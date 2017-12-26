const Telegraf = require('telegraf');
const TOKEN="473273944:AAFrJNZIrFyrpkrhmjM7m4OSeRvNOdYtLFY";
const app = new Telegraf(TOKEN);
const axios = require('axios');
var subreddits=[];


let state = {};

app.command('NadaParaFazer', ctx =>{

    const userId = ctx.message.from.id;
    const subreddit = ctx.message.text;
    if(!state[userId]) state[userId] = {id:userId};
    subreddits[0] = ctx.message.text;
    state[userId].command='NadaParaFazer';
    return ctx.replyWithMarkdown(`Enter a subreddit name to get *top* posts.`);

});

axios
.get(`https://reddit.com/r/${subreddit}/top.json?limit=10`)
.then(res => {
    // data recieved from Reddit
    const data = res.data.data;
    console.log(subreddits[0]);
    // if subbreddit does not exist
    if (data.children.length < 1)
      return ctx.reply("The subreddit couldn't be found.");

    // send the first top post link to the user
    console.log(data.children[0].data.ups);
    const link = `https://reddit.com/${data.children[0].data.permalink}`;
    return ctx.reply(link);

});
app.startPolling();