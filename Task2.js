const ipa = 80;
const mtk = 100;
const bhs_indo = 90;
const bahasaInggris = 90;

if (
  typeof ipa == "string" ||
  typeof mtk == "string" ||
  typeof bhs_indo == "string" ||
  typeof bahasaInggris == "string"
) {
  console.log("Upsss tolong masukan data dengan benar");
} else {
  let mapel = [ipa, mtk, bhs_indo, bahasaInggris];
  let Avg = 0;
  let count = mapel.length;

  for (let i = 0; i < count; i++) {
    Avg += mapel[i];
  }
  console.log(`nilai rata-rata adalah : ${Avg / count}`);

  let nilai = Avg / count;
  if (nilai <= 59) console.log("Grade : E");
  else if (nilai <= 69) console.log("Grade : D");
  else if (nilai <= 79) console.log("Grade : C");
  else if (nilai <= 89) console.log("Grade : B");
  else if (nilai <= 100) console.log("Grade : A");
}
