function swap(path){
  window.location.href = 'https://htmlpreview.github.io/?https://github.com/theentirescriptofshreck/sloppiest-website/blob/main/' .. path .. '.html';
}
function youtube(){
  var yt = 'https://www.youtube.com/channel/UC0ekB5ZutJ5o0KYPzjAk0cA';
  window.location.href = yt;
}
function fartText(){
  var a = document.createElement("h1");
  a.innerHTML = "hey";  
  a.x = -100;
  a.y = 100;
  document.body.appendChild(a);
  while (true){
        wait(0.01);
        a.x = a.x + 1;
        if (a.x == 100){
        a.x = -100;
        }
  }
}
