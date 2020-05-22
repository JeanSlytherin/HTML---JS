se = if
senão = else
senão se = else if
Case = switch

Sintax
Algoritomo


//-------Caso Nicolas-------//
mostre("Digite a opção do Nicolas")
nicolas = leia()
se(nicolas = 'academia')
	mostre('forte');
senão
	mostre('inteligente');
Fim

//-------Caso Matheus-------//
mostre('Digite a opção do Matheus')
matheus = leia()
se(matheus = 'barbara')
	mostre('beijos');
senao se(matheus = 'bar')
	mostre('bebado');
senao
	se (matheus = 'trabalho')
		alert('ganhar dinheiro');
	senao
		alert('ficar inteligente');
Fim

//--------Caso Jean---------//
mostre("Digite a opção do Jean")
jean = leia()
caso(jean)
	igual 'cabelereiro'
		mostre("gastei com o cabelo");
	igual 'jogos'
		mostre("gastei com jogos");
	igual 'academia'
		mostre("ficar forte");
	igual 'trabalho'
		mostre("ganhar dinheiro");
	igual 'bar'
		mostre("ficar bebado");
	qualquercoisa:
		mostre("ficar rico");
Fim