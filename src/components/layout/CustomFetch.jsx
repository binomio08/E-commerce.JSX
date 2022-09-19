import products from "./Products";

export const customFecth = () => {
    return new Promise ((resolve) => { 
        setTimeout(() => {
        resolve(products);
    }, 500)
})
}
export const productsId = (id) => {
    return new Promise (resolve => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}