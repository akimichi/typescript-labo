test("check",() => {
  console.log("OK");
});
 
test("0を渡したらtrueになること",() => {
  const isZero = (n:number):boolean => {
    return n === 0; 
  }
  const result = isZero(0);
  expect(result).toBe(true);
});
