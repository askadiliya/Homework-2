console.log("Masukkan jari-jari lingkaran:")

process.stdin.on("data", (input) => {
    let r = parseInt(input.toString().trim())
    let phi = 22 / 7

    if (Number.isNaN(r)) {
        console.log("Input harus berupa angka!")
        process.exit()
    }

    if (r % 7 !== 0) {
        phi = 3.14
    }

    let luasLingkaran = phi * r * r
    let kelilingLingkaran = 2 * phi * r

    console.log(`Luas lingkaran adalah ${luasLingkaran}`)
    console.log(`Keliling lingkaran adalah ${kelilingLingkaran}`)

    process.exit()
})
