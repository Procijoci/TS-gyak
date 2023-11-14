function VanENegativ(szamok) {
    var i = 0; // változó ami végigvisz a tömbön és 0 értéket adunk neki
    while (i < szamok.length && !(szamok[i] < 0)) { //amíg i kisebb mint a számok darabszáma (a tömb hossza) és amíg i kisebb mint 0 állítás hamis
        i++;
    }
    if (i < szamok.length) { //ha volt negativ szám akkor visszaadjuk a true értéket
        return true;
    }
    else {
        return false; //ha nem volt negativ akkor false
    }
    //  return i < szamok.length;     ez a rövidebb megoldás a while ciklus helyett
}
function KorKerTer(r) {
    var Ker = 2 * r * Math.PI;
    var Ter = r * r * Math.PI;
    return [Ker, Ter];
}
console.log(VanENegativ([3, 12, 9, -5, 1, 99]));
console.log(VanENegativ([1, 3, 5, 7, 9, 2]));
console.log(KorKerTer(5)); //5 a sugár
