const ipa = 80;
const mtk = 50;
const bhs_indo = 90;
const bahasaInggris = 100;

if (ipa != "" && mtk != "" && bhs_indo != "" && bahasaInggris != "") {
  let students = [ipa, mtk, bhs_indo, bahasaInggris];
  let Avgmarks = 0;
  let count = students.length;

  for (let i = 0; i < count; i++) {
    Avgmarks += students[i];
  }
  console.log(`nilai rata-rata adalah : ${Avgmarks / count}`);

  let avg = Avgmarks / count;
  if (avg <= 59) {
    console.log("Grade : E");
  } else if (avg <= 69) {
    console.log("Grade : D");
  } else if (avg <= 79) {
    console.log("Grade : C");
  } else if (avg <= 89) {
    console.log("Grade : B");
  } else if (avg <= 100) {
    console.log("Grade : A");
  }
} else {
  console.log("Anda harus mengisi data dengan lengkap !");
}
