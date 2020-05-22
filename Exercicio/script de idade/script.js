function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = "Homem"
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'homemcrianca.png')
            } else if ( idade < 21){
                // Jovem
                img.setAttribute('src', 'homemadolescente.png')
            } else if ( idade < 50){
                // Adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'homemidoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = "Mulher"
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'mulhercrianca.png')
            } else if ( idade < 21){
                // Jovem
                img.setAttribute('src', 'mulheradolescente.png')
            } else if ( idade < 50){
                // Adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<br>Detectamos ${gênero} com ${idade} anos</br>`
        res.appendChild(img)
    }
}