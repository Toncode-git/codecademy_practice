

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
   console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
};

const declineEverything = arr => {
    
    veggies.forEach(politelyDecline)
};

console.log(declineEverything(veggies));

const acceptVegetable = veg => {
    console.log(`Ok, I guess I will eat some ${veg}`)
}

const acceptEverything = arr => {
    arr.forEach(acceptVegetable);
}

console.log(acceptEverything(veggies));