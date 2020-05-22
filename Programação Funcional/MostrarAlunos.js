function MostrarAlunos(alunos){
    for(i=0;i<alunos.length;i++){
    aluno = alunos[i]
    mostrarNaTela("O Aluno " + aluno.nome + " Teve as Notas:");
    SomaDasNotas = 0;
    for(x=0;x<aluno.notas.length;x++){
        nota = aluno.notas[x];
        SomaDasNotas = SomaDasNotas + nota
        mostrarNaTela("Nota " + (x+1) + ": " + nota);

    }
    media = SomaDasNotas/aluno.notas.length;
    mostrarNaTela("A Média dele foi: " + media);
    mostrarNaTela("=============================");

    }
}