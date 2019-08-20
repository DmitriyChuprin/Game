let allfriends;
VK.api("friends.get", { "fields": "photo_100", "count": "1000" }, function(data) {
    allfriends = data;
});

//export { allfriends };