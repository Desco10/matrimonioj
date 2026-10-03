const EVENTO = {

  // ==========================================
  // DATOS PRINCIPALES
  // ==========================================

  // Se conserva esta propiedad por compatibilidad
  // con la lógica actual de la aplicación.
  quinceanera: "Jose  & Natalia",

  // Se conserva por compatibilidad.
  edad: null,


  // ==========================================
  // PERSONALIZACIÓN DE INVITADOS
  // ==========================================

  personalizacionInvitados: {
    habilitada: true,
    archivo: "invitados.json"
  },


  // ==========================================
  // PANTALLA DE APERTURA
  // ==========================================

  apertura: {

    fondo: {
      habilitado: true,
      imagen: "assets/images/portada1.png",
      posicion: "center center",
      opacidad: 1,
      desenfoque: 0,
      oscurecer: 0.18
    },

    sello: {
      color: null,
      emblema: "mono",
      inicial: null,
      texto: "Abrir invitación",
      listones: true
    }

  },


  // ==========================================
  // FECHA Y HORA DEL EVENTO
  // ==========================================

  fecha: "16 de Octubre de 2026",

  hora: "8:00 PM",

  fechaEvento: "2026-10-16T20:00:00",


  // ==========================================
  // WHATSAPP
  // ==========================================

  whatsapp: {
    numero: "34613669295"
  },


  // ==========================================
  // PADRES
  // ==========================================
  //
  // Se conserva la estructura actual para no
  // romper la lógica existente.
  //
  // En matrimonio podemos utilizar esta sección
  // posteriormente para padres/padrinos si el
  // HTML actual lo permite.
  //

  padres: {
    padre: "Jose Escobar - Maria arboleda",
    madre: "luz Mary Salazar "
  },


  // ==========================================
  // COLORES
  // ==========================================

  colores: {
    principal: "#7A8B78",
    secundario: "#B8C4B3",
    acento: "#C9A45C",
    fondo: "#F8F6F0",
    texto: "#2F332F"
  },


  // ==========================================
  // FONDO GENERAL
  // ==========================================

  fondo: {
    habilitado: true,
    imagen: "/assets/images/portada1.png",
    opacidad: 0.85,
    posicion: "center center",
    tamaño: "cover",
    fijo: true,
    desenfoque: 0
  },


  // ==========================================
  // EFECTO CRISTAL
  // ==========================================

  cristal: {
    opacidad: 0.30,
    opacidadFuerte: 0.40,
    desenfoque: 20,
    saturacion: 140,
    borde: 0.45
  },


  // ==========================================
  // PORTADA
  // ==========================================

  portada: {
  titulo: "Nuestra Boda",
  subtitulo: "Nuestro gran día",
  imagen: "assets/images/CLECLEKES.jpg"
},

  // ==========================================
  // UBICACIÓN
  // ==========================================

  ubicacion: {
    nombre: " CENTRO CRISTIANO UNIDAD Y ACCIÓN ",
    direccion: "RONDA  D. RICARDO LAFUENTE AGUADO 6 ",
    maps: "https://maps.app.goo.gl/5K9TdFG2Lo3CrAXS7?g_st=iw"
  },


  // ==========================================
  // VESTIMENTA
  // ==========================================

  vestimenta: "Formal",


  // ==========================================
  // REGALO
  // ==========================================

  regalo: {
     lluviaSobres: false,
    titulo: "Tu presencia es nuestro mejor regalo",
    descripcion:
      "Lo más importante para nosotros es compartir este día contigo. Si deseas obsequiarnos algo, lo recibiremos con mucho cariño."
  },


  // ==========================================
  // MÚSICA
  // ==========================================

  musica: {
    archivo: "assets/music/tealabaremibuenjesus.mp3",
    autoplayAlAbrir: true,
    volumenInicial: 0.25
  },


  // ==========================================
  // EFECTOS VISUALES
  // ==========================================

  efectos: {

    // Apropiado para matrimonio
    petalos: true,

    particulas: true,

    brillo: true,

    // Se mantiene la propiedad porque puede
    // estar siendo consultada por app.js.
    // La desactivamos para eliminar el vestido XV.
    vestido: false,

    // Se mantiene por compatibilidad.
    // No queremos mariposas en matrimonio.
    mariposas: false,

    intensidadPetalos: 10,

    intensidadMariposas: 0
  },


  // ==========================================
  // ITINERARIO
  // ==========================================

  itinerarioHabilitado: false,

  itinerario: [

    {
      hora: "6:00 PM",
      icono: "♡",
      titulo: "Recepción de invitados",
      descripcion:
        "Damos la bienvenida a nuestros familiares y amigos."
    },

    {
      hora: "6:30 PM",
      icono: "♧",
      titulo: "Ceremonia",
      descripcion:
        "Compartiremos uno de los momentos más importantes de nuestra historia."
    },

    {
      hora: "7:30 PM",
      icono: "✦",
      titulo: "Sesión de fotos",
      descripcion:
        "Un momento para guardar recuerdos de este día tan especial."
    },

    {
      hora: "8:00 PM",
      icono: "♢",
      titulo: "Cena",
      descripcion:
        "Disfrutaremos juntos de una deliciosa cena."
    },

    {
      hora: "9:30 PM",
      icono: "♫",
      titulo: "Celebración",
      descripcion:
        "Música, baile y momentos para celebrar nuestro amor."
    },

    {
      hora: "12:00 AM",
      icono: "♡",
      titulo: "Despedida",
      descripcion:
        "Gracias por acompañarnos y ser parte de este momento inolvidable."
    }

  ],


  // ==========================================
  // CÓDIGO DE VESTIMENTA
  // ==========================================

  dressCode: {

    habilitado: false,

    estilo: "Formal",

    coloresReservadosHabilitado: false,

    coloresReservados: [],

    mensajeColores:
      "Este día queremos compartirlo contigo tal como eres. Gracias por acompañarnos en nuestra celebración. ♡"
  }

};