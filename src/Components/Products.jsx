const Products = ({ products }) => {
    // Instructions:
    //     1. Import the products state as props
    // Done
    //     2. Loop over useing #map 
    // Done
    //     3. Show the product name in an h1, and the product price in a p tag
    // Done

    return (
        <div>
            {products.productData.map((product) => (
              <div>
                <h1>{product.name}</h1>
                <p>{product.pricing}</p>
              </div>
            ))}
        </div>
    )
}

export default Products