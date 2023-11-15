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
    gyarto: string, 
    tipus: string,
    hengerurtartalom: number,
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

function MinHengerUrtartalom(autok:Auto[]):Auto{   //autok tömbből egy Autot fog visszaadni
    var min:Auto = autok[0];                       //minimumérékkiválasztás Auto az autok tömbből
    for(var i:number = 0; i < autok.length; i++){  //végigmegyünk a tömb elemein
       //if elágazás megvizsgálja hogy a legkisebb hengerűrtartalmú megtekintett autó nagyobb-e a jelenleg vizsgáltnál
       if(autok[i].hengerurtartalom < min.hengerurtartalom){
          min = autok[i];                          //<<ha igen akkor a min-t felülirjuk autok i.elemével
       }
    }
    return min;                                    //visszaadjuk a minimumnak tekintett járművet
}

function BenzinesDb(autok:Auto[]):number{          //autok tömbből egy számot fog visszaadni
    var db:number = 0;                             // darabszámot lenullázzuk 
    for(var i:number = 0; autok.length; i++){      // autok tömb elemein végigmegyünk
       // if elágazás megvizsgálja, hogy az éppen vizsgált auto BenzinesE értéke megegyezik-e a true-val
       if(autok[i].BenzinesE == true){
           db++                                    //<< ha benzines akkor növeljük a darabszámot
       }
    } 
    return db;                    
}

var a1:Auto = {
    gyarto: "Opel",
    tipus: "Astra",
    hengerurtartalom: 1600,
    BenzinesE: true
};

var a2:Auto = {
    gyarto: "BMW",
    tipus: "i3",
    hengerurtartalom: 0,
    BenzinesE: false
};

var a3:Auto = {
    gyarto: "Volkswagen",
    tipus: "Passat",
    hengerurtartalom: 2200,
    BenzinesE: false
};

var a4:Auto = {
    gyarto: "Ford",
    tipus: "Mondeo",
    hengerurtartalom: 1700,
    BenzinesE: true
};

var autok:Auto[] = [a1, a2, a3, a4];

console.log(MinHengerUrtartalom(autok));
console.log(BenzinesDb(autok));


