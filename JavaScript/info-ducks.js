const ducksDatabase = [
  { id: 1,
    image: "../assets/ruby..png", 
    duckName: "Ruby", 
    price: 2.00, 
    stock: 10, 
    description: {1: "Conoce al patito que encarna la filosofía de Ruby: La mejor amiga del programador es la felicidad",
                  2: "Elegante y Conciso: Al igual que tu código Ruby, este patito es directo y va al grano.",
                  3: "Perfecto para Rails: El compañero ideal para tus proyectos en Ruby on Rails.",
                  4: "Debugging con Estilo: Te ayudará a desvelar esos errores con la elegancia de un dev senior."}
  },

  { id: 2,
    image: "../assets/python.png", 
    duckName: "Python", 
    price: 1.00, 
    stock: 20, 
    description: {1: "El patito Python representa la calma y la elegancia del código limpio.",
                  2: "Fabricado con silicona suave, es el compañero perfecto para quienes disfrutan de simplicidad bien pensada.",
                  3: "Ideal para programadores Zen, amantes de Jupyter, y quienes creen que: Simple is better than complex.",
                  4: "Consejo del pato: Explícame tu código y verás cómo los bugs se van flotando"} 
  },

  { id: 3,
    image: "../assets/JavaScript.jpg", 
    duckName: "JavaScript", 
    price: 3.00, 
    stock: 15, 
    description: {1: "¡El patito más versátil del mercado! Capaz de estar en el frontend, backend, y ahora, en tu bañera o escritorio.",
                  2: "Versatilidad Total: Tan adaptable como el propio JavaScript. Servidor, cliente, ¡donde lo necesites!",
                  3: "Asíncrono por Naturaleza: Siempre listo para escuchar tu código mientras tú pasas a la siguiente tarea.",
                  4: "¡Añádelo a tu setup y domina la web!"}  
  },

  { id: 4,
    image: "../assets/Java.png",
    duckName: "Java", 
    price: 4.00, 
    stock: 7, 
    description: {1: "Para los amantes de la programación orientada a objetos (POO) y la fiabilidad de Java. Este patito está construido para durar.",
                  2: "Orientado a Objetos: El compañero de escritorio perfecto para tus clases, objetos e interfaces.",
                  3: "Robusto y Fiable: Construido para soportar las jornadas de depuración más intensas.",
                  4: "¡Un imprescindible para cualquier desarrollador Java junior que busque estabilidad!"} 
  },
];

export { ducksDatabase };
