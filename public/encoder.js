let inencode=document.getElementById('inencode');
let outencode=document.getElementById('outencode');
let encode=document.getElementById('encode');



// console.log('jai shree ram');
encode.onclick=function(){
    name=inencode.value;
    name=btoa(name);
    outencode.value=name;
    console.log('jai')
}



console.log('jai shree ram');




