class ListaNegociacoes {
    
    constructor() {
        
        this._negociacoes = [];
    }
    
    adiciona(negociacao) {
        
        // utilizando a linda API de reflexao do JS
        //this._negociacoes.push(negociacao);
        //Reflect.apply(this._armadilha, this._contexto,[this]);

        // gambiarra rs
        this._negociacoes = [].concat(this._negociacoes, negociacao);


    }
    
    get negociacoes() {
        
        return [].concat(this._negociacoes);
    }

    esvazia(){

    	this._negociacoes = [];
    	//Reflect.apply(this._armadilha, this._contexto,[this]);
    }
}