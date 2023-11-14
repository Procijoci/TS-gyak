function VanENegativ(szamok:number[]){
    var i: number = 0;      // változó ami végigvisz a tömbön és 0 értéket adunk neki

    while(i < szamok.length && !(szamok[i] < 0)){   //amíg i kisebb mint a számok darabszáma (a tömb hossza) és amíg i kisebb mint 0 állítás hamis
        i++;
    }

    if(i < szamok.length){    //ha volt negativ szám akkor visszaadjuk a true értéket
        return true;
    }
    else{
        return false;         //ha nem volt negativ akkor false
    }

   //  return i < szamok.length;     ez a rövidebb megoldás a while ciklus helyett
}

function KorKerTer(r:number):[number, number]{  //tuple ami két számot ad (ker,ter)
   var Ker: number = 2 * r * Math.PI;
   var Ter: number = r * r * Math.PI;

   return[ Ker, Ter];
}

console.log(VanENegativ([3, 12, 9, -5, 1, 99]));
console.log(VanENegativ([1, 3, 5, 7, 9, 2]));
console.log(KorKerTer(5));   //5 a sugár


interface Auto{
    Gyártó: string, 
    Típus: string,
    Hengerűrtartalom: number,
    BenzinesE: boolean
}

/*
- Keszits publikus GitHub repositorit a sajat felhasznaloi fiokodban
- Indits Git BASH-t, es a jelenlegi TS projektedben inicializalj git-et
- A lokalis repo-t kosd ossze az online (github-os) repoddal
- Toltsd fel a jelenlegi allapotot a github-ra
*/

/*
TS!!
- Keszits alprogramot, ami kivalasztja egy auto tombbol a legkisebb hengerurtartalmu autot
- Keszits alprogramot, ami megadja a parameterul kapott auto tombbol a benzinesek darabszamat
- A valtoztatasokat toltsd fel a github repodba
*/