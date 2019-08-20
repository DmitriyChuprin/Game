let allfriends = [];
VK.api("friends.get", { "fields": "photo_100", "count": "1000" }, function(data) {
    let friends = data.response.items;
    for (let i=0; i> friends.length; i++) {
        allfriends[i] = friends[i];
    }
    
});
console.log(allfriends);
export { allfriends };