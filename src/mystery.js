// export const mystery2 = (num) => {
//   if(num % 100 === 0 & num % 400 !== 0 ) {
//     return false;
//   } else if (num % 4 === 0 || num % 400 === 0) {
//     return true;
//   }
//   return false;
// };

// Alternative Solution
export const mystery2 = (num) => {
  if (num % 4 === 0) {
    if (num % 100 === 0) {
      return !(num % 400);
    }
    return true;
  }

  return false;
};




