// ============================================================
//  CONFIGURACIÓN DE TU TIENDA
//  Cambia estos datos y guarda. No necesitas tocar nada más.
// ============================================================

const TIENDA = {
  nombre: "Peluches 3D",
  eslogan: "Cojines con la forma de tu foto, peluches y figuras hechos a mano.",
  // Tu número con código de país, sin + ni espacios. Ej: 573001234567
  whatsapp: "573000000000",
  instagram: "", // Ej: "https://instagram.com/tu_usuario"
  tiktok: "",    // Ej: "https://tiktok.com/@tu_usuario"
  ciudad: "Colombia",
};

// ============================================================
//  TUS PRODUCTOS
//  Para agregar uno, copia un bloque { ... }, pégalo y cámbialo.
//  foto: pon la imagen en la carpeta "fotos" y escribe su nombre,
//        ej: "fotos/osito.jpg". Si la dejas vacía, sale un dibujo.
//  precio: en pesos colombianos, sin puntos. Ej: 85000
// ============================================================

// Precios del cojín con foto (en la sección "Diseña el tuyo")
const COJIN = {
  tamanos: [
    { nombre: "30 cm", precio: 45000 },
    { nombre: "40 cm", precio: 60000 },
    { nombre: "50 cm", precio: 80000 },
  ],
};

const PRODUCTOS = [
  {
    nombre: "Cojín con tu foto",
    descripcion: "Tu mascota, tu familia o tu dibujo en un cojín con su misma forma.",
    precio: 45000,
    foto: "",
    emoji: "🐾",
    color: "#FFE1D2",
    categoria: "Cojines",
  },
  {
    nombre: "Osito clásico",
    descripcion: "Suave, 30 cm. Elige colores, bordado del nombre y accesorios.",
    precio: 85000,
    foto: "",
    emoji: "🧸",
    color: "#F6D7B0",
    categoria: "Peluches",
  },
  {
    nombre: "Conejito con orejas largas",
    descripcion: "25 cm, ideal para bebés. Tela antialérgica.",
    precio: 75000,
    foto: "",
    emoji: "🐰",
    color: "#F9D3DF",
    categoria: "Peluches",
  },
  {
    nombre: "Mascota personalizada",
    descripcion: "Envíanos foto de tu perro o gato y lo hacemos peluche.",
    precio: 140000,
    foto: "",
    emoji: "🐶",
    color: "#D6E8C8",
    categoria: "Personalizados",
  },
  {
    nombre: "Personaje a tu diseño",
    descripcion: "Tú nos cuentas la idea y la convertimos en peluche único.",
    precio: 120000,
    foto: "",
    emoji: "✨",
    color: "#D9D4F5",
    categoria: "Personalizados",
  },
  {
    nombre: "Figura 3D impresa",
    descripcion: "Figura de 15 cm impresa en 3D y pintada a mano.",
    precio: 60000,
    foto: "",
    emoji: "🗿",
    color: "#CFE4F2",
    categoria: "Figuras 3D",
  },
  {
    nombre: "Llavero mini",
    descripcion: "Versión mini de cualquier peluche, 8 cm.",
    precio: 25000,
    foto: "",
    emoji: "🔑",
    color: "#FBE7A8",
    categoria: "Accesorios",
  },
];
