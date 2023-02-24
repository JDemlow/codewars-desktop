let friends = ["Ryan", "Kieran", "Mark", "Steven"];

function friend(friends) {
  let onlyFriends = friends.filter((name) => {
    return name.length === 4;
  });
  return onlyFriends;
}

friend(friends);

//https://www.codewars.com/kata/55b42574ff091733d900002f/solutions/javascript
