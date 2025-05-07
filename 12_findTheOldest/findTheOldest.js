const findTheOldest = function(people) {
    //let personAge = people.forEach(person => person.yearOfDeath - person.yearOfBirth);

    if (typeof people[0].yearOfDeath === undefined){
        for (let i )
    }


    const oldestPerson = people.reduce((max, person) => 
                                        person.yearOfDeath - person.yearOfBirth > 
                                        max.yearOfDeath - max.yearOfBirth ? 
                                        person : max);

    return oldestPerson;
    
    
                                        

};

// Do not edit below this line
module.exports = findTheOldest;
