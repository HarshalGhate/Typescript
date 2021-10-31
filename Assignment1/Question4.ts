/*
. Write a typescript program which contains one function named as ChkPrime. That function should 
accept one number and it should return true if the given number is prime and otherwise return false. 
Input : 11 
Output : It is prime number
*/

function ChkPrime(no:number):boolean
{   var iCnt:number=0;
    for(var i:number=2;i<=no/2;i++)
    {
        if(no%i==0)
        {
            iCnt=1;
            break;
        }    
    }
    if(iCnt==1)
    {
        return false;
    }
    else
    {
        return true;
    }
}

var bret:boolean=false;
bret=ChkPrime(21);
if(bret==true)
{
    console.log("It is prime number");
}
else
{
    console.log("It is not prime number");
}

