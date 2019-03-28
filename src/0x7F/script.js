/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-05 19:48:22
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function tapHandler (event){
	top.postMessage('SUCCESS', '*');
	console.log("tapHandler");
	event.target.style.backgroundColor="yellow";
}

function setup(){
	interact('.trigger')
	.on("hold", tapHandler)
    window.ononline = weAreOnline;
    final();
    chronoTimeout = setTimeout(timeoutHandler, 3000);
}

function final(){
top.postMessage('SUCCESS', '*');
    
	
}

function weAreOnline (event){
	document.body.classList.add("red");
    chronoTimeout = setTimeout(timeoutHandler, 3000);
	document.querySelector(".txt").classList.add("hide");
}

function timeoutHandler(){
    var p = document.querySelector("p");
    p.classList.add("hide");
    
        var h1 = document.querySelector("h1");
    p.classList.remove("hide");
    
    
    
}