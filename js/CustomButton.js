/*

class: CustomButton
author: Herminder Singh
version: 1.0
date: 09th Feb 2017

*/

var CustomButton=function(a,b){this.id=a,this.incrementVal=b};CustomButton.prototype.generate=function(){var a=document.getElementById("buttonHolder"),b=document.createElement("input");b.setAttribute("id",this.id),b.setAttribute("value",this.incrementVal),b.type="button",b.value=this.incrementVal,b.className="button",b.addEventListener("click",function(a){window.upDateProgressBar(a.target.value)}),a.appendChild(b)};