const bodyELEMENT = document.querySelector("body");

bodyELEMENT.addEventListener("mousemove",(event)=>{
    const X = event.offsetX;
    const Y = event.offsetY;
    const spanELEMENT = document.createElement("span");
    spanELEMENT.style.left = X + "px";  
    spanELEMENT.style.top = Y + "px"; 
    bodyELEMENT.appendChild(spanELEMENT);
    const size = Math.random()*100;
    spanELEMENT.style.width = size + "px";
    spanELEMENT.style.height = size + "px";
    setTimeout(()=>{
        spanELEMENT.remove();
    },3000)
})