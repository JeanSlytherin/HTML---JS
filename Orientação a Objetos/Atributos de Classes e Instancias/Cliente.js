var Cliente = function(){
    this.nome = "";
    this.telefone = "";
    this.cpf = "";

    this.Mostrar = function(){
        document.write("Nome: " + this.nome + "<br>");
        document.write("Telefone: " + this.telefone + "<br>");
        document.write("CPF: " + this.cpf + "<br>");
    }

    this.GravarEmMemoria = function(){
        Cliente.clientes.push(this);
    }
}

Cliente.clientes = [];

Cliente.todos = function(){
    html = "<h1>Estou Executando um metódo de Classe</h1>"

    for(i=0;i<Cliente.clientes.length;i++){
        cliente = Cliente.clientes[i];

        html += "Nome: " + cliente.nome + "<br>";
        html += "Telefone: " + cliente.telefone + "<br>";
        html += "CPF: " + cliente.cpf + "<br>";
        html += "<hr>";
    }

    document.getElementById("resultado").innerHTML = html;
}