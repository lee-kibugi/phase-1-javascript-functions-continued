// Define the saturdayFun function
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
 // Define the mondayWork function
      const mondayWork = function (activity = 'go to the office') {
        return `This Monday, I will ${activity}.`;
      }
    
  // Define the wrapAdjective function
      function wrapAdjective(highlight = '*') {
        return function (adjective) {
          return `You are ${highlight}${adjective}${highlight}!`;
        };
      }
    
    // Now, these functions are defined and can be used without ReferenceErrors.
