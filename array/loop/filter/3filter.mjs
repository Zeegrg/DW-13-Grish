let ar1 = ["ram", "hari", "nitan", "roshan"];
let ar2 = ar1.filter((value, i) => {
  if (value.length > 4) {
    return true;
  } else {
    return false;
  }
});
console.log(ar2);
