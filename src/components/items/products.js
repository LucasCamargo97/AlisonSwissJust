const products = [
    {id:1, categoria:'AceitesEscenciales', foto: 'https://swissjust-platform.s3.amazonaws.com/06130306263.jpg', title: "Aceite Esencial de Naranja", price: 1400},
    {id:2, categoria:'AceitesEscenciales', foto: 'https://swissjust-platform.s3.amazonaws.com/06130452727.jpg', title: "Aceite Esencial de Eucalipto", price:2300},
    {id:3, categoria:'AceitesEscenciales', foto: 'https://swissjust-platform.s3.amazonaws.com/06183315380.jpg', title: "Aceite Esencial de Geranio", price:1850},
    {id:4, categoria:'AceitesEscenciales', foto: 'https://swissjust-platform.s3.amazonaws.com/06183744006.jpg', title: "Aceite Esencial de Jazmín", price:1780},
    {id:5, categoria:'AceitesEscenciales', foto: 'https://swissjust-platform.s3.amazonaws.com/06132422019.jpg', title: "Aceite Esencial de Lavanda", price:1450},
    {id:6, categoria:'AceitesEscenciales', foto: 'https://swissjust-platform.s3.amazonaws.com/04194400802.jpg', title: "Aceite Esencial de Limón", price:1200},
    {id:7, categoria:'AceitesEscenciales', foto: 'https://swissjust-platform.s3.amazonaws.com/04194648122.jpg', title: "Aceite Esencial de Manzanilla", price:2560},
    {id:8, categoria:'AceitesEscenciales', foto: 'https://swissjust-platform.s3.amazonaws.com/07015743504.jpeg', title: "Aceite Esencial de Menta", price:1700},
    {id:9, categoria:'Cremas', foto: 'https://swissjust-platform.s3.amazonaws.com/04195421644.jpg', title: "Crema de Manzanilla para Manos", price:1422},
    {id:10, categoria:'Cremas', foto: 'https://swissjust-platform.s3.amazonaws.com/06215930841.jpg', title: "Crema de Caléndula", price:1556},
    {id:11, categoria:'Cremas', foto: 'https://swissjust-platform.s3.amazonaws.com/06210504979.jpg', title: "Crema Exfoliante Corporal", price:1899},
    {id:12, categoria:'Cremas', foto: 'https://swissjust-platform.s3.amazonaws.com/06194432288.jpg', title: "Crema de Lavanda", price:1800},
];

export const newFetch = new Promise ((resolve)=> {
    setTimeout(() => {
        resolve(products)
    }, 2000)
})

export default products