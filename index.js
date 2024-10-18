function cl(x){
    return console.log(x)
}
function gay(x){
    return document.getElementById(x)
}


function toggleDsiplayBI(){
    gay("bin").style.display="none"
    gay("unitbi").style.display="none"
    gay("SI").style.display="inline"
    gay("unitSI").style.display="inline"
    gay("rb").innerHTML="Si --> Bi"
    gay("div").innerHTML=""




}
function toggleDsiplaySI(){
    gay("SI").style.display="none"
    gay("unitSI").style.display="none"
    gay("bin").style.display="inline"
    gay("unitbi").style.display="inline"
    gay("rb").innerHTML="Bi --> Si"
    gay("div").innerHTML=""



}
    
function Converting(){
    

    if (gay("BiToSi").checked){
    
        
        let result=ConvertingBinaryToSystem()
     
        gay("div").innerHTML=result
        
        
    }
    if (gay("SiToBi").checked){
       

        let result=ConvertingSystemToBinary()
        gay("div").innerHTML=result
        

    }
   
}
function ConvertingBinaryToSystem(){
    let val=gay("bin").value
   
  val= Number(val)

   let unit=gay("unitbi").value

   unit= Number(unit)
    
//    gay("unitSi").selectedIndex=gay("unitbi").selectedIndex
//    unit2=gay("unitSi").value
let unit2=0
// switch(unit){
//     case 1:
//         unit2=1
//     case 1024:
//         unit2=1000
//     case Math.pow(2,20):
//         unit2=Math.pow(10,6)
//     case Math.pow(2,30):
//         unit2=Math.pow(10,9)
// }
if(unit==1){
    unit2=1
}
else if(unit==1024){
    unit2=1000
}
else if(unit==Math.pow(2,20)){
        unit2=Math.pow(10,6)

}
else if(Math.pow(2,30)){
    unit2=Math.pow(10,9)
}

   
    let result=val*(unit/unit2)
   
    
    return result
    


   
    
}
function ConvertingSystemToBinary(){
    let val=gay("SI").value
   
    val= Number(val)
  
     let unit=gay("unitSI").value
  
     unit= Number(unit)
      

  let unit2=0

  if(unit==1){
      unit2=1
  }
  else if(unit==1000){
      unit2=1024
  }
  else if(unit==Math.pow(10,6)){
          unit2=Math.pow(2,20)
  
  }
  else if(Math.pow(10,9)){
      unit2=Math.pow(2,30)
  }

     
      let result=val*(unit/unit2)

      
      return result
      
  

}
