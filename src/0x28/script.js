/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-02-15 12:03:14
\*----------------------------------------*/
document.addEventListener("DOMContentLoaded", setup);

function dragMoveHandler (event){
	
	var target = event.target;
	// keep the dragged position in the data-x/data-y attributes
	
	target.style.background = "red";

	var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
	var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
	// translate the element
	target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
	// update the posiion attributes
	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);
	console.log("dragMoveHandler");
	top.postMessage('SUCCESS', '*');
	
}


function setup(){
	var trigger = interact('.trigger');
	trigger.draggable({onmove: dragMoveHandler});
    var swipe = new Hammer(document);
	swipe.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
	// detect swipe and call to a function
	swipe.on('swiperight swipeleft swipeup swipedown', function(e) {
			alert(e.type);

		if(e.type == 'swiperight'){swipeHandler()}
		if(e.type == 'swipeleft'){swipeHandler()}
		if(e.type == 'swipeup'){swipeHandler()}
		if(e.type == 'swipedown'){swipeHandler()}
	});
}



function swipeHandler(){
	top.postMessage('SUCCESS', '*');
	console.log("swipeHandler...");
	console.log("hello");
    
}







