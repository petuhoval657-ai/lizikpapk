var replcon = document.querySelector('.repeat')

function handleRepeat() {

    if (music.loop == true) {

        music.loop = false

        replcon.classList.toggle('active')

    }

    else {

        music.loop = true

        replcon.classList.toggle('active')

    }

}