/* Peliculas favoritas */
var usuario = {
    nombre: "Exequiel",
    peliculasFavoritas: [
        {Titulo: "Nueve reinas", Año: "1995"}, 
        {Titulo: "El hijo de la novia", Año: "2001"},  
        {Titulo: "The Matrix", Año: "2000"},  
    ]
} 
console.log(usuario.peliculasFavoritas[1]);

/* Gestor de contactos */
var contactos = {
    contacto_1 : 
        {
         Nombre: "Eluno",
         Telefono: "11111", 
         Email: "1111@email.com"
        }, 
    contacto_2 :
        {
        Nombre: "Eldos", 
        Telefono: "22222", 
        Email: "2222@email.com"
        }, 
    }

var contacto_3 = {
    Nombre: "Eltres",
    Telefono: "33333",
    Email: "3333@email.com"
};

contactos.contacto_3 = contacto_3;
console.log(Object.keys(contactos).length);