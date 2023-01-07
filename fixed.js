let N=["goku","gohan","vegita"]

function Reverse(s){
  let a='';
  for(let i=s.length-1;i>=0;i--){
    a=a+s[i];
  }return a
  //console.log(a);
}
for(let j=0;j<n.length;j++){
  Pal(N[j]);
}
//let t=Reverse(N);
//console.log(t);

function Pal(B){
      
  if(B==Reverse(B)){
    console.log("Yes",B)
  }
  else{
    console.log("No");
  }
}
