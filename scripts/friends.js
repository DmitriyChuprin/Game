function getFriends() {
    getFriends();

    //let allfriends = [];
    VK.api("friends.get", { "fields": "photo_100", "count": "1000" }, function(data) {
        //data.response.items.forEach(element => {
        // allfriends.push(element);
        //});
        all(data.response);
    });

}

//export { allfriends };
function all(el) {
    for (let i = 0; i < el.length; i++) {
        console.log(el[i].id);
    }
};