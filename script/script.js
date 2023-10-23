var globalPagination = '';
var globalMinerArr = [];
var globalFilteredMinerArr = [];
var globalQueryFilter = {
    name: '',
    power: [],
    cells: new Set(),
    bonus: [],
    stars: new Set(),
    levels: new Set(),
}

const globalMiners = `VI;Unreal Helipop;9787260;3.9;2;0;6399c3481c483a58f70e9a20
I;The Primordial;8400000;5;2;0;63ecc9a6547cfab9a233770e
IV;Epic Tamborim;8175930;5.87;2;0;63eba16eccd07b6d1a43f4a6
III;Rare Singularity;6890625;5.51;2;0;631f78418238ed283a232d1a
I;MINERVERSARY III;2700000;7.5;2;0;61bb6126698d2f88e80c7766
II;Uncommon RollerMillion;2625000;5.25;2;0;631f77d08238ed283a2327f9
II;Uncommon Crypto Combo;1777965;4.18;2;0;6437cd92e3a758465821783f
V;Legendary Disco-Roll;1724940;2.6;2;0;6399c3421c483a58f70e99cc
II;Uncommon Minerzilla;1505550;1.64;2;0;63c013518606868c5f3479da
I;Pepperoni 10k;1500000;10;2;0;61532146db5008102f9f77f1
V;Legendary Blaize;1235115;0.67;1;0;631f78cd8238ed283a23338d
I;Pencil-ReRoller;1136000;0;2;0;63930d86380ccf549d7f5c30
III;Rare Vinylla 78-RPM;1051260;1.66;2;0;6399c34e1c483a58f70e9a82
I;Queen of Spin;862100;0;2;0;6398e9e195b70ff678b1e565
III;Rare Anti-Phaze;861420;1.65;2;0;631f78528238ed283a232ddd
III;Rare El Monstro;757995;2.21;2;0;631f77a48238ed283a2325fe
III;Rare JPEG Collectooor;689115;1.1;2;0;631f7a048238ed283a2341ec
I;The Big Top;640000;0;2;0;631b5619a775e04d9a285463
I;Leviathan Clawster;618000;1;2;0;64424434547cfab9a2f5b450
I;Power Patriot;612000;3;2;0;6436d817547cfab9a2195c0c
II;Uncommon Wavestorm;551250;0.73;2;0;63d90be808311b97a96a9c4a
II;Uncommon Windwalk;551250;0.73;2;0;63d90bf008311b97a96a9cd6
I;Clover-n’-Over;530000;2.5;2;0;62324419a258d5816074aeb1
I;Ancient;500000;6;2;0;61532146db5008102f9f77e9
I;RollerFuture;500000;3;2;0;62447dd842a0cd1b7d33b139
IV;Epic The Savantron;488460;2.08;2;0;631f7b548238ed283a235176
I;Tamborim;452000;3;2;0;631b5619a775e04d9a285463
I;The Nemesis;450000;5;2;0;61532146db5008102f9f77ed
III;Rare Rust Runner;445200;1.66;2;0;64492b00a84fda7c28288f1b
II;Uncommon The Golden Ticket;426615;0.57;2;0;631f7b3c8238ed283a235058
I;Tape-Side-B;418000;0;2;0;63930d86380ccf549d7f5c2f
III;Rare O Mineiro;413490;1.66;2;0;631f7b228238ed283a234f20
I;The Christmas Eve;400000;5;2;0;61b9cce178d63d64cd626fc9
I;Perfection;400000;3;2;0;60c7444c65dce86c8661a2af
II;Uncommon Lifebuoy;393750;2.1;2;0;631f7a888238ed283a2347f7
IV;Epic Hasher’s Egg;390915;2.08;2;0;631f7ba48238ed283a235545
I;Steamwheedle;360000;3.5;2;0;611e2b04bf6b53744cd0c093
I;Paradox;350000;3;2;0;61532146db5008102f9f77e2
III;Rare Dragon's Breath;344610;1.65;2;0;631f79808238ed283a233bd4
I;Hand of the blockchain;331000;1.5;2;0;6436d7ba547cfab9a216c65b
IV;Epic Jungle King;304080;0.58;2;0;631f7af38238ed283a234ce4
I;Unicorn Dancer;303600;0;2;0;637413185247b3b892186e12
I;Merry-go-Round;300000;0;2;0;631b5619a775e04d9a285467
II;Uncommon El Monstro;288750;2.1;2;0;631f77a38238ed283a2325f1
III;Rare Crimson Bloom;275625;1.1;2;0;631f79968238ed283a233cd8
I;Polar Express;270000;4;2;0;61b9cce178d63d64cd626fce
II;Uncommon Jack-o'-Miner;262290;2.63;2;0;631f77988238ed283a23256f
I;Not-A-Loose-Cannon;262000;0;2;0;631b5617a775e04d9a28543f
I;Mascarado;252000;1.5;2;0;63eb62ea547cfab9a29dbe0d
I;Gandhi's Splittie;231600;0;2;0;63930d86380ccf549d7f5c2d
III;Rare Mission Control 321;227430;0;2;0;6437cd97e3a7584658217893
I;Blaze-Boosted;213600;0;2;0;6422f238f1cff2d95bf745a6
I;Starground;210000;3;2;0;611e2995bf6b53744cc8cf63
I;Earthbind;210000;0;2;0;63d90106547cfab9a2a43623
III;Rare Blobpat;206745;0.28;2;0;631f7aaa8238ed283a23498a
I;青火龙 (Azure Dragon);200000;3;2;0;61f9356a8b46ce688939024e
I;Air Mattress;200000;1;2;0;629622eb530f48a8e7a52283
I;The Minercracker;199500;0;2;0;6398e9e195b70ff678b1e566
I;DOGER 420;199000;2.5;2;0;607eedae65dce86c86e95319
II;Uncommon Survivor;196875;2.1;2;0;631f78668238ed283a232ed4
I;Night’s Shade;189000;0;2;0;62f3c15081b1c8e6920a8e04
I;M-Engine;188000;0;2;0;6422ee79b78c58eb24801eb7
I;Tape-Side-A;188000;0;2;0;63930d86380ccf549d7f5c2e
IV;Epic Candy Box;181125;0.29;1;0;631f79508238ed283a233998
I;Think-Tronik;180000;1;2;0;62444ef542a0cd1b7d7eaee4
I;Heartbeat;176000;0;2;0;63e61425547cfab9a27bcc78
III;Rare Octominer;172305;0.28;2;0;631f7aa58238ed283a234949
II;Uncommon Rust Runner;169575;0.55;2;0;64492affa84fda7c28288f0b
II;Uncommon Cerberus;165375;0;2;0;631f7b828238ed283a2353a5
I;8bubbled;165000;0;2;0;6231c273a258d58160cd1b51
I;The Golden Ticket;162500;0;2;0;631b5617a775e04d9a28543a
I;Santa Sleigh;160000;2.5;2;0;5fd9ea94101f34db22cee8da
II;Uncommon O Mineiro;157500;0.55;2;0;631f7b218238ed283a234f13
III;Rare Elven Magic;157185;1.66;2;0;631f7b938238ed283a235475
III;Rare White Christmas;157185;1.66;2;0;6399c3871c483a58f70e9dca
I;Clover Lover;155000;2.5;2;0;604f569e8402c6550b2b936b
I;Gear Grabber;152550;0;2;0;6422f238f1cff2d95bf745a5
I;Vinylla 78-RPM;152550;0;2;0;63930d86380ccf549d7f5c2c
III;Rare Shrumee;151620;0.55;1;0;631f78998238ed283a23312a
I;Apollo Miner;147000;0;2;0;6436d787547cfab9a2155dfa
I;Chupacabra;140000;1;1;0;5f9ae5284ac419fdd08d0584
I;Prisma;140000;1;2;0;60c743d665dce86c865f2251
III;Rare Chattanooga Choo;139545;1.66;2;0;63c013458606868c5f347916
III;Rare Khepri;137865;0.28;2;0;631f7a208238ed283a234331
I;TurtleCoin;20000;0.25;2;0;62a721b59b5a37db46be6dc2
II;Uncommon TurtleCoin;52500;0.26;2;0;631f7a9e8238ed283a2348fb
III;Rare TurtleCoin;137865;0.28;2;0;631f7a9f8238ed283a234908
V;Legendary TurtleCoin;950145;0.3;2;0;631f7aa18238ed283a234922
III;Rare Mictlan;137865;0.28;2;0;631f7a268238ed283a234372
II;Uncommon Acropolis;131250;0.53;2;0;631f79d28238ed283a233f96
II;Uncommon Uniminer-42;131250;0.53;2;0;631f79bc8238ed283a233e92
II;Uncommon Unity;131250;0.75;2;0;631f79b18238ed283a233e10
II;Uncommon Flamin-Go;131250;0.53;2;0;631f7a4b8238ed283a23452c
I;Minellite-130;130000;1;2;0;62444f3642a0cd1b7d7fe748
I;Granny’s Cake;125000;2;2;0;61b9cce178d63d64cd626fcb
I;Afterparty;125000;1;2;0;6296227e530f48a8e7a34e16
I;Anti-Phaze;125000;1.5;1;0;61532146db5008102f9f77e3
I;Anti–Phaze;125000;1.5;2;0;61532146db5008102f9f77e3
I;Photon;125000;1.5;2;0;61532146db5008102f9f77e4
II;Uncommon Blaze Dragon;123900;0.55;2;0;631f7b878238ed283a2353e6
IV;Epic Rollerminer 761;118020;0.58;1;0;631f77698238ed283a232340
I;Twin-Tire Driller;114000;0;2;0;6422f238f1cff2d95bf745a4
I;Shaolin Temple;112850;0;2;0;63ca6f1d547cfab9a2c51bc2
III;Rare ToxiFilter 99;110250;1.66;2;0;645249088953173292548e57
I;El Monstro;110000;2;2;0;5f9ae5584ac419fdd08d08cd
II;Uncommon Shifter;105000;1.05;2;0;631f78b98238ed283a2332a3
II;Uncommon Golden Corral;105000;0.26;2;0;631f7aaf8238ed283a2349be
II;Uncommon Ouroboros;105000;0.26;2;0;631f7a2a8238ed283a2343a6
I;Prescilla;100000;1.5;2;0;61532146db5008102f9f77ec
I;Nucleus;100000;1.5;2;0;61532146db5008102f9f77eb
I;Eviltopus;100000;1;2;0;62a71eee9b5a37db46af496e
II;Uncommon TYPE-Z;99750;1.05;2;0;631f78078238ed283a232a83
III;Rare Chupacabra;96495;1.1;1;0;631f779f8238ed283a2325bd
II;Uncommon Smokin' Hotrod;95340;0.55;2;0;6424128c10f9251eee27d755
I;Retro Night;95000;2;2;0;611e27d8bf6b53744cbf488c
I;Underwater;95000;2;2;0;611e222abf6b53744ca040a2
I;Sunset City;95000;2;2;0;611d2605bf6b53744c49e333
I;Thunderdome Tinkerer;92400;0;2;0;64230073b78c58eb24801ecb
II;Uncommon Armageddon;91875;0.79;2;0;631f78cf8238ed283a2333a7
I;RollerShow;90000;0;2;0;631b5617a775e04d9a285442
I;JBS-244;83100;1.5;2;1;61bb6126698d2f88e80c775b
I;Happy Easter;80000;1;2;0;6254115642a0cd1b7d9dd0d9
I;Richie's Castle;80000;0.5;2;0;62444e8a42a0cd1b7d7ccef3
I;Dancing Queen;78000;0.75;2;0;62d687e681b1c8e692c2de01
I;Dream Demolisher 3000;70000;2;2;0;5e2ee460041b386e78b97c2a
IV;Epic Mergedge;69510;0.52;2;0;631f7b6f8238ed283a2352bb
III;Rare Purple Snowflake;68985;0.25;2;0;631f79498238ed283a23394a
II;Uncommon Octominer;65625;0.25;2;0;631f7aa38238ed283a23493c
I;Sandy's Castle;65000;0.5;2;0;62962194530f48a8e79ef9b8
I;Ramesses II;65000;0.5;2;0;62444e4f42a0cd1b7d7bce01
I;Dawn-to-Dusk;64800;0;2;0;62f3c12e81b1c8e692098d7e
I;Rust Runner;64600;0;2;0;64491a76547cfab9a2c49655
I;The Krank;60000;1;2;0;61532146db5008102f9f77f3
I;O Mineiro;59970;0;2;0;631606ee5b26a667f754eafb
I;Elven Magic;22800;0;2;0;631b561aa775e04d9a285473
II;Uncommon Elven Magic;59850;0.55;2;0;631f7b928238ed283a235468
V;Legendary Elven Magic;1083285;2.6;2;0;631f7b958238ed283a23548f
II;Uncommon White Christmas;59850;0.55;2;0;6399c3861c483a58f70e9dbc
II;Uncommon Shrumee;57750;0.53;2;0;631f78988238ed283a23311d
II;Uncommon Chattanooga Choo;53130;0.55;2;0;63c013458606868c5f347908
II;Uncommon Fortune’s Charm;52500;0.53;1;0;631f79a68238ed283a233d8e
II;Uncommon Fortune’s Charm;52500;0.53;1;0;631f79a68238ed283a233d8e
II;Uncommon The Leyak;52500;0.26;2;0;631f7a148238ed283a2342a2
II;Uncommon Rollerfury B8;50715;1.05;2;0;631f77568238ed283a232261
I;Mine’n’Bass;50000;0.5;2;0;62962127530f48a8e79cf81f
I;King of Beasts ;50000;1;2;0;61f9356a8b46ce6889390251
I;Flamin-Go;50000;0.5;2;0;629615fa530f48a8e769b2dc
I;The Black Pearl;50000;0.5;2;0;62553dd842a0cd1b7dd592eb
I;Blaze Dragon;47200;0;2;0;631b561aa775e04d9a28547a
II;Uncommon Radio Gaga;40425;0.55;2;0;6399c3381c483a58f70e995c
I;Crimson Bloom;40000;1;2;0;61f9356a8b46ce6889390250
I;Velociminer;38750;0.1;2;0;63bffdd0d2e89bab14ff95b9
I;TYPE-Z;38000;1;2;0;610a9c19bf6b53744c8d085b
I;Disco-Roll;36300;0;2;0;63930d86380ccf549d7f5c29
I;Toxic Crusader;35400;0;2;0;6422ff13b78c58eb24801ec5
I;Armageddon;35000;0.75;2;0;618d1dda8f5ef2744b7d2380
I;Mycelium;35000;1;2;0;61532146db5008102f9f77ee
I;Helltaurus;34000;0;2;0;631b561aa775e04d9a285476
I;CP-106;33318;0.75;1;0;61bb6126698d2f88e80c775d
I;8blessed;33000;0;2;0;6231c296a258d58160cdf676
II;Uncommon Deepdiver;32865;0.26;2;0;631f7a938238ed283a234879
I;Serenity;30000;1;2;0;61532146db5008102f9f77e5
III;Rare Mergedge;26460;0.42;2;0;631f7b6e8238ed283a2352ae
I;Nuc;26000;0.5;1;0;61532146db5008102f9f77f8
I;Milly Mini;25000;0.5;1;0;60c9bc0965dce86c86c372fe
I;Petroglyph;25000;0.25;2;0;62444c9142a0cd1b7d749f2a
I;Sweet Stealer;23200;0;2;0;6398e9e195b70ff678b1e56b
I;Ghostly Pumper;22800;0;2;0;6422fdd5b78c58eb24801ec1
I;Merry Dancers;22400;0;2;0;6398e9e195b70ff678b1e56d
I;Fury Fueler;22400;0;2;0;6422fd40b78c58eb24801ebf
I;Death Proof Digger;22000;0;2;0;6422fb6cb78c58eb24801ebd
I;Shrumee;22000;0.5;2;0;61532146db5008102f9f77f4
I;Entminer;22000;0;2;0;631b5619a775e04d9a28546f
I;Hasher’s Egg;21600;0;1;0;631b5619a775e04d9a28546d
I;Crimson Spark;20000;0.5;1;0;61f9356a8b46ce6889390252
I;Wishing Bell;20000;0.5;1;0;61b9cce478d63d64cd626fe2
I;Rollerfury B8;19300;1;2;0;5a0b08b3d1d9ee5894f36f34
I;RPMiner;15400;0;2;0;6422f238f1cff2d95bf745a1
I;Subminerine;15000;0.25;2;0;62a721f19b5a37db46bf9780
I;Gold Digger;15000;1;1;0;5e2ee460041b386e78b97c29
I;JBS-200;13000;0.5;1;0;610a9ae2bf6b53744c860a30
I;The Thrill Rider;13000;0;2;0;631b5617a775e04d9a28543c
II;Uncommon Mergedge;10000;0.14;2;0;631f7b6d8238ed283a2352a1
I;Scarabey;8000;1;1;0;5e2ee460041b386e78b97c28
II;Uncommon Scarabey;21000;1.05;1;0;631f77938238ed283a23252e
III;Rare Scarabey;55125;1.1;1;0;631f77948238ed283a23253b
I;RollerMiner S5+;12000;0.75;1;1;61bb6125698d2f88e80c773f
I;RollerMiner S5+;4000;0.5;1;0;5a0b08a9d1d9ee5894f36f2f
II;Uncommon RollerMiner S5+;10500;0.53;1;0;631f77728238ed283a2323a8
III;Rare RollerMiner S5+;27615;0.55;1;0;631f77738238ed283a2323b5
IV;Epic RollerMiner S5+;72555;0.58;1;0;631f77748238ed283a2323c2
V;Legendary RollerMiner S5+;190470;0.61;1;0;631f77758238ed283a2323cf
VI;Unreal RollerMiner S5+;500010;0.64;1;0;631f77768238ed283a2323dc
I;Mergeded;3825;0;2;0;631b5619a775e04d9a28546b
I;RollerArc SX;3000;1.5;2;1;61bb6127698d2f88e80c7780
I;RollerMiner S7;1320;0.25;1;0;5a0b022dd1d9ee5894f36f2d
I;RollerMiner S4;1160;0.25;1;0;59f05bdda8fa9b726b0742ca
I;RollerArc S1;450;0.15;1;1;61b9cce478d63d64cd626fe5
I;RollerArc S1;150;0.1;1;0;61b9cce478d63d64cd626fe5
II;Uncommon RollerArc S1;420;0.11;1;0;631f79648238ed283a233a82
III;Rare RollerArc S1;1155;0.11;1;0;631f79658238ed283a233a8f
IV;Epic RollerArc S1;3045;0.12;1;0;631f79668238ed283a233a9c
V;Legendary RollerArc S1;8085;0.12;1;0;631f79678238ed283a233aa9
I;RollerArc SX;1000;1;2;0;61b9cce478d63d64cd626fe4
II;Uncommon Think-Tronik;472;1.05;2;0;631f79e78238ed283a23409a
III;Rare Raver Crab;315;0.01;1;0;631f7a528238ed283a23457a
I;Turkey Aid 2023;100;0;2;0;63e4fe2b547cfab9a240e681
I;Power Symbol;100;0;1;0;644bb225648294b4642f368d
I;Doggie-Woogie;10;0;1;0;63930d86380ccf549d7f5c27
I;Demon Speeding;10;0;1;0;6422f238f1cff2d95bf745a0
I;Leap, The Frogo;10;0;1;0;631b5617a775e04d9a28543b
I;Raver Crab;1;0.01;1;0;629616e8530f48a8e76de5e4
I;Smelt Smith;21000;0;2;0;645b8a87eccd3c43207474ce
II;Uncommon Smelt Smith;55125;0.25;2;0;645b981d7f78e084daf911d1
III;Rare Smelt Smith;144795;1;2;0;645b981e7f78e084daf911e3
I;BioGauge 67;43800;0;2;0;645230f07dd1aacd1ea9bd01
I;RadExFiltration 90;107500;0;2;0;645231427dd1aacd1ea9bd02
II;Uncommon RadExFiltration 90;282240;0.55;2;0;645249108953173292548ed5
II;Uncommon BioGauge 67;114975;0.55;2;0;645249108953173292548ed5
I;Milly Mini;75000;0.75;1;1;61bb6127698d2f88e80c777b
I;It'sOkayer;282000;1;2;0;645b8a87eccd3c43207474d1
II;Uncommon Hand of the Blockchain;868875;2.22;2;0;6437cd9fe3a7584658217911
I;The Creeper;90000;1.5;2;0;61532146db5008102f9f77ea
I;Aurum;200000;2;2;0;60c7441465dce86c86607522
III;Rare Aurum;1378125;2.21;2;0;631f77dc8238ed283a232888
I;Fire Forger;149000;0.5;2;0;645b8a87eccd3c43207474d0
I;ToxiFilter 99;16000;0;2;0;645230ae7dd1aacd1ea9bd00
II;Uncommon Fire Forger;391125;1.02;2;0;645b98267f78e084daf91261
I;JPEG Collectooor;100000;1;2;0;6231c3cda258d58160d53607
II;Uncommon JPEG Collectooor;262500;1.05;2;0;631f7a038238ed283a2341df
II;Uncommon DOGER 420;522375;2.63;2;0;631f77ba8238ed283a2326f5
II;Uncommon Tu Nian;890295;1.18;2;0;63ca8f65a882e7a24995cadd
I;The Savantron;27000;0;2;0;631b5617a775e04d9a28543e
I;Mergedge Mk. I;4860;0;1;0;646ddba0260e7d19c91846b9
I;Rebirth Rover;44000;0;2;0;646ca2f20134dd538d6797eb
II;Uncommon RollerMiner G1;9240;0.08;1;0;646de73e09672fd5f06e2275
I;TAPEBOY;12200;0.5;1;0;610a9a96bf6b53744c845ba0
II;Uncommon TAPEBOY;32025;0.53;1;0;631f77eb8238ed283a23293e
III;Rare TAPEBOY;84105;0.55;1;0;631f77ed8238ed283a23294b
V;Legendary TAPEBOY;579705;0.61;1;0;631f77ef8238ed283a232965
I;TAPEBOY;36600;0.75;1;1;61bb6126698d2f88e80c7760
II;Uncommon Roller Industries Co.;315000;1.05;2;0;631f79e28238ed283a234059
I;Roller Industries Co.;120000;1;2;0;62444ec242a0cd1b7d7dc2b0
I;Sparkling Light;10000;0.25;1;0;61b9cce478d63d64cd626fe1
I;Paradise Pier;20020;0;2;0;64a6cef0af7caabb3d11521a
II;Uncommon Paradise Pier;52605;0.55;2;0;64a80c1d3fd5253fb80f9e22
III;Rare Paradise Pier;138180;1.66;2;0;64a80c1e3fd5253fb80f9e30
I;Gas Town Bitminer;48000;0;2;0;6422ff81b78c58eb24801ec7
II;Uncommon Gas Town Bitminer;126000;0.55;2;0;642412c510f9251eee27dae3
II;Uncommon Dawn-To-Dusk;170100;0.55;2;0;631f7b118238ed283a234e50
III;Rare Dawn-To-Dusk;446565;1.66;2;0;631f7b128238ed283a234e5d
I;Inclusion Miner;71400;0;2;0;64a69780af7caabb3d1151fb
II;Uncommon Inclusion Miner;187425;0.55;2;0;64a6f8fb515099752411d80c
III;Rare Inclusion Miner;492030;1.66;2;0;64a6f8fc515099752411d81a
IV;Epic Inclusion Miner;1291605;2.08;2;0;64a6f8fd515099752411d828
I;XLZ-01;22000;0.5;1;0;618d1dda8f5ef2744b7d2386
II;Uncommon XLZ-01;57750;0.53;1;0;631f78fb8238ed283a2335af
III;Rare XLZ-01;151620;0.55;1;0;631f78fc8238ed283a2335bc
I;Chaise Longue;25000;0.25;2;0;62961778530f48a8e77085e8
II;Uncommon Chaise Longue;65625;0.26;2;0;631f7a568238ed283a2345ae
III;Rare Chaise Longue;172305;0.28;2;0;631f7a578238ed283a2345bb
I;Your Friend Turing;42000;0;2;0;6509905a48ee2c2ada95faf9
I;Target Flooff;56000;0;1;0;631b5617a775e04d9a285440
II;Uncommon Target Flooff;147000;0.55;1;0;631f7b4c8238ed283a23511b
III;Rare Target Flooff;385875;1.66;1;0;631f7b4d8238ed283a235128
I;Country Loading...;50500;0;2;0;64a6973baf7caabb3d1151fa
II;Uncommon Country Loading...;132615;0.55;2;0;64a6f8f7515099752411d7c6
III;Rare Country Loading...;348180;1.66;2;0;64a6f8f8515099752411d7d4
I;Katsuhito;10;0;1;0;64a69674af7caabb3d1151f8
I;The Protector;36000;0;2;0;6509902f48ee2c2ada95fae7
III;Rare The Savantron;186060;1.66;2;0;631f7b538238ed283a235169
II;Uncommon The Savantron;70875;0.55;2;0;631f7b528238ed283a23515c
I;Star Symbol;100;0;1;0;644bb270648294b4642f368e
I;Fang Symbol;100;0;1;0;644bb5de648294b4642f368f
I;Whatta Duck;10;0;1;0;650aa70448ee2c2ada96176c
I;Vegvisir;24000;0;2;0;65098f8948ee2c2ada95fac3e
I;Missionaries;40000;0;2;0;64a696afaf7caabb3d1151f9
II;Uncommon Missionaries;105000;0.55;2;0;64a6f8f3515099752411d77e
III;Rare Missionaries;275625;1.66;2;0;64a6f8f4515099752411d78e
IV;Epic Missionaries;723555;2.08;2;0;64a6f8f4515099752411d79c
II;Uncommon Leap, The Frogo;105;0.14;1;0;631f7b268238ed283a234f54
III;Rare Leap, The Frogo;315;0.42;1;0;631f7b288238ed283a234f61
IV;Epic Leap, The Frogo;840;0.52;1;0;631f7b298238ed283a234f6e
VI;Unreal Leap, The Frogo;5880;0.98;1;0;631f7b2b8238ed283a234f88
I;RollerMiner G1;3500;0;1;0;646ddb26260e7d19c91846b8
V;Legendary RollerMiner G1;167370;0.65;1;0;646de74009672fd5f06e22a1
IV;Epic RollerMiner G1;63735;0.41;1;0;646de73f09672fd5f06e2293
III;Rare RollerMiner G1;24255;0.2;1;0;646de73f09672fd5f06e2285
I;Mission Control 321;33000;0;2;0;6436d756547cfab9a213fc9f
I;Nuclearburg;35200;0;2;0;6463a05715a6792f949b49e7
I;Bit by Beat;32400;0;2;0;65098ffe48ee2c2ada95fad5
I;Jungle King;16800;0.5;2;0;62d687ba81b1c8e692c19e43
I;Snowster-9001;35400;0;2;0;6398e9e195b70ff678b1e56a
I;Sweets Stealer;23200;0;2;0;6398e9e195b70ff678b1e56b
I;Gingerbread House;22000;0;2;0;6398e9e195b70ff678b1e56e
II;Uncommon Doggie-Woogie;105;0.14;1;0;6399c3331c483a58f70e9914`

class Pagination {
    constructor(currentPageNumber, itemPerPage, numberOfPages) {
        this.currentPageNumber = currentPageNumber;
        this.itemPerPage = itemPerPage;
        this.numberOfPages = numberOfPages;
        this.paginationHtmlTemplate = `
				<input class="pgnt-btn" type="button" id="firstPageButton" value="<<">
				<input class="pgnt-btn" type="button" id="previousPageButton" value="<"> 
				<span class="pageNumber" id="pageNumber">1 / ` + this.numberOfPages + `</span>            
				<input class="pgnt-btn" type="button" id="nextPageButton" value=">">
				<input class="pgnt-btn" type="button" id="lastPageButton" value=">>">`
    }

    // Moving the pagination state to the next page
    nextPage() {
        this.currentPageNumber =
            this.currentPageNumber++ < this.numberOfPages ?
            this.currentPageNumber++ :
            this.numberOfPages;
    }

    // Moving the pagination state to the last page
    lastPage() {
        this.currentPageNumber = this.numberOfPages;
    }

    // Moving the pagination state to the first page
    firstPage() {
        this.currentPageNumber = 1;
    }

    // Moving the pagination state to the preivous page
    previousPage() {
        this.currentPageNumber =
            this.currentPageNumber-- > 1 ?
            this.currentPageNumber-- :
            this.currentPageNumber = 1;
    }

    // Updating the value of the page number in the DOM
    updateHtmlPageNumber(numberOfRow) {
        this.numberOfPages = Math.ceil(numberOfRow / this.itemPerPage)
        if (this.numberOfPages > 1) {
            document.getElementById('pagination').style.visibility = 'visible'
            document.getElementById('pageNumber').innerHTML = '';
            document.getElementById('pageNumber').innerHTML = this.currentPageNumber + " / " + this.numberOfPages;
        } else {
            document.getElementById('pagination').style.visibility = 'hidden'
        }
    }

    // Getting the index of the first and last element of the page from the data set.
    getCurrentPageIndexes(numberOfRow) {

        if (numberOfRow == 0) {
            var endIndex = 0;
            var startIndex = 0;
        } else {
            var endIndex = this.currentPageNumber * this.itemPerPage;
            var startIndex = (this.currentPageNumber - 1) * this.itemPerPage;

            // If the current page is the last one
            if (this.currentPageNumber == this.numberOfPages) {
                endIndex = numberOfRow % this.itemPerPage == 0 ?
                    endIndex :
                    (startIndex + (numberOfRow % this.itemPerPage));
            }
        }
        return {
            "startIndex": startIndex,
            "endIndex": endIndex
        }
    }
}

function triggerSelect(selectId) {
    slct = document.getElementById(selectId);
    slct.trigger('onclick')
}

function show(val, cls) {
    const divId = '#' + cls;
    document.querySelector(divId).value = val;
}

// Building and rendering the html table of miners
function buildTable(m) {

    // Getting miners table
    var table = document.getElementById("minerTable")
    
    if (m.length == 0) {
        table.style.display = "none";
    } else {
        table.style.display = "block"
        // Removing table rows
        var trs = table.getElementsByClassName("minerrow")
        while (trs.length > 0) trs[0].parentNode.removeChild(trs[0]);

        // Getting table body
        var tableBody = table.tBodies[0];

        for (var i = 0; i < m.length; i++) {

            // Creating new tr element
            var tr = document.createElement('TR');
            tr.classList.add('minerrow');

            for (var j = 0; j < 7; j++) {

                // Creating new td element
                var td = document.createElement('TD');
                if (j == 6) {                    
                    imgUrl = "https://static.rollercoin.com/static/img/market/miners/"
                    imgUrl = imgUrl.concat(m[i][j])
                    imgUrl = imgUrl.concat('.gif?v=1.0.3');
                    img = document.createElement('IMG');
                    img.src = imgUrl;
                    img.width = 63;
                    img.height = 50;
                    td.appendChild(img);
                } else if (j == 2) {
                    td.appendChild(document.createTextNode(thousanize(m[i][j])));
                } else {
                    td.appendChild(document.createTextNode(m[i][j]));
                }
                tr.appendChild(td);
                tableBody.appendChild(tr);
            }
        }
        table.appendChild(tableBody);
    }
}

function main() {
    let pgm = [];
    let arr = globalMiners.split('\n');
    for (var i = 0; i < arr.length; i++) {
        row = arr[i].split(';');
        globalMinerArr.push(row);
    }

    // Initializing global filtered miners array with initial miner array
    globalFilteredMinerArr = globalMinerArr;

    // Initializing pagination object
    globalPagination = new Pagination(1, 6, Math.ceil(parseFloat(globalMinerArr.length / 6)));

    // Getting subset of miners to display according to the current page
    let indexes = globalPagination.getCurrentPageIndexes();
    for (let i = parseInt(indexes.startIndex); i < parseInt(indexes.endIndex); i++) {
        pgm.push(globalMinerArr[i]);
    }

    // Building html miners table with paginated data
    buildTable(pgm);

    // Adding onclick events
    let dropdown = document.getElementsByClassName('dropdown');
    for (let i = 0; i < dropdown.length; i++) {
        dropdown[i].onclick = function() {
            dropdown[i].classList.toggle('active');
        }
    }

    // Setting page number info in the html section of pagination
    globalPagination.updateHtmlPageNumber(globalMinerArr.length);

    // Setting number of miners listed 
    document.getElementById('miner-count-amount').textContent = globalMinerArr.length
}

// Loading the paginated table content according to 
// page number
function loadPage(numberOfRow, action) {
    let pgm = [];
    switch (action) {
        case 'next':
            globalPagination.nextPage();
            break;
        case 'previous':
            globalPagination.previousPage();
            break;
        case 'last':
            globalPagination.lastPage();
            break;
        case 'first':
            globalPagination.firstPage();
            break;
        default:
            console.log('forbidden action.');
    }

    // Getting subset of miners to display according to the current page
    let indexes = globalPagination.getCurrentPageIndexes(numberOfRow);
    for (let i = parseInt(indexes.startIndex); i < parseInt(indexes.endIndex); i++) {
        pgm.push(globalFilteredMinerArr[i]);
    }

    // Building html miners table with paginated data
    buildTable(pgm);

    // Updating page number in the pagination section
    globalPagination.updateHtmlPageNumber(numberOfRow);
}

function paginate(m, numberOfItemPerPage) {
    let pgm = [];
    let numberOfRow = m.length;
    globalPagination.itemPerPage = numberOfItemPerPage;
    globalPagination.currentPageNumber = 1;
    globalPagination.numberOfPages = Math.ceil(parseFloat(numberOfRow / numberOfItemPerPage));
    loadPage(numberOfRow, 'first');

    // Getting subset of miners to display according to the current page
    let indexes = globalPagination.getCurrentPageIndexes(numberOfRow);
    for (let i = parseInt(indexes.startIndex); i < parseInt(indexes.endIndex); i++) {
        pgm.push(m[i]);
    }

    // Building html miners table with paginated data
    buildTable(pgm);
}

// Cleaning all filter and rebuild table of miners in the default state.
function clearFilters() {
    // Re-initializing filtered miners with all miners
    globalFilteredMinerArr = globalMinerArr;

    // Removing number inputs controls value
    let input = document.getElementsByClassName('input');
    for (let i = 0; i < input.length; i++) {
        input[i].value = "";
    }

    // Setting all checkboxes into "unchecked" state
    let checkboxes = document.getElementsByClassName('checkbox');
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }

    paginate(globalMinerArr, 6);
    globalQueryFilter.name = "";
    globalQueryFilter.power.length = 0;
    globalQueryFilter.bonus.length = 0;
    globalQueryFilter.cells.forEach(e => globalQueryFilter.cells.delete(e));
    globalQueryFilter.levels.forEach(e => globalQueryFilter.levels.delete(e));
    globalQueryFilter.stars.forEach(e => globalQueryFilter.stars.delete(e));
}

function applyFilters() {
    let m = globalMinerArr;

    // filtering on name
    if (globalQueryFilter.name != '') {
        m = m.filter(e => e[1].toUpperCase().indexOf(globalQueryFilter.name) > -1);
    }

    // filtering on cells
    if (globalQueryFilter.cells.size != 0) {
        m = m.filter(e => globalQueryFilter.cells.has(e[4]));
    }

    // filtering on stars
    if (globalQueryFilter.stars.size != 0) {
        m = m.filter(e => globalQueryFilter.stars.has(e[5]));
    }
    // filtering on levels
    if (globalQueryFilter.levels.size != 0) {
        m = m.filter(e => globalQueryFilter.levels.has(e[0]));
    }

    // filtering on power
    if (globalQueryFilter.power.length != 0) {
        m = m.filter(e => globalQueryFilter.power[0] <= e[2] && globalQueryFilter.power[1] >= e[2]);
    }

    // filtering on bonus
    if (globalQueryFilter.bonus.length) {
        m = m.filter(e => globalQueryFilter.bonus[0] <= e[3] && globalQueryFilter.bonus[1] >= e[3]);
    }

    globalFilteredMinerArr = m;
    return m;
}

// Sorts an array of 2 dimensions.
// The sorting order is given throu the "order" parameter.
// This parameter can have only 2 values : asc for ascending et desc for descending.
// if the value of ordering is different from what is expected,
// The array will not be filtered and leaev as it is.
// The array is sorted based on a specific column.
// The index of the column is given as parameter (index).
function sort2DimensionArray(arr, order, index) {
    let sorted = arr;
    if (order == "asc") {
        sorted.sort((a, b) => parseFloat(a[index]) - parseFloat(b[index]));
    } else if (order == "desc") {
        sorted.sort((a, b) => parseFloat(b[index]) - parseFloat(a[index]));
    }
    return sorted;
}

function sortMiners(arr, order, position) {
    let sorted = sort2DimensionArray(arr, order, position)
    itmPrPg = document.getElementById('txtBxPgntn').value;
    itmPrPg = itmPrPg == "" ? 6 : itmPrPg;
    paginate(sorted, itmPrPg);
}

function filterOnColumns(key) {

    // Getting number of items per page. 
    let itmPrPg = document.getElementById('txtBxPgntn').value;
    itmPrPg = itmPrPg == "" ? 6 : parseInt(itmPrPg);

    // Getting order of miners
    let order = document.getElementById('txtBxMrLss').value;
    order = order == "" ? "Power: More - Less" : order;

    // Applying filters
    switch (key) {
        case 'name':
            let txtInput = document.getElementById("minerSearchInput").value.toUpperCase();
            globalQueryFilter.name = txtInput;
            paginate(applyFilters(), itmPrPg);
            break;
        case 'power':
            var filterLow = document.getElementById('powerRangeLow').value;
            var filterHigh = document.getElementById('powerRangeHigh').value;
            globalQueryFilter.power = [parseInt(filterLow), parseInt(filterHigh)];
            paginate(applyFilters(), itmPrPg);
            break;
        case 'cells':
            let clls = document.getElementsByClassName('checkboxCell');
            let cells = new Set();
            for (var i = 0; i < clls.length; i++) {
                if (clls[i].checked) {
                    cells.add(clls[i].id.substring(0, 1));
                } else {
                    cells.delete(clls[i].id.substring(0, 1));
                }
            }
            globalQueryFilter.cells = cells;
            paginate(applyFilters(), itmPrPg);
            break;
        case 'bonus':
            var filterLow = document.getElementById('bonusRangeLow').value;
            var filterHigh = document.getElementById('bonusRangeHigh').value;
            globalQueryFilter.bonus = [parseFloat(filterLow), parseFloat(filterHigh)];
            paginate(applyFilters(), itmPrPg);
            break;
        case 'stars':
            let strs = document.getElementsByClassName('checkboxStar');
            let stars = new Set();
            for (var i = 0; i < strs.length; i++) {
                if (strs[i].checked) {
                    stars.add(strs[i].id.substring(0, 1));
                } else {
                    stars.delete(strs[i].id.substring(0, 1));
                }
            }
            globalQueryFilter.stars = stars;
            paginate(applyFilters(), itmPrPg);
            break;
        case 'levels':
            let levels = new Set();
            let lvls = document.getElementsByClassName('level');
            for (var i = 0; i < lvls.length; i++) {
                if (lvls[i].checked) {
                    levels.add(lvls[i].id);
                } else {
                    levels.delete(lvls[i].id);
                }
            }
            globalQueryFilter.levels = levels;
            paginate(applyFilters(), itmPrPg);
            break;
        default:
            console.log('default');
            break;
    }

    // Applying ordering on miners after filtering
    switch (order) {
        case 'Power: More - Less':
            sortMiners(globalFilteredMinerArr, 'desc', 2);
            break;
        case 'Power: Less - More':
            sortMiners(globalFilteredMinerArr, 'asc', 2);
            break;
        case 'Bonus: More - Less':
            sortMiners(globalFilteredMinerArr, 'desc', 3);
            break;
        case 'Bonus: Less - More':
            sortMiners(globalFilteredMinerArr, 'asc', 3);
            break;
        default:
            console.log('default');
            break;
    }
}

function thousanize(number) {
    str = number.split('').reverse();
    fnl = [];
    for (var i = 0; i < str.length; i++) {

        if (i % 3 == 0) {
            fnl.push(' ');
        }
        fnl.push(str[i])
    }
    return fnl.reverse().join('');
}
main();
