interface University {(
    nama: string,
    nilai: number,
    kehadiran: number
):void
}

function finalScore(nama: string, nilai: number, kehadiran: number):void {
    if (nilai == 100 && kehadiran > 80) {
        console.log("SELAMAT, " + nama + "! ANDA DINYATAKAN LULUS DENGAN PREDIKAT CUM LAUDE");
    } else if (nilai >= 70 && kehadiran > 70) {
        console.log("SELAMAT, " + nama + "! ANDA DINYATAKAN LULUS");
    } else {
        console.log("MAAF, " + nama + ", ANDA DINYATAKAN TIDAK LULUS");
    }
}

let score1: University = finalScore;
score1("John", 80, 90);

let score2: University = finalScore;
score2("Jane", 60, 65);

let score3: University = finalScore;
score3("Alice", 100, 85);
