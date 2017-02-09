/*

author: Herminder Singh
version: 1.0
date: 09th Feb 2017
main.js

*/


/**
 * Simple function for generating view
 * @param JSON
 * @return null
 */
var createView=function(a){var b,c;for(b=0;b<a.buttons.length;b++)c=new CustomButton("b"+(b+1),a.buttons[b]),c.generate();var e,f,d=document.getElementById("selProgress");for(b=0;b<a.bars.length;b++){f=new CustomProgressBar("pbar"+(b+1),a.bars[b],a.limit),f.generate();var e=document.createElement("option");e.value=e.text="ProgressBar"+(b+1),arrProgBar.push(f),d.add(e)}objCurrentProgBar=arrProgBar[0]};upDateProgressBar=function(a){objCurrentProgBar.updateProgress(a)};var onSelChange=function(){var a=document.getElementById("selProgress");trace("progSelect.selectedIndex::"+a.selectedIndex),objCurrentProgBar=arrProgBar[a.selectedIndex]},objCurrentProgBar,arrProgBar=[];window.onload=function(){getJSONData()};