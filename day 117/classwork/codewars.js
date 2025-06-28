function generateRota(seatingPlan) {
    let rota = [];

    seatingPlan.forEach((row, index) => {
        if (index % 2 === 0) {
            // Even row - left to right
            rota.push(...row);
        } else {
            // Odd row - right to left
            rota.push(...row.reverse());
        }
    });

    return rota;
}

// Test case
const seatingPlan = [
    ["Stefan", "Raj", "Marie"],
    ["Alexa", "Amy", "Edward"],
    ["Liz", "Claire", "Juan"],
    ["Dee", "Luke", "Katie"]
];

console.log(generateRota(seatingPlan));
// Expected output: ["Stefan", "Raj", "Marie", "Edward", "Amy", "Alexa", "Liz", "Claire", "Juan", "Katie", "Luke", "Dee"]
