const getProducts = async ()=>{
    const {data} = await axios.get('https://dummyjson.com/products');
    return data;
}

const productsProperty = async ()=>{
    const data = await getProducts();
    const properties = data.products.map ( (product) =>{
        return `
        <div class="product">
        <h2>${product.title}</h2>
        <img src= "${product.thumbnail}"/>
        <a href="./details.html?id=${product.id}">details</a>
        </div>
        `;
    }).join(' ');

    document.querySelector('.products').innerHTML = properties;
   
}
getProducts();

productsProperty();