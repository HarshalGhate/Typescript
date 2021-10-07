
function ArraySum(arr:number[]):number
{   var iSum:number=0;
   /* for(var i=0;i<arr.length;i++)
    {
        iSum+=arr[i];
    }
    return iSum;
   */
  for(let value of arr)
  {
    iSum+=value;
  }
  return iSum; 
}

let Arr:number[]=new Array(5);
Arr=[10,20,30,40,50];

var iRet:number=ArraySum(Arr);
console.log("Sum:",iRet);
