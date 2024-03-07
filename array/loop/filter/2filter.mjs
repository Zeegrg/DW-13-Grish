let ar1 = [1, 2, 3, 4, 5];

let ar2 = ar1.filter((value, i) => {
  if (value % 2 === 0) {
    return false;
  } else {
    return true;
  }
});
console.log(ar2);
