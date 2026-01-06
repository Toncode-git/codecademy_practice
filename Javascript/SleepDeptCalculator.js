console.log('needed sleep hours for a human: 8');

const getSleepHours = (day) => {
   day = day.toLowerCase();

  switch (day){
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 5;
      break;
    case 'wednesday':
      return 6;
      break;
    case 'thursday':
      return 4;
      break;
    case 'friday':
      return 9;
      break;
    case 'saturday':
      return 10;
      break;
    case 'sunday':
      return 12;
      break;
  }
};

// console.log(getSleepHours('friday')); // user input

const getActualSleepHours = () => {
  return ( 
    getSleepHours('monday')+ //8
    getSleepHours('tuesday')+ //5
    getSleepHours('wednesday')+ //6
    getSleepHours('thursday')+ //4
    getSleepHours('friday')+ //9
    getSleepHours('saturday')+ //10
    getSleepHours('sunday') //12
  );
};


const getIdealSleepHours = () => {

  const idealHours = 8;
  return idealHours * 7; //<= days
  
};

console.log('\nActual hours slept per week: '+ getActualSleepHours());
console.log('ideal sleep hours per week: '+ getIdealSleepHours());// outputs 56

const calculateSleepDept = () => {
 const actualSleepHours  = getActualSleepHours()-7;
 const  idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours){
      return '\nYou got the perfect amount of sleep';
    }
    if (actualSleepHours > idealSleepHours){
      return '\nYou got more sleep than needed';
    }
    if (actualSleepHours < idealSleepHours){
      return '\nYou got '+ (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.';
    }
};

console.log(calculateSleepDept());





