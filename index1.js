/*Greater Than Operator: Checking if a value is > 100 */

function testGreaterThan(valueTested)
{
    if (valueTested > 0 && valueTested < 11)
        {
            return "The value tested is greater than 1.";
        }
 
    if (valueTested > 9 && valueTested < 100) 
        {
           return "The value tested is greater than 10.";
        }

    if (valueTested > 100) 
    	 {
            return "The value tested is greater than 100.";
         }

    return "The value is either gibberish, a negative number or zero";
        
}

console.log(testGreaterThan(10000));