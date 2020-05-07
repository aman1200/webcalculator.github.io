//Variable Declaration
var x=document.querySelectorAll('.btn-keys');
var y=document.querySelector('.compute');
var num=[1,2,3,4,5,6,7,8,9,0];
var L=[];
var p=0,z=0,k=0;
var str="";

//Giving Events to each button and storing there corresponding value in a array
for (var i=0;i<x.length;i++){
  x[i].addEventListener('click',function(){
    if (this.textContent!=='del'){
        y.textContent+=this.textContent;
        if (num.includes(Number(this.textContent))){
          p=p*10+Number(this.textContent);
        }else{
            L.push(p);
            L.push(this.textContent);
            p=0;
        }
    }else if (this.textContent==='del') {
        y.textContent=y.textContent.substr(0,y.textContent.length-1);
        L.pop();
    }

    if (this.textContent==="="){
      calc(L.length);
    }
    if (this.textContent==="C"){
      y.innerHTML="&nbsp;";
      L=[];
      z=0;
      k=0;
    }
  });
}
// Computing the results
function calc(i){
  for (j=k;j<i;j++){
    if(L[j]!=="="){
        str=str+L[j];
    }
  }
  k=j+1;
  if (z===0){
      z=eval(str);
  }else{
    z=eval(String(z)+str);
  }
  str="";
  y.textContent=z;
  return;
}
