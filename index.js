let ecran=document.getElementsByClassName('ecran')
const button=document.querySelectorAll('button:not(#bbbb)')
for(let i=0;i<button.length;i++){
  button[i].addEventListener('click',function(){  
    ecran[0].value += button[i].innerText
    
})}
 const suprimer =document.getElementById('suprimer')
 suprimer.addEventListener('click',function(){
    ecran[0].value=''
 })

 const bbbb =document.getElementById('bbbb')
 bbbb.addEventListener('click',function(){
      ecran[0].value = ecran[0].value.replaceAll("×","*").replaceAll("÷","/")
      console.log( ecran[0].value);
     ecran[0].value= eval(ecran[0].value)
     
 })


