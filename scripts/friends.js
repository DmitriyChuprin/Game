let allfriends = VK.api("friends.get", { "fields": "photo_100", "count": "1000" });
console.log(allfriends);
export { allfriends };