var Fornecedor = function(){
    this.CNPJ = "";

    this.super = Pessoa.prototype;

    this.entregarProdutos = function(){
        alert("O Fornecedor está entregando os Produtos")
    }
    this.GravarEmMemoria = function (){
        Fornecedor.Base.push(this);
        this.super.GravarEmMemoria();
    }
}

Fornecedor.prototype = new Pessoa();

Fornecedor.Base = [];
