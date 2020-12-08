import React from "react";
import ProductsWarehouse from "./productsWarehouse";



function Products(){

return<div className="container">
<div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">

{ProductsWarehouse.map(Product=>{

    return<div>

   
    



     <div className="col"> 
     <div class="card">
  <img src={Product.imgUrl} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">{Product.name}</h5>
    <p class="card-text">{Product.meaning}</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>
</div>
     {/* <div className="col"></div>
     <div className="col"></div>
     <div className="col"></div> */}
     </div>
})}

  {/* <div className="col">Column</div>
  <div className="col">Column</div>
  <div className="col">Column</div>
  <div className="col">Column</div> */}
</div>
</div>
}
export default Products;

