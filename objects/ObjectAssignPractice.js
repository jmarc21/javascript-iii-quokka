var person = {
    name: "Snarf",
    size: "Small",
    color: "redish"
}

var thundercat = {
    race: "thundercat",
    size: "medium",
    sound: "Thundercats Ho!"
}

var smurf = {
    race: "smurf",
    color: "blue"
}


// Make the person a thunder cat by assigning thundercat to person

// var thunderPerson = Object.assign(thundercat, person);

// We've permanently modified person, but it's better to make a copy.  So copy person then thundercat into a new empty object
var thunderPerson = Object.assign({}, person, thundercat);
thunderPerson;
// Make the a copy of a person that is a smurf
var smurfPerson = Object.assign({},person,smurf);
smurfPerson;
// Make a copy of a person that is a smurf then a thundercat
var smurfThundercat = Object.assign({},smurf,thundercat);
smurfThundercat;
// Make a copy of a person that is a thundercat then a smurf
var personThunderSmurf = Object.assign({},person,thundercat,smurf);
personThunderSmurf;
