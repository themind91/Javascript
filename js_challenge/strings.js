var fs = require('fs')
fs.readFile('input.txt','utf8',function(err,data){

    if(err) return " houve um erro ao ler o arquivo " + err;
    var contentTreated = treatFileData(data,40);
    writeOutput(contentTreated);
});

function treatFileData(filedata,lineCharLength){
    let lines = [];
    let oldcontent="";
    let newcontent="";
    lines= filedata.split(" ");
    
    lineslen = lines.length;

    for(i=0;  i< lineslen; i++){
        if(oldcontent.length + lines[i].length > lineCharLength){
            newcontent+="\r\n"+lines[i];
            oldcontent="";
        }else{
            newcontent+=" "+lines[i];
        }

        oldcontent+=" "+lines[i];
        
    }

    return newcontent;

}

function writeOutput(value){

    fs.writeFile('output.txt',value,function(err){
        if(err) return console.log(err)
        console.log(" arquivo gravado com sucesso ")
    })
}