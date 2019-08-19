let allfriends = [];
VK.api("friends.search", { "fields": "photo_100", "count": "1000" }, function(data) {
    let allfriends = data.response.items;

});
console.log(allfriends);
export { allfriends };