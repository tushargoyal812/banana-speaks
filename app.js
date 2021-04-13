var translate=document.querySelector("#btn-translate");
var textarea=document.querySelector("#btn-textarea");

function clickHandler()
 { 
     console.log("clicked");
     console.log("input",textarea.value);
}


translate.addEventListener("click",clickHandler)
