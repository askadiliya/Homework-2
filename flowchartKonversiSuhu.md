```mermaid
flowchart TD
  Start@{shape: circle, label: "Mulai"}
  Init@{shape: lean-r, label: "input: step = 1, temp = 0, tempSource = '', convertTo = ''"}
  Output1@{shape: lean-r, label: "Output: 'Masukkan angka suhu:'"}
  WaitInput1@{shape: lean-r, label: "inputUser : data"}
  LetInput1@{shape: rect, label: "input = data"}
  CekStep1@{shape: diamond, label: "step === 1"}
  Proses1@{shape: rect, label: "temp = Number(input)"}
  CekNumber@{shape: diamond, label: "!Number(temp)"}
  OutputError1@{shape: lean-r, label: "Output: 'Suhu harus angka'"}
  Output2@{shape: lean-r, label: "Output: 'Masukkan nama suhu awal (celcius/fahrenheit/kelvin/reamur):'"}
  SetLangkah2@{shape: rect, label: "step = 2"}
  WaitInput2@{shape: lean-r, label: "inputUser : data"}
  LetInput2@{shape: rect, label: "input = data"}
  CekStep2@{shape: diamond, label: "step === 2"}
  Proses2@{shape: rect, label: "tempSource = input"}
  Output3@{shape: lean-r, label: "Output: 'Masukkan nama suhu tujuan (celcius/fahrenheit/kelvin/reamur):'"}
  SetLangkah3@{shape: rect, label: "step = 3"}
  WaitInput3@{shape: lean-r, label: "inputUser : data"}
  LetInput3@{shape: rect, label: "input = data"}
  CekStep3@{shape: diamond, label: "step === 3"}
  Proses3@{shape: rect, label: "convertTo = input , hasil = 0 , satuan = ''"}

  IsCelcius@{shape: diamond, label: "tempSource === 'celcius'"}
  CtoF@{shape: diamond, label: "convertTo === 'fahrenheit'"}
  ProcessCtoF@{shape: rect, label: "hasil = temp * (9/5) + 32 , satuan = '°F'"}

  CtoK@{shape: diamond, label: "convertTo === 'kelvin'"}
  ProcessCtoK@{shape: rect, label: "hasil = temp + 273.15 , satuan = 'K'"}

  CtoR@{shape: diamond, label: "convertTo === 'reamur'?"}
  ProcessCtoR@{shape: rect, label: "hasil = (4/5) * temp , satuan = '°R'"}


  IsFahrenheit@{shape: diamond, label: "tempSource === 'fahrenheit'"}
  FtoC@{shape: diamond, label: "convertTo === 'celcius'"}
  ProcessFtoC@{shape: rect, label: "hasil = (temp - 32) * 5/9 , satuan = '°C'"}

  FtoK@{shape: diamond, label: "convertTo === 'kelvin'"}
  ProcessFtoK@{shape: rect, label: "hasil = 5/9 * (temp - 32) + 273 , satuan = 'K'"}

  FtoR@{shape: diamond, label: "convertTo === 'reamur'"}
  ProcessFtoR@{shape: rect, label: "hasil = (temp - 32) * 4/9, satuan = '°R'"}


  IsKelvin@{shape: diamond, label: "tempSource === 'kelvin'"}
  KtoC@{shape: diamond, label: "convertTo === 'celcius'"}
  ProcessKtoC@{shape: rect, label: "hasil = temp - 273.15 , satuan = '°C'"}

  KtoF@{shape: diamond, label: "convertTo === 'fahrenheit'"}
  ProcessKtoF@{shape: rect, label: "hasil = (temp - 273.15) * 9/5 + 32 , satuan = '°F'"}

  KtoR@{shape: diamond, label: "convertTo === 'reamur'"}
  ProcessKtoR@{shape: rect, label: "hasil = 4/5 * (temp - 273.15) , satuan = '°R'"}


  IsReamur@{shape: diamond, label: "tempSource === 'reamur'"}
  RtoC@{shape: diamond, label: "convertTo === 'celcius'"}
  ProcessRtoC@{shape: rect, label: "hasil = (5/4) * temp , satuan = '°C'"}

  RtoF@{shape: diamond, label: "convertTo === 'fahrenheit'"}
  ProcessRtoF@{shape: rect, label: "hasil = (temp * 9/4) + 32 , satuan = '°F'"}

  RtoK@{shape: diamond, label: "convertTo === 'kelvin'"}
  ProcessRtoK@{shape: rect, label: "hasil = (temp * 5/4) + 273.15 , satuan = 'K'"}


  OutputError2@{shape: lean-r, label: "Output: 'Konversi tidak ada'"}
  Exit@{shape: rect, label: "process.exit()"}
  End@{shape: dbl-circ, label: "Selesai"}

  outputHasil@{shape: lean-r, label: 'Output : "hasil : hasil , satuan"'}

  Start --> Init
  Init --> Output1
  Output1 --> WaitInput1
  WaitInput1 --> LetInput1
  LetInput1 --> CekStep1
  CekStep1 --True--> Proses1
  CekStep1 --False--> End
  Proses1 --> CekNumber
  CekNumber --True--> OutputError1
  OutputError1 --> Exit
  CekNumber --False--> Output2
  Output2 --> SetLangkah2
  SetLangkah2 --> WaitInput2
  WaitInput2 --> LetInput2
  LetInput2 --> CekStep2
  CekStep2 --True--> Proses2
  CekStep2 --False--> End
  Proses2 --> Output3
  Output3 --> SetLangkah3
  SetLangkah3 --> WaitInput3
  WaitInput3 --> LetInput3
  LetInput3 --> CekStep3
  CekStep3 --True--> Proses3
  CekStep3 --False--> End
  Proses3 --> IsCelcius

  IsCelcius --True--> CtoF
  CtoF --True--> ProcessCtoF --> outputHasil --> Exit
  CtoF --False--> CtoK
  CtoK --True--> ProcessCtoK --> outputHasil --> Exit
  CtoK --False--> CtoR
  CtoR --True--> ProcessCtoR --> outputHasil --> Exit
  CtoR --False--> OutputError2 --> Exit

  IsCelcius --False--> IsFahrenheit
  IsFahrenheit --True--> FtoC
  FtoC --True--> ProcessFtoC --> outputHasil --> Exit
  FtoC --False--> FtoK
  FtoK --True--> ProcessFtoK --> outputHasil --> Exit
  FtoK --False--> FtoR
  FtoR --True--> ProcessFtoR --> outputHasil --> Exit
  FtoR --False--> OutputError2 --> Exit

  IsFahrenheit --False--> IsKelvin
  IsKelvin --True--> KtoC
  KtoC --True--> ProcessKtoC --> outputHasil --> Exit
  KtoC --False--> KtoF
  KtoF --True--> ProcessKtoF --> outputHasil --> Exit
  KtoF --False--> KtoR
  KtoR --True--> ProcessKtoR --> outputHasil --> Exit
  KtoR --False--> OutputError2 --> Exit

  IsKelvin --False--> IsReamur
  IsReamur --True--> RtoC
  RtoC --True--> ProcessRtoC --> outputHasil --> Exit
  RtoC --False--> RtoF
  RtoF --True--> ProcessRtoF --> outputHasil --> Exit
  RtoF --False--> RtoK
  RtoK --True--> ProcessRtoK --> outputHasil --> Exit
  RtoK --False--> OutputError2 --> Exit

  IsReamur --False--> OutputError2
  Exit --> End
```