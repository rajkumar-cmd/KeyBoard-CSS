let key=document.querySelectorAll("#keyboard>div");
let bag="",str,i=0,Caps=0;
key.forEach(function(event){
    event.addEventListener("click",button);
})
function button(event){
    str=event.target.innerText;
    if(str=="Tab")
    {
        bag=bag+"       ";
        document.querySelector("#display").innerText=bag;
    }
    else if(str=="Backspace")
    {
        bag=bag.slice(0,-1);
        document.querySelector("#display").innerText=bag;
    }
    else if(str=="Caps")
    {
        if(Caps==0)
        {
            Caps=1;
        }
        else
        {
            Caps=0;
        }
    }
    else
    {
        if(Caps==0)
        {
            str=str.toLowerCase();
        }
        bag=bag+str;
        document.querySelector("#display").innerText=bag;
    }
}