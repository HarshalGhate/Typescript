/*
1. Write a typescript program which contains one function named as Maximum. That function accepts 
three parameters and it should returns largest value from three input parameters. 
Input : 23 89 6 
Output : Maximum number is 89
*/

function Maximum(a:number,b: number,c:number):number
{
    if((a>b)&&(a>c))
    {
        return a;
    }
    else if(b>c)
    {
        return b;
    }
    else
    {
        return c;
    }

}

var no1:number=23;
var no2:number=89;
var no3:number=6;

var iRet=Maximum(no1,no2,no3);
console.log("The maximum Number : ",iRet);
