let step = 1;
let temp = 0;
let tempSource = "";
let convertTo = "";

console.log("Masukkan suhu:");

process.stdin.on("data", function (data) {
  let input = data.toString().trim();

  
  if (input === "") {
    console.log("Input tidak boleh kosong!");
    process.exit();
  }

  if (step === 1) {
    temp = Number(input);

    if (Number.isNaN(temp)) {
      console.log("Input suhu harus berupa angka!");
      process.exit();
    }

    console.log(
      "Masukkan Suhu Awal (celcius/fahrenheit/kelvin/reamur):"
    );
    step = 2;

  } else if (step === 2) {
    tempSource = input;

    console.log(
      "Masukkan Suhu tujuan (celcius/fahrenheit/kelvin/reamur):"
    );
    step = 3;

  } else if (step === 3) {
    convertTo = input;

    let hasil;
    let satuan;

    if (tempSource === "celcius") {
      if (convertTo === "fahrenheit") {
        hasil = temp * 9 / 5 + 32;
        satuan = "°F";
      } else if (convertTo === "kelvin") {
        hasil = temp + 273.15;
        satuan = "K";
      } else if (convertTo === "reamur") {
        hasil = temp * 4 / 5;
        satuan = "°R";
      } else {
        console.log("Konversi tidak tersedia");
        process.exit();
      }

    } else if (tempSource === "fahrenheit") {
      if (convertTo === "celcius") {
        hasil = (temp - 32) * 5 / 9;
        satuan = "°C";
      } else if (convertTo === "kelvin") {
        hasil = (temp - 32) * 5 / 9 + 273.15;
        satuan = "K";
      } else if (convertTo === "reamur") {
        hasil = (temp - 32) * 4 / 9;
        satuan = "°R";
      } else {
        console.log("Konversi tidak tersedia");
        process.exit();
      }

    } else if (tempSource === "kelvin") {
      if (convertTo === "celcius") {
        hasil = temp - 273.15;
        satuan = "°C";
      } else if (convertTo === "fahrenheit") {
        hasil = (temp - 273.15) * 9 / 5 + 32;
        satuan = "°F";
      } else if (convertTo === "reamur") {
        hasil = (temp - 273.15) * 4 / 5;
        satuan = "°R";
      } else {
        console.log("Konversi tidak tersedia");
        process.exit();
      }

    } else if (tempSource === "reamur") {
      if (convertTo === "celcius") {
        hasil = temp * 5 / 4;
        satuan = "°C";
      } else if (convertTo === "fahrenheit") {
        hasil = temp * 9 / 4 + 32;
        satuan = "°F";
      } else if (convertTo === "kelvin") {
        hasil = temp * 5 / 4 + 273.15;
        satuan = "K";
      } else {
        console.log("Konversi tidak tersedia");
        process.exit();
      }

    } else {
      console.log("Satuan suhu awal tidak valid");
      process.exit();
    }

    console.log(`Hasil konversi: ${hasil} ${satuan}`);
    process.exit();
  }
});
