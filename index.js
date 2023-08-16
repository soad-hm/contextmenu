const contextMenu=document.getElementById('contextMenu')
function contexthandler(event){
    event.preventDefault();
   
    if(contextMenu.style.display==='none'){
        contextMenu.style.left= event.pageX+'px';
        contextMenu.style.top=event.pageY+'px';
        contextMenu.style.display = 'block'
    }
    else{
        contextMenu.style.left= event.pageX+'px';
        contextMenu.style.top=event.pageY+'px';
        
    }
    console.log(event);
}

function clickhandler(){
   contextMenu.style.display='none';
}
function keydownl(event)
{
    if(event.keyCode===27){
    contextMenu.style.display='none';   
    }
}
    

document.body.addEventListener('contextmenu',contexthandler)
document.body.addEventListener('click',clickhandler)
document.body.addEventListener('keydown',keydownl)