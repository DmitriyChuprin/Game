let allfriends;
VK.api("friends.get", { "fields": "photo_100", "count": "1000" }, function(data) {
    let friends = data

});
console.log(allfriends);
//export { allfriends };