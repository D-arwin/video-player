const $video = document.querySelector('#video')
const $pause = document.querySelector('#pause')
const $play = document.querySelector('#play')
const $forward = document.querySelector('#forward')
const $backward = document.querySelector('#backward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$forward.addEventListener('click', handleforward)
$backward.addEventListener('click', handlebackward)


function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('le diste click al boton de play')
}   

function handlePause(){
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('You clicked pause button')
}
function handlebackward(){
    $video.currentTime = $video.currentTime -10
    console.log('You clicked forward button', $video.currentTime)
}
function handleforward(){
    $video.currentTime = $video.currentTime +10
    console.log('You clicked forward button', $video.currentTime)
}
    
const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded() {
$progress.max = $video.duration
    console.log('video loaded', $video.duration)
}  

function handleTimeUpdate(){
    $progress.value = $video.currentTime
    // console.log ('current time', video.currentTime)
}
$progress.addEventListener ('input', handleInput) 
    
function handleInput(){
    $video.currentTime = $progress.value
    console.log($progress.value)
}