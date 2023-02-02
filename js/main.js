function start(){
    let id = null;
    let pos = 0;
    let pos2=0;
    let a = 0;
    
    const ball = document.getElementById("ball");
    const ball2 = document.getElementById("ball2");
  //  clearInterval(id);
    id= setInterval(animate,5);    
    function animate(){
        if(a >= 310) {
         if(pos == 0){
             a = pos;
         };
         pos--
         ball.style.left = pos + "px";
         ball.style.backgroundColor="orange"
         ball2.style.top = pos + "px";
         ball2.style.backgroundColor="indianred"
        }else{
         pos++;
         a++;
         ball.style.left = pos + "px";
         ball.style.backgroundColor="red";
         ball2.style.top = pos + "px";
         ball2.style.backgroundColor="green"

        }
    }
   
}

