var Cliente = function(){
    this.CodigoDoCliente = "";
    this.GravarEmMemoria =  function(){
        Cliente.Base.push(this);
    }

    this.super = Pessoa.prototype;
    this.Original = function(){
        console.log("Sobrescrevi a Função Original");
        this.super.Original();
    }
}

Cliente.prototype = new Pessoa();
Cliente.Base = [];