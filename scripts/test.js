test = {
    "response": {
        "count": 1132,
        "items": [{
            "id": 2884043,
            "first_name": "Albert",
            "last_name": "Usmanov",
            "domain": "hghg",
            "city": {
                "id": 1,
                "title": "Moscow"
            },
            "online": 0
        }, {
            "id": 1894768,
            "first_name": "Aleksandra",
            "last_name": "Sokolovskaya",
            "domain": "aleksandrasokolovskaya",
            "city": {
                "id": 1,
                "title": "Moscow"
            },
            "online": 0
        }, {
            "id": 158157120,
            "first_name": "Alenka",
            "last_name": "Scherbakova",
            "domain": "id158157120",
            "city": {
                "id": 2,
                "title": "Saint Petersburg"
            },
            "online": 1
        }]
    }
}

function getFriends() {
    let allfriends = [];
    let friends = test.response.items;
    friends.forEach(element => {
        allfriends.push(element);
    })
    return allfriends;
}

let friends = getFriends();
let count = 0;
console.log("ARRAY FRIENDS: " + friends);

function next(lst) {
    console.log("FIRST ITEM: " + lst[0]);
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