
var arr = [
    { songName: "Jale 2", url: "./songs/Jale 2.mp3", img: "./images/jale.jpg" ,time:"3:35"},
    { songName: "Pehle Bhi main", url: "./songs/Pehle Bhi Main.mp3", img: "./images/animal.jpg" ,time:"3:35" },
    { songName: "Ram siya ram", url: "./songs/Ram Siya Ram.mp3", img: "./images/ram.jpg" ,time:"3:35" },
    { songName: "Arjan Valley", url: "./songs/Arjan Vailly Ne.mp3", img: "./images/animal.jpg" ,time:"3:35" }
]

var allSongs = document.querySelector("#all-songs");
var poster = document.querySelector("#left");

var play= document.querySelector("#play")
var backward= document.querySelector("#backward")
var forward= document.querySelector("#forward")

var audio = new Audio()

var selectedSong = 0

function mainFunction(){
    
var clutter="";

arr.forEach(function(data,index){
   clutter+=`<div class="song-card" id=${index}>
   <div class="part1">
       <img src="${data.img}" alt="">
   <h2>${data.songName}</h2>
   </div>
   <h6>${data.time}</h6>
</div>`
})

allSongs.innerHTML=clutter

audio.src=arr[selectedSong].url

poster.style.backgroundImage = `url(${arr[selectedSong].img})`

}

mainFunction();

allSongs.addEventListener("click",(event)=>{
        selectedSong = event.target.id
        mainFunction();
        play.innerHTML = `<i class="ri-pause-fill"></i>`
        flag=1
        audio.play()
})

var flag=0
play.addEventListener("click",()=>{
    if(flag==0){
        play.innerHTML = `<i class="ri-pause-fill"></i>`
        mainFunction();
        audio.play();
        flag=1
    }else{
        play.innerHTML = `<i class="ri-play-fill"></i>`
        mainFunction();
        audio.pause();
        flag=0
    }
    
})

forward.addEventListener("click",()=>{
    backward.style.opacity=1
    if(selectedSong < arr.length-1){
        selectedSong++
        mainFunction()
        audio.play()
    }else{
        forward.style.opacity=0.4
    }
})

backward.addEventListener("click",()=>{
    forward.style.opacity=1
    if(selectedSong > 0){
        selectedSong--
        mainFunction()
        audio.play()
    }else{
        backward.style.opacity=0.4
    }
})