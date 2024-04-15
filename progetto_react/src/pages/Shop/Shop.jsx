import React from 'react'
import {List} from "../../articoli"
import Articles from "../../common/Article/Article"
import './Shop.css'
const Shop = () => {
  return (
    <div className='shop'>
        <h1 className='shopTitle'>
            I nostri orologi
        </h1>
        <div className='shopList'>
            {List.map((menuItem,key) => {
                return( <Articles 
                image={menuItem.image} 
                 name={menuItem.name} 
                 price={menuItem.price}
                />
                );
                })}
        </div>
    </div>
  )
}

export default Shop