var CLIENTID = "Eq8KSecb2Yz4Lq--EUjuGWH_8OifHCRwdwHr1ztKdLx5Qk_zCZG--AXPSQzMXhL-";
var CLIENTSECRET = "-3Ynmxt9BZab3Qs5sbr_GdzGxXoGqSqbSISFuEQwquYeVm-5-A3nFIcgUOvDSY731GT-hhJtvTK5jYDccT7juQ";
var accessToken= "?access_token=CXyFeSBw2lAdG41xkuU3LS6a_nwyxwwCz2dCkUohw-rw0C49x2HqP__6_4is5RPx";
var API = "https://api.genius.com/search";
var APISong = "https://api.genius.com/songs/";
var songID = "2471960";
var maxSong= 2471960; 

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 200 || xhr.status === 304) {
    }
  }
};
xhr.open("GET", APISong+songID+accessToken, false);

xhr.send(); 

demo=xhr.response;

var json = JSON.parse(demo);
var song = json['response']['Tên nhạc'];


function newRandomSong() {
  songID =getRandomInt(1,maxSong);
  randomSong();
}

function randomSong(){
  xhr.open("GET", APISong+songID+accessToken, false);
  xhr.send(); 
  demo=xhr.response;
  while (xhr.status===404){
      songID =getRandomInt(1,maxSong);
      xhr.open("GET", APISong+songID+accessToken, false);
      xhr.send(); 
      demo=xhr.response;
  }
  
  json = JSON.parse(demo);
  song = json['response']['song'];
  document.getElementById("Ảnh nhạc").innerHTML = "<img src=\""+song['song_art_image_url']+"\"alt=\"Some Awesome Album Art\" style=\"width:300px;height:200px;\">";
document.getElementById("Tên nhạc").innerHTML = "Tên nhạc: <a target=\"_blank\" href="+song['url']+" >"+song['title'].toUpperCase()+"</a>";
  
document.getElementById("Tác giả").innerHTML = "Tác giả: <a target=\"_blank\"  href="+song['primary_artist']['url']+">"+song['primary_artist']['name'].toUpperCase()+"</a>";
}

$(document).ready(function() {
  randomSong();
});


