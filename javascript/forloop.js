const arr = [-2, 3, 0, 2, -5];
for (let i = 0; i < 3; i++) {
  console.log(`i는 ${i}입니다.`);
  for (let j = i + 1; j < 3; j++) {
    console.log(`i는 ${i} j는 ${j}입니다.`);
    for (let k = j + 1; k < 3; k++) {
      console.log(`i는 ${i} j는 ${j} k는 ${k}입니다.`);
    }
  }
}
