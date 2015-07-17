// here we put the paths to all the libraries and framework we will use
require.config({
  paths: {
    jquery: '../lib/zepto/zepto',
    underscore: '../lib/underscore/underscore',
    backbone: "../lib/backbone/backbone",
    text: '../lib/require/text',
    async: '../lib/require/async',
    handlebars: '../lib/handlebars/handlebars',
    templates: '../templates',
    spin: '../lib/spin/spin.min',
    preloader: '../lib/preloader/pre-loader',
    utils: '../lib/utils/utils',
	slideout:'../lib/slideout/dist/slideout'
	},
  
  shim: {
    'jquery': {
      exports: '$'
    },
	
    },
    'underscore': {
      exports: '_'
    },
    'handlebars': {
      exports: 'Handlebars'
    }
   

});

// We launch the App
require(['backbone', 'utils'], function(Backbone, Utils) {
  require(['preloader', 'router'], function(PreLoader, AppRouter) {

    document.addEventListener("deviceready", run, false);

    function run() {

      // Here we precompile ALL the templates so that the app will be quickier when switching views
      // see utils.js
      Utils.loadTemplates().once("templatesLoaded", function() {

      var images = []; // here the developer can add the paths to the images that he would like to be preloaded

      if (images.length) {
          new PreLoader(images, {
            onComplete: startRouter
          });
        } else {
          // start the router directly if there are no images to be preloaded
          startRouter();
        }

        function startRouter() {
         //create database
        var db = window.openDatabase("Database", "1.0", "Database media", 200000);
        db.transaction(populateDB, errorCB, successCB);
    
		// Populate the database 
    function populateDB(tx) {
        /*---------- FILM TABLE ---------- */
         tx.executeSql('DROP TABLE IF EXISTS FILM');
         tx.executeSql('CREATE TABLE IF NOT EXISTS FILM (title unique, txt, genre, year, img)');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("Fast and furious 7", "Dominic and his crew thought they left the criminal mercenary life behind. They defeated an international terrorist named Owen Shaw and went their seperate ways. But now, Shaw\'s brother, Deckard Shaw is out killing the crew one by one for revenge. ", "action", "2014", "http://ia.media-imdb.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_SX640_SY720_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("Wanted", "A young man finds out his long lost father is an assassin. When his father is murdered, the son is recruited into his father\'s old organization and trained by a man named Sloan to follow in his dad\'s footsteps.", "action", "2008", "http://ia.media-imdb.com/images/M/MV5BMTQwNDM2MTMwMl5BMl5BanBnXkFtZTgwMjE4NjQxMTE@._V1_SX214_AL_.jpg")');
		 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("Dumb and dumber", "The cross-country adventures of two good-hearted but incredibly stupid friends.", "comedy", "1994", "http://ia.media-imdb.com/images/M/MV5BMTIzNDI5MTc0M15BMl5BanBnXkFtZTYwMjM5NDU5._V1_SX640_SY720_.jpg")');
		 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("I robot", "In 2035 a technophobic cop investigates a crime that may have been perpetrated by a robot, which leads to a larger threat to humanity.", "sci-fi", "2004", "http://ia.media-imdb.com/images/M/MV5BMTQwNzI5NTQ0OF5BMl5BanBnXkFtZTYwMTI3Mjk2._V1_SX214_AL_.jpg")');
		 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("I am legend", "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.", "sci-fi", "2007", "http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX640_SY720_.jpg")'); //5
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("Titanic", "A seventeen-year-old aristocrat falls in love with a kind, but poor artist aboard the luxurious, ill-fated R.M.S. Titanic", "romantic", "1997", "http://ia.media-imdb.com/images/M/MV5BMjExNzM0NDM0N15BMl5BanBnXkFtZTcwMzkxOTUwNw@@._V1_SY317_CR0,0,214,317_AL_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("The Lord of the Rings: The Fellowship of the Ring", "A meek hobbit of the Shire and eight companions set out on a journey to Mount Doom to destroy the One Ring and the dark lord Sauron.", fantasy", "2001", "http://ia.media-imdb.com/images/M/MV5BNTEyMjAwMDU1OV5BMl5BanBnXkFtZTcwNDQyNTkxMw@@._V1_SY317_CR1,0,214,317_AL_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("The Exorcist", "When a teenage girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her daughter.", "horror", "1973", "http://ia.media-imdb.com/images/M/MV5BNzYwMDA0NTA3M15BMl5BanBnXkFtZTcwMDcwNDY3Mg@@._V1_SY317_CR0,0,214,317_AL_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("Ghost", "After being killed during a botched mugging, a man\'s love for his partner enables him to remain on earth as a ghost.", "romantic", "1990", "http://ia.media-imdb.com/images/M/MV5BMTU0NzQzODUzNl5BMl5BanBnXkFtZTgwMjc5NTYxMTE@._V1_SY317_CR0,0,214,317_AL_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("The Hangover", "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.", "comedy", "2009", "http://ia.media-imdb.com/images/M/MV5BMTU1MDA1MTYwMF5BMl5BanBnXkFtZTcwMDcxMzA1Mg@@._V1_SX214_AL_.jpg")'); //10
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("2001: A Space Odyssey", "Humanity finds a mysterious, obviously artificial, object buried beneath the Lunar surface and, with the intelligent computer H.A.L. 9000, sets off on a quest.", "sci-fi", "1968", "http://ia.media-imdb.com/images/M/MV5BNDYyMDgxNDQ5Nl5BMl5BanBnXkFtZTcwMjc1ODg3OA@@._V1_SY317_CR12,0,214,317_AL_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("Saw", "Two men awaken in the secure lair of a killer who forces them to play a deadly game that will determine life or death.", "horror", "2004", "http://ia.media-imdb.com/images/M/MV5BMjAyNTcxNzYwMV5BMl5BanBnXkFtZTgwMzQzNzM5MjE@._V1_SX214_AL_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("Harry Potter and the Prisoner of Azkaban", "It\'s Harry\'s third year at Hogwarts; not only does he have a new \"Defense Against the Dark Arts\" teacher, but there is also trouble brewing. Convicted murderer Sirius Black has escaped the Wizards\' Prison and is coming after Harry.", "fantasy", "2004", "http://ia.media-imdb.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SY317_CR0,0,214,317_AL_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("The Devil Wears Prada", "A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine.", "comedy", "2006", "http://ia.media-imdb.com/images/M/MV5BMTMyNjk4Njc3NV5BMl5BanBnXkFtZTcwNDkyMTEzMw@@._V1_SX214_AL_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("Pulp Fiction", "The lives of two mob hit men, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", "drama", "1994", "http://ia.media-imdb.com/images/M/MV5BMjE0ODk2NjczOV5BMl5BanBnXkFtZTYwNDQ0NDg4._V1_SY317_CR4,0,214,317_AL_.jpg")'); //15
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("The Green Mile", "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.", "drama", "1999", "http://ia.media-imdb.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SY317_CR0,0,214,317_AL_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("Le fabuleux destin d\'Amélie Poulain", "Amelie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.", "romantic", "2001", "http://ia.media-imdb.com/images/M/MV5BMTYzNjkxMTczOF5BMl5BanBnXkFtZTgwODg5NDc2MjE@._V1_SY317_CR0,0,214,317_AL_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("Forrest Gump", "Forrest Gump, while not intelligent, has accidentally been present at many historic moments, but his true love, Jenny Curran, eludes him.", "drama", "1994", "http://ia.media-imdb.com/images/M/MV5BMTQwMTA5MzI1MF5BMl5BanBnXkFtZTcwMzY5Mzg3OA@@._V1_SX214_AL_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("The Bourne Identity", "A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins and regain his memory.", "action", "2002, "http://ia.media-imdb.com/images/M/MV5BMTQ3MDA4MDIyN15BMl5BanBnXkFtZTYwOTg0Njk4._V1_SX214_AL_.jpg")');
                 tx.executeSql('INSERT INTO FILM (title , txt, genre, year, img) VALUES ("The Chronicles of Narnia: The Voyage of the Dawn Treader", "Lucy and Edmund Pevensie return to Narnia with their cousin Eustace where they meet up with Prince Caspian for a trip across the sea aboard the royal ship The Dawn Treader.", "fantasy", "2010", "http://ia.media-imdb.com/images/M/MV5BNjQ2MDQzMzExNl5BMl5BanBnXkFtZTcwMTYzOTc5Mw@@._V1_SX214_AL_.jpg")'); //20
         /*---------- BAND TABLE ---------- */        
         tx.executeSql('DROP TABLE IF EXISTS BAND');
         tx.executeSql('CREATE TABLE IF NOT EXISTS BAND (title unique, txt, genre, year, img)');
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("Coldplay", "Passionate, heart-rending British pop group whose sweet melodies and swooning lyrics made them one of the biggest bands of the new millennium. ", "alternative rock", "1997", "hhttp://cps-static.rovicorp.com/3/JPG_400/MI0003/273/MI0003273645.jpg")');
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("Muse", "Respected British alternative band that combined progressive rock, glam, electronica, and Radiohead-influenced experimentation.", "alternative pop", "1997", "http://cps-static.rovicorp.com/3/JPG_400/MI0003/776/MI0003776372.jpg")');
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("Metallica", "The most consistently innovative metal band of the 1980s and \'90s, reinvigorating the music with a fast, fierce, and surprisingly melodic sound.", "metal", "1981", "http://cps-static.rovicorp.com/3/JPG_400/MI0003/776/MI0003776258.jpg")');
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("System of a Down", "Chart-topping but challenging alt-metal band that incorporates programmed beats and subtle Eastern European influences.", "alternative metal", "1995", "http://cps-static.rovicorp.com/3/JPG_400/MI0003/534/MI0003534134.jpg")');
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("Daft Punk", "Gallic duo who disguise their love of \'70s disco and album rock in the trappings of house music, complete with robot visages and processed vocals. ", "electronic", "1992", "http://cps-static.rovicorp.com/3/JPG_400/MI0003/776/MI0003776245.jpg")'); //5
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("Frédéric Chopin", "One of the most significant and individual composers of the Romantic age. ", "classical", "1810", "http://cps-static.rovicorp.com/3/JPG_400/MI0002/864/MI0002864430.jpg")');
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("Johnny Cash", "Part rockabilly rebel, part campfire storyteller, part outlaw in black, his hearty baritone has remained the essence of country music. ", "country", "1950", "http://cps-static.rovicorp.com/3/JPG_400/MI0001/413/MI0001413370.jpg")');
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("Louis Armstrong", "The most important and influential musician in jazz history, and one of the leading singers and entertainers from the 1920s through the \'50s.", "jazz", "1920", "http://cps-static.rovicorp.com/3/JPG_400/MI0001/348/MI0001348918.jpg")');
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("Eminem", "The best-selling white rapper of all time, alternately comic and confrontational, both hugely talented and highly controversial.", "rap", "1990", "http://cps-static.rovicorp.com/3/JPG_400/MI0003/667/MI0003667042.jpg")');
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("Snoop Dogg", "Gangsta rap\'s signature stylist and superstar who boasts a distinctive, melodic drawl and impressive career longevity.", "rap", "1990", "http://cps-static.rovicorp.com/3/JPG_400/MI0003/277/MI0003277278.jpg")'); //10
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("Pink Floyd", "One of the most predominant and celebrated rock bands of all time, prog- and space-rock legends, known for superlative musicianship.", "progressive rock", "1965", "http://cps-static.rovicorp.com/3/JPG_400/MI0001/428/MI0001428642.jpg")');
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("The Beatles, "The most popular and influential rock act of all time, a band that blazed several new trails for popular music.", "beat rock", "1957", "http://cps-static.rovicorp.com/3/JPG_400/MI0003/361/MI0003361571.jpg")');
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("Katy Perry", "Pop superstar who succeeded by combining cheeky, club-ready dance with the commercial pop/rock of Avril Lavigne and Alanis Morrissette.", "contemporary pop", "2000", "http://cps-static.rovicorp.com/3/JPG_400/MI0003/611/MI0003611183.jpg")');
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("Michael Jackson", "The biggest pop star of the \'80s, and one of the most popular artists of all time, with a brilliant, soulful voice and breathtaking dance moves. ", "pop", "1964", "http://cps-static.rovicorp.com/3/JPG_400/MI0003/641/MI0003641477.jpg")');
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("Bob Marley", "The reggae artist with the greatest impact in history, who introduced Jamaican music to the world and changed the face of global pop music.", "reggae", "1960", "http://cps-static.rovicorp.com/3/JPG_400/MI0003/354/MI0003354196.jpg")'); //15
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("Skrillex", "One of the biggest names in dance, Sonny Moore\'s project blends the Benny Benassi style of electro with the noisiness of Fatboy Slim. ", "electronic", "2000", "http://cps-static.rovicorp.com/3/JPG_400/MI0003/422/MI0003422187.jpg")');
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("Toto", "Soft rock group, formed by session musicians David Paich and Steve Porcaro, that neatly defined 1982 with a pair of smash hits, \"Rosanna\" and \"Africa.\"", "soft rock", "1977", "http://cps-static.rovicorp.com/3/JPG_400/MI0001/467/MI0001467837.jpg")');
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("Nirvana", "Second-generation punk\'s most unlikely success story, a rampaging hard rock trio that influenced countless artists but ended in tragedy., "grunge", "1987", "http://cps-static.rovicorp.com/3/JPG_400/MI0003/770/MI0003770268.jpg")');
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("Enya", "Classically trained Irish pianist with a distinctive, ethereal voice, whose warm music sold millions starting in the 1980s.", "celtic new age", "1983", "http://cps-static.rovicorp.com/3/JPG_400/MI0001/426/MI0001426707.jpg")');
                 tx.executeSql('INSERT INTO BAND (title , txt, genre, year, img) VALUES ("Bee Gees", "Harmony-laden brother act who began as Beatles-influenced popsters, but reinvented themselves as disco superstars in the mid-\'70s.", "disco", "1958", "http://cps-static.rovicorp.com/3/JPG_400/MI0001/367/MI0001367718.jpg")'); //20
         /*---------- BOOK TABLE ---------- */ 
         tx.executeSql('DROP TABLE IF EXISTS BOOK');
         tx.executeSql('CREATE TABLE IF NOT EXISTS BOOK (title unique, txt, genre, year, img)');
                 tx.executeSql('INSERT INTO BOOK (title , txt, genre, year, img) VALUES ("To Kill a Mockingbird", "Harper Lee. The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.", "Novel", "1960", "https://d.gr-assets.com/books/1361975680l/2657.jpg")');
                 tx.executeSql('INSERT INTO BOOK (title , txt, genre, year, img) VALUES ("Harry Potter and the Deathly Hallows", "J.K. Rowling. Harry is waiting in Privet Drive. The Order of the Phoenix is coming to escort him safely away without Voldemort and his supporters knowing - if they can. But what will Harry do then? How can he fulfil the momentous and seemingly impossible task that Professor Dumbledore has left him?", "fantasy", "2007", "https://d.gr-assets.com/books/1370023538l/136251.jpg")');
                 tx.executeSql('INSERT INTO BOOK (title , txt, genre, year, img) VALUES ("The Hunger Games", "Suzanne Collins. The nation of Panem, formed from a post-apocalyptic North America, is a country that consists of a wealthy Capitol region surrounded by 12 poorer districts. Early in its history, a rebellion led by a 13th district against the Capitol resulted in its destruction and the creation of an annual televised event known as the Hunger Games.", "sci-fi", "2008", "https://d.gr-assets.com/books/1358275334l/2767052.jpg")');
                 tx.executeSql('INSERT INTO BOOK (title , txt, genre, year, img) VALUES ("Ender\'s Game", "Orson Scott Card. In order to develop a secure defense against a hostile alien race\'s next attack, government agencies breed child geniuses and train them as soldiers", "sci-fi", "1985", "https://d.gr-assets.com/books/1408303130l/375802.jpg")');
                 tx.executeSql('INSERT INTO BOOK (title , txt, genre, year, img) VALUES ("Pride and Prejudice", "Jane Austen. Features splendidly civilized sparring between the proud Mr. Darcy and the prejudiced Elizabeth Bennet as they play out their spirited courtship in a series of eighteenth-century drawing-room intrigues", "novel", "1813", "https://d.gr-assets.com/books/1320399351l/1885.jpg")'); //5
                 tx.executeSql('INSERT INTO BOOK (title , txt, genre, year, img) VALUES ("The Book Thief", "Markus Zusak. It’s just a small story really, about among other things: a girl, some words, an accordionist, some fanatical Germans, a Jewish fist-fighter, and quite a lot of thievery.", "historical fiction", "2006", "https://d.gr-assets.com/books/1390053681l/19063.jpg")');
                 tx.executeSql('INSERT INTO BOOK (title , txt, genre, year, img) VALUES ("1984", "George Orwell. 1984 presents a "negative utopia", that is at once a startling and haunting vision of the world — so powerful that it\'s completely convincing from start to finish.", "fiction", "1948", "https://d.gr-assets.com/books/1348990566l/5470.jpg")');
                 tx.executeSql('INSERT INTO BOOK (title , txt, genre, year, img) VALUES ("The Kite Runner", "Khaled Hosseini. The unforgettable, heartbreaking story of the unlikely friendship between a wealthy boy and the son of his father\'s servant", "contemporary", "2004", "https://d.gr-assets.com/books/1394898159l/77203.jpg")');
                 tx.executeSql('INSERT INTO BOOK (title , txt, genre, year, img) VALUES ("The Stand", "Stephen King. This is the way the world ends: with a nanosecond of computer error in a Defense Department laboratory and a million casual contacts that form the links in a chain letter of death.", "horror", "1978", "https://d.gr-assets.com/books/1213131305l/149267.jpg")');
                 tx.executeSql('INSERT INTO BOOK (title , txt, genre, year, img) VALUES ("The Help", "Kathryn Stockett. Twenty-two-year-old Skeeter has just returned home after graduating from Ole Miss. She may have a degree, but it is 1962, Mississippi, and her mother will not be happy till Skeeter has a ring on her finger.", "historical", "2009", "https://d.gr-assets.com/books/1346100365l/4667024.jpg")'); //10
                 tx.executeSql('INSERT INTO BOOK (title , txt, genre, year, img) VALUES ("East of Eden", "John Steinbeck. Set in the rich farmland of California’s Salinas Valley, this sprawling and often brutal novel follows the intertwined destinies of two families—the Trasks and the Hamiltons—whose generations helplessly reenact the fall of Adam and Eve and the poisonous rivalry of Cain and Abel.", "classic", "1952", "https://d.gr-assets.com/books/1368072889l/4406.jpg")');
                 tx.executeSql('INSERT INTO BOOK (title , txt, genre, year, img) VALUES ("A Tree Grows in Brooklyn", "Betty Smith. The story of young, sensitive, and idealistic Francie Nolan and her bittersweet formative years in the slums of Williamsburg.", "historical fiction", "1940", "https://d.gr-assets.com/books/1327883484l/14891.jpg")');
                 tx.executeSql('INSERT INTO BOOK (title , txt, genre, year, img) VALUES ("Memoirs of a Geisha", "Arthur Golden. It is a unique and triumphant work of fiction - at once romantic, erotic, suspenseful - and completely unforgettable.", "romance", "1997", "https://d.gr-assets.com/books/1388367666l/930.jpg")');
                 tx.executeSql('INSERT INTO BOOK (title , txt, genre, year, img) VALUES ("Animal Farm", "George Orwell. This 1945 satire addresses the socialist/communist philosophy of Stalin in the Soviet Union.", "sci-fi", "1945", "https://d.gr-assets.com/books/1424037542l/7613.jpg")');
                 tx.executeSql('INSERT INTO BOOK (title , txt, genre, year, img) VALUES ("Looking for Alaska", "John Green. Miles Pudge Halter heads off to the sometimes crazy, possibly unstable, and anything-but-boring world of Culver Creek Boarding School, and his life becomes the opposite of safe.", "young adult", "2005", "https://d.gr-assets.com/books/1394798630l/99561.jpg")'); //15
                 tx.executeSql('INSERT INTO BOOK (title , txt, genre, year, img) VALUES ("Prodigy", "Marie Lu. Injured and on the run, it has been seven days since June and Day barely escaped Los Angeles and the Republic with their lives. Day is believed dead having lost his own brother to an execution squad who thought they were assassinating him. June is now the Republic\'s most wanted traitor.", "sci-fi", "2013", "https://d.gr-assets.com/books/1336254717l/13414446.jpg")');
                 tx.executeSql('INSERT INTO BOOK (title , txt, genre, year, img) VALUES ("The House of Hades", "Rick Riordan. At the conclusion of The Mark of Athena, Annabeth and Percy tumble into a pit leading straight to the Underworld. The other five demigods have to put aside their grief and follow Percy’s instructions to find the mortal side of the Doors of Death.", "fantasy", "2013", "https://d.gr-assets.com/books/1370008006l/12127810.jpg")');
                 tx.executeSql('INSERT INTO BOOK (title , txt, genre, year, img) VALUES ("The Night Circus", "Erin Morgenstern. The circus arrives without warning. No announcements precede it. It is simply there, when yesterday it was not. Within the black-and-white striped canvas tents is an utterly unique experience full of breathtaking amazements. It is called "Le Cirque des Reves," and it is only open at night.", "fantasy", "2011", "https://d.gr-assets.com/books/1387124618l/9361589.jpg")');
                 tx.executeSql('INSERT INTO BOOK (title , txt, genre, year, img) VALUES ("The Fault in Our Stars", "John Green. Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel\'s story is about to be completely rewritten.", "young adult", "2012", "https://d.gr-assets.com/books/1360206420l/11870085.jpg")');
                 tx.executeSql('INSERT INTO BOOK (title , txt, genre, year, img) VALUES ("A Game of Thrones", "George R.R. Martin. Summers span decades. Winter can last a lifetime. And the struggle for the Iron Throne has begun.", "fantasy", "1996", "https://d.gr-assets.com/books/1436732693l/13496.jpg")'); //20
    }

    // Transaction error callback
    //
    function errorCB(tx, err) {
        alert("Error processing SQL: "+err);
    }
	// Transaction success callback
    //
    function successCB() {
        alert("success!");
    }

			 // launch the router
          var router = new AppRouter();
          Backbone.history.start();
        }
      });
    }
  });
});