function fpb(a, b) {
  if (b) {
    return fpb(b, a % b);
  } else {
    return a;
  }
}

console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
console.log(fpb(12, 4))
