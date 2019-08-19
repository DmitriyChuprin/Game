import allfriends from "/.friends.js";
function next(allfriends) {
    let tempMassive = lst.slice(count, count+6);
    console.log("Length: " + tempMassive.length);
    tempMassive.forEach(function(item) {
        console.log(item);
    });
    count += tempMassive.length;
    if (count === 21) {
      count = 20;
    };
};

function previous(allfriends) {
  let newCount = count - 6;
    if (newCount < 0) {
      newCount = 0;}
    let tempMassive = lst.slice(newCount, count);
    console.log("Length: " + tempMassive.length);
    tempMassive.forEach(function(item) {
        console.log(item);
    });
    count -= tempMassive.length;    
}