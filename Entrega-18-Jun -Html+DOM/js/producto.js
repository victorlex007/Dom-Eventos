let stockProductos = [
    {id: 1, nombre: "STEAK", precio: 2500, descripcion: "Jugoso pieza de carne con marmolado unico", img: 'https://www.google.com/imgres?imgurl=http%3A%2F%2Ftradicionafuegolento.com%2Fwp-content%2Fuploads%2F2020%2F05%2FWagyuStripSteak_8324549421.jpg&imgrefurl=http%3A%2F%2Ftradicionafuegolento.com%2F%3Fp%3D3428&tbnid=04aqOORy-k1mgM&vet=12ahUKEwiy9fDiubj4AhWJN7kGHf76AosQMygVegUIARD5AQ..i&docid=EY5Ifyq1EJZi0M&w=3016&h=1892&q=wagyu%20steak%20jpeg&ved=2ahUKEwiy9fDiubj4AhWJN7kGHf76AosQMygVegUIARD5AQ'},
    {id: 2, nombre: "CHORIZOS", precio: 1600, descripcion: "Jugoso pieza de carne con marmolado unico", img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.wagyusteakco.com%2Fwp-content%2Fuploads%2F2020%2F05%2FCHORIZO.jpg&imgrefurl=https%3A%2F%2Fwww.wagyusteakco.com%2Fproducto%2Fchorizos-wagyu%2F&tbnid=-uB5Ce3qEil9KM&vet=12ahUKEwjf-tn4urj4AhXmHLkGHb5QB8EQMygAegUIARDFAQ..i&docid=9EpovwhXPimriM&w=800&h=533&q=chorizos%20wagyu&ved=2ahUKEwjf-tn4urj4AhXmHLkGHb5QB8EQMygAegUIARDFAQ'}, 
    {id: 3, nombre: "VACIO", precio: 3100, descripcion: "Jugoso pieza de carne con marmolado unico", img: '/https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.ambito.com%2Fp%2F11cedb2a662608a0353992c077395d3d%2Fadjuntos%2F239%2Fimagenes%2F038%2F603%2F0038603147%2Fcarne-wagyujpg.jpg&imgrefurl=https%3A%2F%2Fwww.ambito.com%2Feconomia%2Fcarne%2Fwagyu-que-es-cuanto-cuesta-y-donde-se-puede-comprar-n5174468&tbnid=gSxLfjZsk4xusM&vet=12ahUKEwi4xvjCurj4AhVjN7kGHWcyD8gQMygBegUIARDPAQ..i&docid=ysHtr5J2D3O7aM&w=730&h=410&q=vacio%20wagyu&ved=2ahUKEwi4xvjCurj4AhVjN7kGHWcyD8gQMygBegUIARDPAQ'},
    {id: 4, nombre: "LOMO", precio: 2600, descripcion: "Jugoso pieza de carne con marmolado unico", img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F18%2F80%2F25%2F65%2Fbife-de-lomo-wagyu-americano.jpg&imgrefurl=https%3A%2F%2Fwww.tripadvisor.com%2FLocationPhotoDirectLink-g150798-d7314886-i288877906-Cortazar_Parilla_de_Autor-Guadalajara_Guadalajara_Metropolitan_Area.html&tbnid=_ebwI1V812qO0M&vet=12ahUKEwi-gcHUurj4AhWROLkGHVbZBrkQMyg2egQIARBK..i&docid=WbRKPYwpWADGoM&w=550&h=367&q=lomo%20wagyu&ved=2ahUKEwi-gcHUurj4AhWROLkGHVbZBrkQMyg2egQIARBK'},
    {id: 5, nombre: "TOMAHAWK", precio: 2400, descripcion: "Jugoso pieza de carne con marmolado unico", img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.southstreammarket.com%2Fupload%2Fproducts%2Fpfd6c44fd8045485b959a96a4a92a474b.jpeg%3Fl%3D1556266129&imgrefurl=https%3A%2F%2Fwww.southstreammarket.com%2Fen%2FProductDetail%2FAUS-Tajima-Wagyu-Beef-Tomahawk-M5&tbnid=-k0QAvFyvrGkjM&vet=12ahUKEwi9mOL9ubj4AhV9N7kGHdF8B9EQMygUegUIARCCAg..i&docid=1oneqa0L8mpWQM&w=1278&h=1276&q=wagyu%20tomahawk%20jpeg&ved=2ahUKEwi9mOL9ubj4AhV9N7kGHdF8B9EQMygUegUIARCCAg'},
    {id: 6, nombre: "T-BONE", precio: 2500, descripcion: "Jugoso pieza de carne con marmolado unico", img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fkobebeef.com.ar%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F2%2Fthumbnail%2F375x250%2F0dc2d03fe217f8c83829496872af24a0%2Fb%2Fi%2Fbife_angosto_con_hueso.jpg&imgrefurl=https%3A%2F%2Fkobebeef.com.ar%2F&tbnid=AwNqaOR3HAGQHM&vet=12ahUKEwjkqY7rurj4AhVJN7kGHY95DAMQMygCegUIARDIAQ..i&docid=nV-KYdEgzdEKzM&w=375&h=250&q=bife%20costilla%20wagyu&ved=2ahUKEwjkqY7rurj4AhVJN7kGHY95DAMQMygCegUIARDIAQ'}
]
//                   0          1        2           3        4      

// class Producto {
//     constructor(id, nombre, importe) {
//         this.id = id
//         this.nombre = nombre
//         this.importe = importe
//     }
//     precioFinal() {
//         return parseFloat((this.importe * IVA).toFixed(2))
//     }
// }