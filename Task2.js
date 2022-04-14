const ipa = 90;
const mtk = 100;
const bhs_indo = 100;
const bahasaInggris = 90;

if (typeof ipa === "number" ||
  typeof mtk === "number" ||
  typeof bhs_indo === "number" ||
  typeof bahasaInggris === "number"
) {
  let mapel = [ipa, mtk, bhs_indo, bahasaInggris];
  let Avg = 0;
  let count = mapel.length;

  for (let i = 0; i < count; i++) {
    Avg += mapel[i];
  }

  console.log(`nilai rata-rata adalah : ${Avg / count}`);
  let nilai = Avg / count;
  if (nilai >= 90) console.log("Grade : A");
  else if (nilai >= 80) console.log("Grade : B");
  else if (nilai >= 70) console.log("Grade : C");
  else if (nilai >= 60) console.log("Grade : D");
  else if (nilai >= 0) console.log("Grade : E");
 
} else if (
  typeof ipa === "string" ||
  typeof mtk === "string" ||
  typeof bhs_indo === "string" ||
  typeof bahasaInggris === "string"
) {
  console.log("data harus number");
} else if (ipa === "" || mtk === "" || bhs_indo === "" || bahasaInggris === "") {
   console.log(" isi data dengan benar");
}
