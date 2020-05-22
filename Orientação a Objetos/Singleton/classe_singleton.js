var Singleton = {
    instancia: null,

    iniciar: function(){
        function Sgln(){
            this.nome = "";
            this.MostrarNaTela = function(){
                alert("Método de instância Singleton.")
            }
        }
        
        if(Singleton.instancia == null){
            Singleton.instancia = new Sgln();
        }
    }
}