const removeFromArray = function(array, ...args) {
   // create new array
   const newArray = [];
   
   // loop through array
   // push items in array into newArray UNLESS they are the argument
   array.forEach(item => {
      if (!args.includes(item)){
         newArray.push(item);
      }
   });

   //return newArray with arguments removed
   return newArray;
}


// Do not edit below this line
module.exports = removeFromArray;
