sintax
JavaScript


//-------Caso Nicolas-------//
debugger
nicolas = prompt("Digite a opção do Nicolas");
if(nicolas == 'academia'){
	alert('forte');
}
else{
	alert('inteligente');
}

//-------Caso Matheus-------//
debugger
matheus = prompt('Digite a opção do Matheus')
if(matheus == 'barbara'){
	alert('beijos');
}
else if(matheus == 'bar'){
	alert('bebado');
}
else{
	if(matheus == 'trabalho'){
		alert('ganhar dinheiro');
	}
	else{
		alert('ficar inteligente');
	}
}
//--------Caso Jean---------//
debugger
jean = prompt("Digite a opção do Jean")
switch(jean) {
	case 'cabelereiro':
		alert("gastei com o cabelo");
		break;
	case 'jogos':
		alert("gastei com jogos");
		break;
	case 'academia':
		alert("ficar forte");
		break;
	case 'trabalho':
		alert("ganhar dinheiro");
		break;
	case 'bar':
		alert("ficar bebado");
		break;
	default:
		alert("ficar rico");
}