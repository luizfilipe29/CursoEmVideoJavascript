function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')

    var data = new Date()
    var hora =  data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#F0E68C'
    }else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.jpg'
        document.body.style.background = '#D2691E'
        
    }else {
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#483D8B'
    }


}