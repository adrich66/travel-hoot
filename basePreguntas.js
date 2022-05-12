let basePreguntas = [
  {
    pregunta: "¿Dónde puedes encontrar estas casas sobre los canales?",
    imagen: "img/amsterdam.jpeg",
    url: "https://www.iamsterdam.com/es",
    respuesta: "Ámsterdam",
    distractores: ["Venecia", "Bruselas"],
  },
  {
    pregunta: "Esta foto pertenece a un país rodeado de montañas.",
    imagen: "img/andorra.jpeg",
    url: "https://visitandorra.com/es/",
    respuesta: "Andorra",
    distractores: ["Suiza", "Nepal"],
  },
  {
    pregunta: "La Patagonia está en...",
    imagen: "img/argentina.jpeg",
    url: "https://patagonia.gob.ar/",
    respuesta: "Argentina y Chile",
    distractores: ["Argentina y Brasil", "Brasil y Uruguay"],
  },
  {
    pregunta: "¿En qué país se te puede cruzar este animal?",
    imagen: "img/australia.jpeg",
    url: "https://www.australia.com/en",
    respuesta: "Australia",
    distractores: ["India", "Nueva Guinea"],
  },
  {
    pregunta: "¿A que ciudad pertenece esta obra inacabada?",
    imagen: "img/barcelona.jpeg",
    url: "https://www.barcelonaturisme.com/wv3/es/",
    respuesta: "Barcelona",
    distractores: ["Sevilla", "Roma"],
  },
  {
    pregunta: "Adivina Skyline:",
    imagen: "img/berlin.jpeg",
    url: "https://www.visitberlin.de/es",
    respuesta: "Berlín",
    distractores: ["Bruselas", "Madrid"],
  },{
    pregunta: "Angkor Wat está en...",
    imagen: "img/camboya.jpeg",
    url:"https://www.tourismcambodia.com/",
    respuesta: "Camboya",
    distractores: ["Vietnam", "Laos"],
  },{
    pregunta: "Solamente hay un país con una gran muralla:",
    imagen: "img/china.jpeg",
    url: "https://www.discoverchina.com/article/china-tourism",
    respuesta: "China",
    distractores: ["Corea del Norte","Mongolia"],
  },{
    pregunta: "El país de los faraones es...",
    imagen: "img/egipto.jpeg",
    url: "https://egypt.travel/",
    respuesta: "Egipto",
    distractores: ["Etiopia","Túnez"],
  },,{
    pregunta: "Este palacio está en...",
    imagen: "img/granada.jpeg",
    url: "https://www.turgranada.es/",
    respuesta: "Granada",
    distractores: ["Córdoba","Sevilla"],
  },,{
    pregunta: "Postal típica de...",
    imagen: "img/grecia.jpeg",
    url: "https://www.visitgreece.gr/",
    respuesta: "Grecia",
    distractores: ["Italia","Turquía"],
  },,{
    pregunta: "¿En qué país puedes visitar el Taj Mahal?",
    imagen: "img/india.jpeg",
    url: "https://tourism.gov.in/",
    respuesta: "India",
    distractores: ["Nepal","Sri Lanka"],
  },,{
    pregunta: "Es un país isla...",
    imagen: "img/islandia.jpeg",
    url: "https://es.visiticeland.com/",
    respuesta: "Islandia",
    distractores: ["japón","Cuba"],
  },,{
    pregunta: "Esta ciudad está en dos continentes:",
    imagen: "img/istambul.jpeg",
    url: "https://visit.istanbul/en/",
    respuesta: "Estambul",
    distractores: ["Casablanca","El Cairo"],
  },,{
    pregunta: "Estos arcos son típicos de...",
    imagen: "img/japon.jpeg",
    url: "https://www.japan.travel/en/us/",
    respuesta: "Japón",
    distractores: ["Corea","China"],
  },,{
    pregunta: "Adivina Skyline:",
    imagen: "img/london.jpeg",
    url: "https://www.visitlondon.com/es",
    respuesta: "Londres",
    distractores: ["Berlín","Dublín"],
  },,{
    pregunta: "Bazares, Sahara, Atlántico y Mediterráneo...",
    imagen: "img/marruecos.jpeg",
    url: "https://www.turismomarruecos.net/",
    respuesta: "Marruecos",
    distractores: ["España","Argelia"],
  },,{
    pregunta: "¿Dónde se encuentran las segundas pirámides más conocidas?",
    imagen: "img/mexico.jpeg",
    url: "https://www.visitmexico.com/",
    respuesta: "México",
    distractores: ["Perú","Costa Rica"],
  },,{
    pregunta: "Budismo y montañas (muy altas)...",
    imagen: "img/nepal.jpeg",
    url: "https://ntb.gov.np/",
    respuesta: "Nepal",
    distractores: ["Mongolia","India"],
  },,{
    pregunta: "Adivina Skyline:",
    imagen: "img/NY.jpeg",
    url: "https://visitnewyork.com/",
    respuesta: "Nueva York",
    distractores: ["Boston","L.A."],
  },,{
    pregunta: "Le llaman la Escocia del hemisferio sur.",
    imagen: "img/NZ.jpeg",
    url: "https://www.newzealand.com/int/",
    respuesta: "Nueva Zelanda",
    distractores: ["Filipinas","Nueva Caledonia"],
  },,{
    pregunta: "Sin lugar a dudas estamos en...",
    imagen: "img/paris.jpeg",
    url: "https://en.parisinfo.com/",
    respuesta: "París",
    distractores: ["Berlín","Bruselas"],
  },,{
    pregunta: "Esta ciudad del imperio Inca está en...",
    imagen: "img/peru.jpeg",
    url: "https://www.peru.travel/pe",
    respuesta: "Perú",
    distractores: ["Colombia","Chile"],
  },,{
    pregunta: "¿Qué país debes visitar para dar con Petra?",
    imagen: "img/petra.jpeg",
    url: "http://international.visitjordan.com/",
    respuesta: "Jordania",
    distractores: ["Palestina","Líbano"],
  },,{
    pregunta: "Puedes cruzar el puente en tren, andando o en coche...",
    imagen: "img/porto.jpeg",
    url: "https://visitporto.travel/pt-PT/home#/",
    respuesta: "Porto",
    distractores: ["Lisboa","Vigo"],
  },,{
    pregunta: "Adivina Skyline:",
    imagen: "img/rio.jpeg",
    url: "http://visitbrasil.com/en/",
    respuesta: "Río de Janeiro",
    distractores: ["Lima","Sao Paulo"],
  },,{
    pregunta: "Ciudad con mucha historia...",
    imagen: "img/roma.jpeg",
    url: "https://www.turismoroma.it/es",
    respuesta: "Roma",
    distractores: ["Tarragona","Barcelona"],
  },,{
    pregunta: "Las inconfundibles vacas de las Highlands...",
    imagen: "img/scotland.jpeg",
    url: "https://www.visitscotland.com/es-es/",
    respuesta: "Scotland",
    distractores: ["Wales","Wisconsin"],
  },,{
    pregunta: "Puede ser la ópera más famosa y está en...",
    imagen: "img/sidney.jpeg",
    url: "https://www.australia.com/en",
    respuesta: "Sídney",
    distractores: ["Melbourne","Viena"],
  },,{
    pregunta: "Heidi...",
    imagen: "img/suiza.jpeg",
    url: "",
    respuesta: "Suiza",
    distractores: ["Austria","Japón"],
  },,{
    pregunta: "Continente africano, país europeo, plátano es...",
    imagen: "img/teide.jpeg",
    url: "",
    respuesta: "Islas Canarias",
    distractores: ["Cabo Verde","Madagascar"],
  },,{
    pregunta: "Los longtails están en todas las playas de...",
    imagen: "img/thai.jpeg",
    url: "",
    respuesta: "Tailandia",
    distractores: ["Filipinas","China"],
  },,{
    pregunta: "Adivina Skyline:",
    imagen: "img/vancouver.jpeg",
    url: "https://travel.destinationcanada.com/",
    respuesta: "Vancouver",
    distractores: ["Toronto","Boston"],
  },,{
    pregunta: "Antes que se hunda debes visitar...",
    imagen: "img/venecia.jpeg",
    url: "https://www.visitvenezia.eu/en",
    respuesta: "Venecia",
    distractores: ["Ámsterdam","Atenas"],
  },,{
    pregunta: "Los balcones de arroz o te en...",
    imagen: "img/vietnam.jpeg",
    url: "https://vietnam.travel/",
    respuesta: "Vietnam",
    distractores: ["Valencia","India"],
  },
];
