let num=0
let nump=0
document.addEventListener("click",function(event){

    if(event.target.className== "feuille-btn") {
      
    document.querySelector(".plyr-img").src = "1.jpg";
    nump=1;
    console.log(nump)
    return nump
}
   else if (event.target.className=="pierre-btn") {
   
    document.querySelector(".plyr-img").src = "2.jpg";
    nump=2;
    console.log(nump)
    return nump
}
   else if (event.target.className=="ciseaux-btn")  {

    document.querySelector(".plyr-img").src = "0.jpg";
    nump=0;
    console.log(nump)
    return nump
   }
    else if (event.target.className=="play") {
         num = parseInt(Math.random() * 3);
        document.querySelector(".cmptr-img").src = `${num}.jpg`;
        console.log(num);
       

     
         console.log(nump,num)
           if ((nump==1 && num==2) || (nump==2 && num==0) || (nump==0 && num==1)) {
   

    var scrp = document.querySelector(".score-player");
    var winner = document.querySelector(".winner");

     scrp.innerHTML++
     var player=document.querySelector(".plyr-name").value;
     winner.innerHTML=" "+player 

    
    }
          else if ((nump==1 && num==0) || (nump==2 && num==1) || (nump==0 && num==2)) {
    
    debugger;
    var srcc = document.querySelector(".score-computer")
    var winner = document.querySelector(".winner");
     srcc.innerHTML=parseInt(srcc.innerHTML) + 1
     winner.innerHTML="computer"

    } 
}
}
)
