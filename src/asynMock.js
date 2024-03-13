const products=[
    {
        id: '1',
        name: 'iPhone 11',
        category:'iPhone',
        price: ' $USD 600',
        img: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone_11-rosette-family-lineup-091019_big.jpg.large.jpg',
        stock:'10',
        description:'Graba videos 4K y captura retratos espectaculares y paisajes increíbles con el sistema de dos cámaras. Toma grandes fotos con poca luz gracias al modo Noche. Disfruta colores reales en las fotos, videos y juegos con la pantalla Liquid Retina de 6.1 pulgadas (3). Aprovecha un rendimiento sin precedentes en los juegos, la realidad aumentada y la fotografía con el chip A13 Bionic. Haz mucho más sin necesidad de volver a cargar el teléfono gracias a su batería de larga duración (2). Y no te preocupes si se moja, el iPhone 11 tiene una resistencia al agua de hasta 30 minutos a una profundidad máxima de 2 metros (1).',
    },
    
    {id: '2', name: 'iPhone 12 pro', price:'$USD 850', stock:10, description:'iPhone 12' , category:'iPhone', img:'https://i5.walmartimages.com/seo/Apple-iPhone-12-Pro-256GB-GSM-CDMA-Fully-Unlocked-Gold-Used_f2fd05f5-c92c-4d3f-b04e-f51b50c4a672.2c7edfcf9dd25ca9a4eef030746ea63f.jpeg',}
   ,{id: '3', name: 'iPhone 13', price: '$USD 900', category:'iPhone', description:'iPhone 14' , img:'https://http2.mlstatic.com/D_NQ_NP_654080-MLA47781882564_102021-O.webp'},
    {id:'4', name: 'iPhone 14 pro', price:'$USD 1100', category:'iPhone',  description:'iPhone 14 PRO' , img: 'https://http2.mlstatic.com/D_NQ_NP_891263-MLA71783089058_092023-O.webp'},
    {id:'5', name:'Macbook Air 13 pulgadas', price:'$USD 1200 ', category:'Mac', description:'Macbook Air 13 ' , img:'https://http2.mlstatic.com/D_NQ_NP_840786-MLA46516504421_062021-O.webp'},
    {id:'6', name: 'Macbook Air M2 2023', price:'$USD 2000', category:'Mac',img:'https://http2.mlstatic.com/D_NQ_NP_637313-MLA51356401031_082022-O.webp'},
    {id:'7', name:'Macbook PRO 16', price:'$USD 3200', category:'Mac', img:'https://http2.mlstatic.com/D_NQ_NP_743853-MLA53547669930_012023-O.webp'},
    {id:'8', name:'iPad (9 generacion)', price:'$USD 450', category:'iPad', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_912069-MLA74807972777_022024-F.webp'},
    {id:'9', name:'iPad (10th generation',price:'$USD 900', category:'iPad', img:'https://http2.mlstatic.com/D_NQ_NP_2X_803992-MLA52988770428_122022-F.webp'},
    {id:'10',name:'iPad PRO 4th generation', price:'$USD 1800', category:'iPad', img:'https://http2.mlstatic.com/D_NQ_NP_2X_893788-MLA52850734025_122022-F.webp'},
    {id:'11', name:'AirPods (3° Generation)', price:'$USD 280', category:'AirPods', img:'https://http2.mlstatic.com/D_NQ_NP_2X_615592-MLM51650325727_092022-F.webp'},
    {id:'12', name:'AirPods PRO (2° Generation)', price:'$USD 500', category:'AirPods',img:'https://http2.mlstatic.com/D_NQ_NP_2X_779146-MLA53778959612_022023-F.webp'},
    {id:'12', name:'AirPods PRO (3° Generation', price:'$USD 280', category:'AirPods', img:'https://http2.mlstatic.com/D_NQ_NP_2X_919371-MLA48697047530_122021-F.webp'}

]

export const getProducts = () => {
    return new Promise ((resolve)=>{
        setTimeout(() =>{
            resolve(products)
        } , 400)
    })
} 

export const getProductsByCategory = (categoryId) =>{
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve(products.filter(prod => prod.category == categoryId))
        }, 400)
    }
    )
}

export const getProductsById = (itemId) =>{
    return new Promise ( (resolve) =>{
        setTimeout( () =>{
            resolve(products.find (prod => prod.id === itemId))
        }, 400)
    })
}