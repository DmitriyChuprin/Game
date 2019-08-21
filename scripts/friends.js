let allfriends = [];
VK.api("friends.get", { "fields": "photo_100", "count": "1000" }, function(data) {
    data.response.items.forEach(element => {
        allfriends.push(element);
    });
});

//export { allfriends };