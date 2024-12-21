import React from 'react';

const Products = () => {
  const products = [
    { id: 1, name: "T-Shirt", image: "/images/tshirt.jpeg", price: "$20" },
    { id: 2, name: "Shirt", image: "/images/shirt.jpeg", price: "$25" },
    { id: 3, name: "Pants", image: "/images/pant.jpeg", price: "$30" },
    { id: 4, name: "Jacket", image: "/images/jacket.jpeg", price: "$40" },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center">Our Products</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-3">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
