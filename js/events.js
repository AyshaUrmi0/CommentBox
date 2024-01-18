

document.getElementById("btn").addEventListener("click",function(){
    const comment=document.getElementById("myComment");
    const commentValue=comment.value ;
    const addText= document.getElementById("comment_container");
    const p= document.createElement("p");
    p.innerText=commentValue;
    addText.appendChild(p);
    comment.value="";

})