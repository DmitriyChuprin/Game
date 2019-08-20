//import { allfriends } from "./friends.js";
function getFriends(){
    let allfriends = [];
    VK.api("friends.get", { "fields": "photo_100", "count": "1000" }, function(data) {
        let friends = data.response.items.length;
        for (let i=0; i < friends; i++) {
            allfriends.push(data.response.items[i]);
            }
    
});
    return allfriends;
}
let friends = getFriends();
let count = 0;
console.log(friends);
function next(lst) {
    console.log(lst[0]);
    let tempMassive = lst.slice(count, count + 8);
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
        newCount = 0;
    }
    let tempMassive = lst.slice(newCount, count);
    console.log("Length: " + tempMassive.length);
    tempMassive.forEach(function(item) {
        console.log(item);
    });
    count -= tempMassive.length;
}

next(friends);