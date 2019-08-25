//import { allfriends } from "./friends.js";

/*let friends = getFriends();
let count = 0;
//next(friends);


function getFriends() {
    let allfriends = {};
    VK.api("friends.get", { "fields": "photo_100", "count": "1000" }, function(data) {
        //let friends = data.response.items;
        for (let key in data) {
            allfriends.key = key;
            allfriends[key] = data[key];
        }
    })
    return allfriends;
};

//console.log(friends);
//console.log(friends.response);
//console.log(friends.response[0]);



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

next(friends);*/