const findTheOldest = function(people) {
    let date = new Date().getFullYear();
    for (let i = 0; i < people.length; i++) {
        if (!people[i].yearOfDeath) {
            people[i].yearOfDeath = date;
        }
    }

    return people.sort((personA, personB) => {
        aPerson = personA.yearOfDeath - personA.yearOfBirth;
        bPerson = personB.yearOfDeath - personB.yearOfBirth;
        return bPerson - aPerson;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
