function check_prime(number){
  let factor=0;
  for(let i=1;i<=number;i++){
    if(number%i!=0){
      factor++;
    }
  }
  if(factor==2){
    return true;
  }else{
    return false;
  }
}

 // for(let i=1;i<=10;i++){
   // let output=check_prime();

    if(check_prime){
      console.log("is a prime");
    }
    else{
      console.log("is not a prime");
    }
  

check_prime(13);