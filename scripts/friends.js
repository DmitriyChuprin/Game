let allfriends = [];
VK.api("friends.get", { "fields": "photo_100", "count": "1000" }, function(data) {
    let friends = data.response.items.length;
    for (let i=0; i < friends; i++) {
        allfriends.push(data.response.items[i]);
    }
    
});
//console.log(allfriends);
export { allfriends };