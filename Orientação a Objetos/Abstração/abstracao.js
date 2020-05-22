var Abstracao = function(){
    if (this.constructor === Abstracao) {
        throw new Error("Não pode instanciar classe abstrata")
    }
}
Abstracao.prototype.nome = "";
Abstracao.prototype.telefone = "";
Abstracao.prototype.cpf = "";
Abstracao.prototype.GravarEmMemoria = function(){
    throw new Error ("Obrigatória a implementação do método GravarEmMemoria, para as classes filhas");
}
