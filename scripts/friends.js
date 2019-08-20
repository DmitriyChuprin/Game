let allfriends = VK.api("friends.get", { "fields": "photo_100", "count": "1000" }, function(data) {
    return data.response.items;
});
console.log(allfriends);
export { allfriends };