let allfriends = VK.api("friends.search", { "fields": "photo_100", "count": "1000" }, function(data) {
    //console.log(data.response.items);
    // return data.response.items;
});
console.log(allfriends);
export { allfriends };