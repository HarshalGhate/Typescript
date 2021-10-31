result=function(no){
    var iCnt=false;
    for(var i=2;i<=no/2;i++)
    {
        if(no%i==0)
        {
            iCnt=true;
        }    
        
    }
    if(iCnt==true)
    {
        return "It is not Prime Number";
    }
    else
    {
        return "It is Prime Number";
    }    
}    

console.log(result(6));
console.log(result(28));