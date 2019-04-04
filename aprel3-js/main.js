"use strict";
const tagInput = document.querySelector('input.tag');
const tagmenu = document.querySelector('.tag-menu');
tagInput.onkeyup = function(e)
{
    const tag = tagInput.value.trim();
    if(e.keyCode === 9||e.keyCode === 13) 
    {
        if(tag === "") {return}; 
        const taglistchek = [...tagmenu.children].find(li => li.innerText === tag);//array.from
        if(taglistchek !== undefined) //axtarilan tapilmadisa
        { return;}
        const tagItem = document.createElement('li'); 
        tagItem.className = "list-group-item  d-flex justify-content-between"; 
        tagItem.innerText = tag; //men yazan 
        const icon = document.createElement('i');
        icon.className = "fas fa-times mt-1 ml-3";
        icon.onclick = function(){ this.parentElement.remove(); }
        tagInput.value = "";
        tagItem.appendChild(icon);
        tagmenu.appendChild(tagItem); 
    }
    if (e.keyCode === 8) {
        if (tagInput.value=="") { 
            const returnedtag = tagmenu.childNodes[tagmenu.children.length]
             tagmenu.lastChild.remove(); 
             tagInput.value= returnedtag.innerText;
        }
        else{return}
       
        
    }
}

