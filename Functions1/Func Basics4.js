//======================== JavaScrit ===================================================
//Supose , Gift shopping card in this we not know the number of numbers we need to add 
//Because it depends on how many items a users select 

function calculateCartPrice(...num1)
{
    return num1
}
//For passing too many values 
//In this case we can use ... "Rest"/"Spread"
//Depending on the use case it i seither called as rest or spread.
//... it packs all the values insinde a bundle

console.log(calculateCartPrice(200,400,500,2000));   //In this case it will pack all these values in an Array.