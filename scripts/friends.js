function getFriends() {
    let allfriends = [];
    VK.api("friends.get", { "fields": "photo_100", "count": "1000", "v": "101" }, function(data) {
        //data.response.items.forEach(element => {
        // allfriends.push(element);
        //});
        console.log(data);
    });
    return allfriends;
}
console.log(getFriends());
//export { allfriends };
function all(el) {
    console.log(typeof(el));
    for (let key in el) {
        console.log(key + ":" + el.key);
    }
};

console.log(all(getFriends()));