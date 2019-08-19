import allfriends from "js/friends.js";
function next(lst) {
    let tempMassive = lst.slice(count, count+8);
    console.log("Length: " + tempMassive.length);
    tempMassive.forEach(function(item) {
        console.log(item);
    });
    count += tempMassive.length;
    if (count === 21) {
      count = 20;
    };
};

function previous(lst) {
  let newCount = count - 8;
    if (newCount < 0) {
      newCount = 0;}
    let tempMassive = lst.slice(newCount, count);
    console.log("Length: " + tempMassive.length);
    tempMassive.forEach(function(item) {
        console.log(item);
    });
    count -= tempMassive.length;    
}

next(allfriends);