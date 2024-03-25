function finalScore(nama, nilai, kehadiran) {
    if (nilai == 100 && kehadiran > 80) {
        console.log("SELAMAT, " + nama + "! ANDA DINYATAKAN LULUS DENGAN PREDIKAT CUM LAUDE");
    }
    else if (nilai >= 70 && kehadiran > 70) {
        console.log("SELAMAT, " + nama + "! ANDA DINYATAKAN LULUS");
    }
    else {
        console.log("MAAF, " + nama + ", ANDA DINYATAKAN TIDAK LULUS");
    }
}
var score1 = finalScore;
score1("John", 80, 90);
var score2 = finalScore;
score2("Jane", 60, 65);
var score3 = finalScore;
score3("Alice", 100, 85);
