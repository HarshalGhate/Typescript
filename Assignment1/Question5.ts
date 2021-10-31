/*
Write a typescript program which contains one function named as Fibonacci. That function accept 
one number from user and print Fibonacci series till that number. 
Input : 21 
Output : 1 1 2 3 5 8 13 21
*/

function Fibonacci(no:number)
{   
    var i:number=0;
    var X0:number=0;
    var X1:number=1;
    var X2:number=0;
    console.log(X0);
    console.log(X1);
    for(i=2;i<=no;i++)
    {
        X2=X0+X1;
        X0=X1;
        X1=X2;
        if(X2<=no)
        {
            console.log(X2);
        }    
    }
}


var value:number=21;
Fibonacci(value);
