function printFirstNames(friends) {
    for (let friend of friends) {
        console.log(friend.firstName);
    }
}
printFirstNames([
    { firstName: "Thomas" },
    { firstName: "Julia" },
    { firstName: "Anna" }
]);
