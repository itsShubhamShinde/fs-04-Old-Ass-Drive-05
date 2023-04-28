import React, { useEffect, useState } from 'react'
import './Product.css'

const Products = () => {
    const [product,setProduct]=useState([])

    useEffect(()=>{
      apidata()
    },[])

    const apidata = async ()=>{
        const resp = await fetch("https://fakestoreapi.com/products")
        const data = await resp.json()
        console.log(data)
        setProduct(data)
      }
      console.log(product)
  return (
    <div className='productOuterDiv'>
      {
        product.lenght !== 0 ? <div className='productDetails'>
          {
            product.map((ele) => {
              return <div className='cart'>
                <h3>{ele.category}</h3>
                <img src={ele.image} alt="" width="70%" height="60%" />
                <h5>{ele.title}</h5>
                <div className='cardButton'>
                <p style={{color:"red"}}><b>${ele.price}</b></p>
                <button>Add To Cart</button>
                </div>
              </div>
            })
          }
        </div>

          : <h2>Data not Present</h2>
      }
     
    </div>
  )
}

export default Products