function CapturarAlunos(){
    alunos = []
    for(i=0;i<1;i++){
    nome = prompt("Digite o Nome do Aluno");
    notas = [];
        for(x=1;x<=2;x++){
            nota = prompt("Digite a nota de número " + x + " do aluno " + nome);
            nota = parseInt(nota);
            notas.push(nota);
        }

        aluno = {}
        aluno.nome = nome
        aluno.notas = notas
        alunos.push(aluno);
    }
    
    return alunos;
}