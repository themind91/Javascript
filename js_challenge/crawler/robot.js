const Telegraf = require('telegraf');
const TOKEN="473273944:AAFrJNZIrFyrpkrhmjM7m4OSeRvNOdYtLFY";
const app = new Telegraf(TOKEN);


app.hears('hi', ctx =>{
    return ctx.reply('Hello bb');

});

app.startPolling();
