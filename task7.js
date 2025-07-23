for (let i = 1; i <= 20; i++) {
  if (i % 7 === 0) {
    console.log(i);
    break;
  }
}


for (let j = 1; j <= 20; j++) {
  if (j % 2 === 0) {
    continue;
  }
  console.log(j);
}