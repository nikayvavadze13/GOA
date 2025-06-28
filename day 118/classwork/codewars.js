function divideIntoGroups(names, groupSize) {
    let groups = [];
    

    for (let i = 0; i < names.length; i += groupSize) {
        groups.push(names.slice(i, i + groupSize));
    }
    
    return groups;
}


const people = ["Stefan", "Raj", "Marie", "Alexa", "Amy", "Edward", "Liz", "Claire", "Juan", "Dee", "Luke", "Katie"];
const groupSize = 3;

const groupedPeople = divideIntoGroups(people, groupSize);
console.log(groupedPeople);

