class ListaNegociacoes {
    
    constructor(contexto,armadilha) {
        
        this._negociacoes = [];
        this._armadilha = armadilha;
        this._contexto = contexto;
    }
    
    adiciona(negociacao) {
        
        // utilizando a linda API de reflexao do JS
        this._negociacoes.push(negociacao);
        //this._armadilha(this);
        Reflect.apply(this._armadilha, this._contexto,[this]);
    }
    
    get negociacoes() {
        
        return [].concat(this._negociacoes);
    }

    esvazia(){

    	this._negociacoes = [];
    	//this._armadilha(this);
    	Reflect.apply(this._armadilha, this._contexto,[this]);
    }
}