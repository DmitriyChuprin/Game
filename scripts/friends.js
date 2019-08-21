function getFriends() {
    let allfriends = [];
    VK.api("friends.get", { "fields": "photo_100", "count": "1000", "v": "101" }, function(data) {
        data.response.items.forEach(element => {
            allfriends.push(element);
        });
    });
    return allfriends;
}
console.log(getFriends());
//export { allfriends };
function all(el) {
    el.forEach(element => {
        console.log(element);
    })
};

console.log(all(getFriends()));