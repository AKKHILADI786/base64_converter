
let indecode=document.getElementById('indecode');
let outdecode=document.getElementById('outdecode');
let decode=document.getElementById('decode');

decode.onclick=function(){
    name=indecode.value;
    name=atob(name);
    outdecode.value=name;
    console.log('jai')
}

// console.log('jai shree ram');



console.log('jai shree ram');




