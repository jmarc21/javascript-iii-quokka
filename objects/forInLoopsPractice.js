var drink = {
    color: 'orange',
    taste: 'orange',
    carbonated: true,
    brand: 'sunkisser'
}

//Loop over drink
//if the value is 'orange' change it to 'cherry'

for(var key in drink){
    drink;
    var val = drink[key]
    val;
    if(val==="orange"){
        drink[key]= 'cherry';
    }
}

function checkValid(obj){
    
    for (var key in obj){

    }
}
//Write a function, called 'checkValid', that takes in an object like drink 
//loop over the object and check if values are falsy
//return false if any values are falsy
//return true if all values are truthy