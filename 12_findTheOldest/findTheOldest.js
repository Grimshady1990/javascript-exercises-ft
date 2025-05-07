const findTheOldest = function(people) {
    //let personAge = people.forEach(person => person.yearOfDeath - person.yearOfBirth);

    if (people.yearOfDeath !== people.yearOfDeath){
        people.push({yearOfDeath: 2025});
        
    } 


    const oldestPerson = people.reduce((max, person) => 
                                        person.yearOfDeath - person.yearOfBirth > 
                                        max.yearOfDeath - max.yearOfBirth ? 
                                        person : max);

    return oldestPerson;
    
    
                                        

};

// Do not edit below this line
module.exports = findTheOldest;
