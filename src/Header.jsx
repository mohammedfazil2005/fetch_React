import React, { useEffect, useState } from 'react'

function Header() {

    const [products,setProducts]=useState([])
    const baseURL='https://fakestoreapi.com/products'

    const fetchProducts=async()=>{
        const serverResponce=await fetch(baseURL)
        const datas=await serverResponce.json()
        setProducts(datas)
    }
 
    useEffect(()=>{
        fetchProducts()
    },[])



  return (
    <div>
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">50% OFF ON FLIPZY</h1>
                    <p className="lead fw-normal text-white-50 mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit nemo natus magni, iure, ea a dignissimos excepturi quibusdam dolor minus ad nam deleniti, sint atque consequatur aliquam hic in doloremque?</p>
                </div>
            </div>
        </header>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                   {products.map((product)=>(
                     <div className="col mb-5">
                     <div className="card h-100">
                         <img className="card-img-top" src={product.image} alt="..." />
                         <div className="card-body p-4">
                             <div className="text-center">
                                 <h5 className="fw-bolder">{product.title}</h5>
                                ₹{product.price}
                             </div>
                         </div>
                         <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                             <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                         </div>
                     </div>
                 </div>
                   ))}
                    
                   
                </div>
            </div>
        </section>
    </div>
  )
}

export default Header
