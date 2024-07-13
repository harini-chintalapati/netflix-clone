document.getElementById("right").onclick=()=>
{
    document.getElementById("scroll").scrollLeft+=250;
}
document.getElementById("left").onclick=()=>
{
    document.getElementById("scroll").scrollLeft-=250;
}
document.getElementById("input").onmouseover=()=>
{
    document.getElementById("input").style.background="lightgray";
}
document.getElementById("input").onmouseout=()=>
{
    document.getElementById("input").style.background="transparent";
    document.getElementById("input").style.color="gray";

   

}
document.getElementById("input1").onmouseover=()=>
{
    document.getElementById("input1").style.background="lightgray";
   
}
document.getElementById("input1").onmouseout=()=>
{
    document.getElementById("input1").style.background="transparent";
    document.getElementById("input1").style.color="gray";
    
}
a=document.querySelectorAll("#third")
b=document.querySelectorAll("#forth")
for(let i=0;i<a.length;i++)
{
a[i].onmouseover=()=>
{
    b[i].style.display="block";
}
a[i].onmouseout=()=>
{
   b[i].style.display="none";
}
}