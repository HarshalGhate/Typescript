/*
Write a typescript program which contains one function named as Area. That function should 
calculate area of circle. Accept value of radius from user and return its area. Default value of PI 
should be 3.14 if it is not provided by the caller. 
Input : 5 
Output : Area of circle is 78.5
*/

function Area(r:number,PI:number=3.14):number
{
    var iArea:number=0;
    iArea=PI*r*r;
    return iArea;
}

var radius:number=0;
var PI:number=0;
var iRet:number=0;

iRet=Area(1.5);
console.log("Area is:",iRet);

iRet=Area(5,5.14);
console.log("Area is:",iRet);

