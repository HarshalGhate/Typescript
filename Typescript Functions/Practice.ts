
/*  default
function Sum(a:number,b:number=10):number
{
    return a+b;
}
var ans=Sum(10);
console.log(ans);

var ans=Sum(10,30);
console.log(ans);
*/
//optional
/*
function Display(fname:string,lname?:string)
{
    console.log("First Name : ",fname);

    if(lname!=undefined)
    {
        console.log("Last Name : ",lname);
    }
}
Display("jay");
Display("Harsh","Ghate");
*/
//rest
/*function show(...names:string[])
{
    for(var i=0;i<names.length;i++)
    {
        console.log(names[i]);
    }
}

show("Professer","Barlin","Tokiyo","Orio","DEnver","Nyromi","Henseki","Mosko","Olsa");
*/
//anonymous

/*var add=function(a:number,b:number=30):number
{
    return a+b;
}

console.log(add(10))
var ans=add(10,20);
console.log(ans);
*/

//fun const
var add=new Function("a","b","return a+b");
var ans=add(15,5);
console.log(ans);




var square=(a:number)=>
{
    a=a*a;
    console.log(a);
}
square(5);