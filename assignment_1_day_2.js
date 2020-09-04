
// Question 1: Search a particular character (let's say 'a') in a string (let's say "Letsupgrade_in")

let str_example="Letsupgrade_in"
for(let i=0;i<=str_example.length;i++)
{
    if(str_example[i]=="a")
    {
        console.log(`found 'a' in the string ${str_example}`);
    }
}



// Question 2: Program to convert minutes to seconds
let min=5;
console.log(`${min} minutes== ${min*60} seconds`);


// Question 3: Program to search for a element (Let's say "Mango") in a array of strings (Let's say ["Apple","Mango","Orange","Pineapple","Banana","Watermelon","Lichi"] )

let Array1=["Apple","Mango","Orange","Pineapple","Banana","Watermelon","Lichi"];
for(let i=0;i<=Array1.length;i++)
{
    if(Array1[i]=="Mango")
    {
        console.log(`'Mango' is found into the array ${Array1}`);
    }
}



// Question 4: Program to display only elements containing 'a' in them from a array (considering the same Array from the previous Answer)
let Array2=["apple","mango","orange","pineapple","banana","watermelon","lichi"];
let Array3=[];
for(let i=0;i<Array2.length;i++)
{
    for(let j=0;j<Array2[i].length;j++)
    {
        let p=Array2[i];
        if(p[j]=="a")
        {
            Array3.push(p);
            break;
        }
    }

}
console.log(Array3);



// Question 5: Print an array in reverse order
let Array4=["apple","mango","orange","pineapple","banana","watermelon","lichi"];
let Array5=[];
for(let i=Array4.length -1;i>=0;i--)
{
    Array5.push(Array4[i]);
}
console.log(Array5);
