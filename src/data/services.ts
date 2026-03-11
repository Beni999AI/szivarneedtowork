export interface Service {
    id: string;
    title: string;
    duration: string;
    description: string;
    image?: string;
    orientation?: 'vertical' | 'horizontal';
    longDescription?: string;
}

export const services: Service[] = [
    {
        id: "karma-elemzes",
        title: "Transzcendentális karma asztrológia",
        duration: "2 óra",
        description: "Mélyreható elemzés, amely feltárja a lélek vállalt feladatait és karmikus mintázatait a születési képlet tükrében.",
        longDescription: `SZIVÁRVÁNY KÉPLETELEMZÉS

Minden ember egy felfoghatatlanul tökéletes, több rétegű, mindenre kiterjedő és hihetetlenül csodásan megtervezett élettervvel születik erre a Földre. Ezek azok a tervek, és feladatok, amit a születési pillanatunk (születési képletünk) letükröz. A születési képleted letükröz Téged, az igazi ÖNVALÓDAT!

AZ ELEMZÉSEDHEZ 3 DOLOGRA VAN SZÜKSÉGEM:
1. a születésed helyére
2. a születésed pontos dátumára és idejére (óra:perc)
3. a vágyra, hogy az összefüggéseken keresztül feltárd ÖNMAGAD

Szivárványasztrológia elemzés nem csupán információ átadás, hanem energetikai gyógyítás.

A képletelemzés lehet online (telefonon, messenger), vagy személyesen találkozás keretében (Budapest, III. kerület, Római).

A konzultáció időpontjának rögzítése után elkezdek dolgozni a képleteden, a hagyományos bolygókon túl, megnézem a releváns aszteroida, kentaur és csillagkép állásokat a születési képletedben.

A konzultációkor kapcsolódom a lelkedhez, tisztán érzékeléssel érezlek.

RÁLÁTÁS – ÖSSZEFÜGGÉS - VÁLASZ

Megnézem – többek között:
• prominens energiáid
• mik az erősségeid és a gyengeségeid, mik a benned rejlő lehetőségek - milyen energia összetétellel születtél;
• mit tudsz ösztönösen működtetni az életedben és milyennek érzékelnek mások a megjelenésed, a lényed által - hogyan, melyik irányba indulj, ha dolgozni szeretnél valami működtetésén;
• mit tudsz magadba befogadni és mit nem, miért igen vagy miért nem, és hogyan, melyik irányba indulj, ha dolgozni szeretnél valami befogadásán;
• hol vannak a hangsúlyok …,
• milyen párkapcsolatot szeretnél megélni és milyen megélésre/átélésre vágyik legjobban a lelked ebben az életedben – mik gátolnak ebben önmagadon belül, hogyan és mivel tudnád ezt feloldani. Mi az, ami tud segíteni neked ebben;
• milyen vagy stresszhelyzetben – mi az, ami segítség neked ilyenkor, hogy megtaláld vagy visszatalálj a lelki békédbe – mi az, ami stresszel és miért

„AMINT FENN, ÚGY LENN & AMINT KINN, ÚGY BENN”

Hálás vagyok, hogy az elmúlt években, életekben azért dolgoztam, tanultam, hogy megkaphassam azt az Isteni áldást, hogy a születési képletelemzések által átadom neked a lelked üzenetét, miközben a szivárvány energia magas rezgése által lehetővé válik az a csoda, hogy a fénylények az elemzés alatt el is kezdjenek rajtad dolgozni.`,
        image: "/services/Transzcendentális karma asztrológia.jpeg",
        orientation: "horizontal"
    },
    {
        id: "prognosis",
        title: "Éves asztrológiai prognózis",
        duration: "2 óra",
        description: "Részletes előretekintés az előtted álló év energetikai hatásaira, lehetőségeire és kihívásaira.",
        longDescription: `Az asztrológiai prognózis a bolygók aktuális állásának és a születési képletnek az összevetése, amely útmutatást ad a várható energiákról, lehetőségekről és kihívásokról.
Ez nem jóslás, hanem szellemi felkészülés a jelen és a jövő energiakombinációira.

Akárcsak az időjárás előrejelzés, ami lehetővé teszi, hogy esős idő esetén döntsünk, hogy ki akarunk-e menni, viszünk-e magunkkal esernyőt, otthon maradunk, vagy nem zavar az eső.
Konzultáció időtartama: 2 óra
Pontos születési adatok szükségesek.`,
        image: "/services/Éves asztrológiai prognózis.jpg",
        orientation: "vertical"
    },
    {
        id: "allocsillagok",
        title: "Állócsillagok a születési képletben",
        duration: "1 óra",
        description: "A távoli csillagok és csillagképek üzeneteinek megfejtése, amelyek finomítják és árnyalják a személyes sorsot.",
        longDescription: `Az emberek évezredek óta figyelték, tanulmányozták az égbolt fényeit.
A Napút Zodiákus jegyei mögött csillagképek vannak, amelyeket állócsillagok alkotnak.

A konstellációkat alkotó fényesebb csillagoknak ősidőktől fogva minden kultúra nevet adott, a ránk maradt csillagnevek nagy részét pedig az arab asztronómusoktól örököltük meg.

Az állócsillagok értelmezése a transzcendentális asztrológiában is azon alapul elsősorban, hogy az égbolt melyik szegmensén helyezkednek el.

A leszületendő lélek a 3D-és valósághoz közelítve különböző layer-eken keresztül érkezik, a legelső energetikai réteg a konstellációk és állócsillagok dimenziója, ezt azt jelenti, hogy ezzel találkozunk először, ez van legmélyebben belénk vésődve, ugyanakkor erre „emlékszünk” a legkevésbe.

A konzultáció során elmesélem a prominens állócsillag állásaidat.`,
        image: "/services/Állócsillagok a születési képletben.jpg",
        orientation: "vertical"
    },
    {
        id: "szinasztria",
        title: "Szinasztria (Párkapcsolati elemzés)",
        duration: "2 óra",
        description: "Két ember energetikai kapcsolódásának, közös feladatainak és harmóniájának vizsgálata összevetett képletek alapján.",
        longDescription: `A szinasztria a 2 érintett személy születési képletének összevetése által lehetővé teszi, hogy lássuk, hogyan kapcsolódnak és lépnek interakcióba egymással az emberek a születési képlet enegiáin keresztül.

A napjegyek kompatibilitásával ellentétben a szinasztria mélyebb betekintést nyújt abba, hogy megértsük, hogyan viszonyulnak az emberek egymáshoz.

A szinasztria mindenféle kapcsolat esetén segít, nemcsak párkapcsolat, illetve szerelmi kapcsolat esetén:
• szülő & gyermek
• párkapcsolat
• főnök & beosztott
• barátok
• munkatársak

Konzultáció időtartama: 2 óra`,
        image: "/services/Szinasztria (Párkapcsolati elemzés).jpg",
        orientation: "vertical"
    },
    {
        id: "eletesemeny",
        title: "Életesemény energetikai vizsgálat",
        duration: "1 óra",
        description: "Fontos múltbeli vagy jövőbeli életesemények hátterében húzódó asztrológiai hatások és tanulságok elemzése.",
        longDescription: `A múlt történéseit nem tudjuk megváltoztatni, a hozzá kapcsolódó érzéseinket azonban igen. Mély és fájdalmas történésekkel kapcsolatban évekig, évtizedekig bántjuk magunkat, sokszor azt a gondolatot pörgetve, hogy mi lett volna ha…

Az életesemények asztrológiai elemzése a születési képlet és az életesemény aktuális bolygóállásainak összevetésével történik, hogy megértsük, a helyére tudjuk tenni a személyes sorsfordulókat, lehetőségeket és kihívásokat. Ez nem jóslás, hanem a fejlődési mintázatok és az időzítés (timing) feltérképezése.`,
        image: "/services/Életesemény energetikai vizsgálat.jpg",
        orientation: "vertical"
    },
    {
        id: "aktivacio",
        title: "#Szivárványasztrológia aktiváció",
        duration: "2 óra",
        description: "A Vénusz és Jupiter konjunkciójának terében történő energetikai behangolás, ahol a saját képleted megrajzolásával kapcsolódsz a forráshoz.",
        longDescription: `A Vénusz és a Jupiter konjunkció téridőpillanatában elindítom az energiaszálat…
Az "amint fenn, úgy lenn" azt is jelenti, hogy mi multidimenzionális lelkünk is képes kapcsolódni az égbolt szereplőihez, ehhez azonban nekünk kell emelkedni.
Majdnem minden képletelemzéskor elhangzik a kérdés, hogy miként tudok a képletemben lévő energiákhoz kapcsolódni???
Az ember az Isten és az Univerzum megnyilvánulása, s az egyéni születési képlet tartalmazza, hogy a leszületendő lélek erre az életére milyen energiakombinációt választott magának.
Elsődlegesen mindenkinek a saját képletének az energiáihoz kell tudnia kapcsolódni, utána pedig a saját képletén keresztül kapcsolódik a tranzit energiákhoz is.
Ennek az egyik mágikus megvalósítási eszköze, amikor saját magunk megrajzoljuk a születési képletünk ábráját, a benne lévő jegyekkel, házakkal, bolygókkal és fényszögekkel.
A kézzel rajzolt születési mandala él, áramlik benne az energia, benne van a flow. Neked nem kell ismerni az asztrológiát, mindenben segítek.`,
        image: "/services/Szivárványasztrológia Aktiváció.jpg",
        orientation: "horizontal"
    },
    {
        id: "walk-talk",
        title: "Walk & Talk Asztrológia",
        duration: "1 óra",
        description: "Sétáló asztrológiai konzultáció a természetben, ahol a mozgás és a környezet segíti a lelki blokkok oldását.",
        longDescription: `Az elmúlt hónapokban azt vettem észre, hogy az emberek elvesznek a saját életükben, bármennyire is szeretnék, a napi rutinon kívül nincs idejük semmire.
Ez adta az ötletet, hogy elindítsam a „walk & talk astrology-t”, vagyis a „sétáló asztrológiai konzultációt”.
A sétáló-beszélgetős konzultáció fizikai, mentális és érzelmi előnyöket kínál a mozgás és a terápiás beszélgetés kombinálásával.
A hagyományos terápiás környezettől való eltérés nyugodtabb és informálisabb légkört teremt. Ennek eredményeként az ügyfelek kevésbé érzik magukat zártnak, és könnyebben fejezik ki magukat.
A „sétáló asztrológiai konzultáció” előnyei a hagyományos, szobában zajló/online konzultációhoz képest:
• a mozgás, legyen az egy lassú séta nemcsak fizikai, de lelki és szellemi elmozdulást is hoz.
• a környezetváltozás és a természet közelsége rugalmasabb perspektívát, nézőpontváltozást eredményez.
• a természetben könnyebb kapcsolódni a 4 elemhez.
• a közös tevékenység erősíti az emberek közötti kapcsolatot.
• séta közben könnyebb megnyílni.`,
        image: "/services/Walk & Talk Asztrológia.jpg",
        orientation: "vertical"
    },
    {
        id: "asztrokartografia",
        title: "Asztrokartográfia",
        duration: "Írásban",
        description: "Annak feltérképezése, hogy a világ különböző pontjain milyen energetikai hatások érvényesülnek számodra.",
        longDescription: `A lélek kiválasztja azt az időpillanatot, amely számára az optimális energiakombinációt hordozza, s természetesen a születési hely sem véletlen.
Mikor hosszabb rövidebb időre elhagyjuk a szülőhazánkat, a legtöbbször megkönnyebbülünk, leesnek rólunk a feladataink terhei.
Ugyanakkor miután évekig utazgattam és éltem hosszabb ideig a világ különböző részein, a saját bőrömön éreztem, hogy bizonyos helyek mennyire másnak érződnek, energetikailag eltolódnak egyik helyről a másikra.
A helyeknek történeteik vannak és a világ helyszínei visszatükrözik számunkra a bennünk lévő tudat aspektusait.
Az asztrokartográfia (vagy lokációs asztrológia) egy olyan rendszer, amely lehetővé teszi, hogy megvizsgáljuk és tudatosítsuk, hogy a világ különböző helyein miként változik meg a rendelkezésünkre álló energia.
Egyesek miért vágynak Balira, mások pedig Írországba?
Az élet nagyszerűnek tűnhet az egyik helyen, és nehéznek egy másikon, ha kíváncsi vagy, most már ezen is tudunk dolgozni.`,
        image: "/services/Asztrokartográfia.jpg",
        orientation: "vertical"
    },
    {
        id: "human-design",
        title: "Human Design konzultáció",
        duration: "1 óra",
        description: "A Human Design az ősi és a modern tudományok szintézise, és az elmúlt években az emberi megértés értékes eszközének bizonyult.",
        longDescription: `A Human Design kombinálja az asztrológia, az indiai csakra rendszer, a kabala életfa és az I-Csing információt, segítségével felfedezhetjük önmagunkat, az aura típusunkat, a hozzá tartozó stratégiát, a belső autoritásunkat, hogyan tudunk helyes döntéseket hozni, amelyek végül könnyebb és teljesebb élethez vezetnek.

A Human Design a neutrínók működésén alapszik. A Neutrínók végtelen kis tömegű részecskék, s másodpercenként körülbelül 3 billió neutrínó és az általuk hordozott anyagi információ halad át a bolygó minden négyzetcentiméterén, köztünk az embereken is.

A Human Design a megkülönböztetés tudománya. Mindannyiunk számára megmutatja, hogy milyen egyedi, csak ránk jellemző tervezéssel és meghatározott céllal születtünk le a Földre.

A cél, hogy megismerjük a valódi önmagunkat, hogy az igazi Énünknek, és ne a hamis énünknek megfelelően tudjunk az életünkben döntéseket hozni.

Az egész világ energia. A Human Design egy olyan komplex rendszer, amely a születési dátumunk által megmutatja, hogy a Naprendszerünk különböző asztrológiai imprintjei következtében milyen az aura típusunk, milyenek az energetikai központjaink, milyen definiált csatornáink és kapuink vannak.

A tudatosság azt jelenti, hogy mekkora rész önmagadban az, amire engeded rálátni magadat, és mekkora az, amit pedig teljesen ösztönösen élsz. Amit nem látok, meg sem tudom változtatni!!!

A Human Design segítségével el tudunk kezdeni dolgozni a saját tudatosságunk tágításán.

Amikor valóban ráérzünk a saját Human Design energetikánkra, mélyebben megértjük saját belső küzdelmeinket és lehetőségeinket. Ez a tudatosság segít önmagunk mélyebb megismerésében, hogy gazdagabb, tartalmasabb és örömtelibb módon valósíthassuk meg a képességeinket. Az elemzéshez csak a születési időpontodra van szükség: én elemzek, te pedig befogadod az energiát, amelyek által elkezdenek nyílni a kapuk.

A Human Design elemzéseket 1 órás konzultációk (online is) keretében végzem.`,
        image: "/services/Human Design konzultáció.jpg",
        orientation: "vertical"
    }
];
