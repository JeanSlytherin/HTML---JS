var Fornecedor = function(){
    this.CNPJ = "";

    this.entregarProdutos = function(){
        alert("O Fornecedor está entregando os Produtos")
    }
}

Fornecedor.prototype = new Pessoa();