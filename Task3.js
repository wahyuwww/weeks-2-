const printPiramida = 5;
for (i = 0; i <= printPiramida; i++) {
  let segitiga = "";
  for (j = 1; j <= printPiramida - i; j++) {
    // segitiga += j;
    segitiga += j;
  }
  console.log(segitiga);
}

const printSegitiga = 23;
typeof printSegitiga === "string"
  ? console.log("data harus number")
  : console.log("data number");
