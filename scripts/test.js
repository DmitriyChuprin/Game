function next() {
    let click = 8;
    VK.api("friends.get", { "fields": "photo_100", "order": "name", "count": "8", "offset": click }, function(data) {
        //let friends = data.response.items;
        console.log(`Length = ${data.response.items.length}`);
        data.response.items.forEach(element => {
            console.log(`ID: ${element.id} name ${element.first_name}`);
        });
        click += 8;
    });
}

next();
next();