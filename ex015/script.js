function verificar(){
    var data = new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number (fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
    } 
    if(fsex[0].checked){
        genero='Masculino'
        if(idade >= 0 && idade< 10){
            //criança
            img.setAttribute('src','menino.png')
        }else if(idade < 21){
            //garoto
            img.setAttribute('src','garoto.png')
        }else if(idade < 60){
            // adulto
            img.setAttribute('src','adulto.png')

        } else{
            // idoso
            img.setAttribute('src','idoso.png')
        }




    } else if(fsex[1].checked){
        genero='Femenino'

        if(idade >= 0 && idade< 10){
            //criança
            img.setAttribute('src','menina.png')
        }else if(idade < 21){
            //garota
            img.setAttribute('src','garota.png')
        }else if(idade < 60){
            // adulta
            img.setAttribute('src','adulta.png')
        } else{
            // idosa
            img.setAttribute('src','idosa.png')
        }
    }
    res.style.textAlign='center'
    res.innerHTML=`Achamos ${genero} com ${idade} anos.`
    res.appendChild(img)

    }
