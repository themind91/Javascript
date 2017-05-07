let funcionario = new Funcionario('themind1991@gmail.com');

let funcProxy = new Proxy(funcionario,{

	get(target,prop,receive){

		 console.log(`a propriedade "${prop}" foi interceptada`);
          Reflect.apply(target[prop], target, arguments);
	}
})