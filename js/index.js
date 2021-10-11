const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)

function handlePlay(){
    $video.play()
    $play.hidden = true
    $pause.hidden = false
}

function handlePause(){
    $video.pause()
    $pause.hidden = true
    $play.hidden = false

}

$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)

function handleBackward(){
    $video.currentTime -= 10
    //console.log('atras')
}

function handleForward(){
    $video.currentTime +=10
    //console.log('adelante')
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', hadleLoaded)
$video.addEventListener('timeupdate',handleTimeUpdate)

function hadleLoaded() {
    $progress.max = $video.duration
    //console.log('duración', $video.duration)
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime
    
    //console.log('progress vidio', $video.currentTime)
    
    /*Agregamos : */
    if($video.currentTime == $video.duration){
        console.log('vidio finalizado: Reiniciamos value:0 y pause:hidden')
        $progress.value = 0
        handlePause()
    }

}

$progress.addEventListener('input',handleInput)
function handleInput(){
    $video.currentTime = $progress.value
    //console.log($progress.value)
}