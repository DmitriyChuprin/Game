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
let friends = test.response.items;
console.log(friends.length);
for (let element = 0; element < friends.length; element++) {
    console.log(friends[element].first_name);
}
let newFriends = [];
friends.forEach(element => {
    newFriends.push(element);
});
console.log(newFriends.length);