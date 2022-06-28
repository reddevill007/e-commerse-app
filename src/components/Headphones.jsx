import { React, useState } from 'react'
import ProductDetails from '../assets/products.json'
import styled from 'styled-components'
import Cart from './Cart'

const Headphones = () => {
    const [count, setCount] = useState(0)
    const [productID, setProductID] = useState([]);

    const addToCart = (id, inStock, price, currency) => {
        if (inStock) {
            alert("Added to cart");
            setCount(count + 1)
            setProductID(old => [...old, id])
        }
        else {
            alert("Product out of stock");
        }
    }

    const DisplayData = ProductDetails.map(
        (info) => {
            return (
                <div key={info.id}>
                    {!info.keyboard ? <BoxWrapper>
                        <img src={info.thumbnail} alt="" />
                        <h1>{info.name}</h1>
                        <p>{info.price} {info.currency}</p>
                        {info.delivery ? <p>Diliverable</p> : <p>Non Diliverable</p>}
                        {info.inStock ? <p>In Stock</p> : <p>Out of Stock</p>}
                        <Button onClick={() => addToCart(info.id, info.inStock, info.price, info.currency)}>Add to cart</Button>
                    </BoxWrapper> : <None></None>}
                </div>
            )
        }
    )

    return (
        <>
            <Cart count={count} productID={productID} />
            <ProductWrapper>{DisplayData}</ProductWrapper>
        </>
    )
}

export default Headphones

const ProductWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #9A9CE9;
    padding: 20px;
    gap: 50px;
    flex-wrap: wrap;
    min-height: 100vh;
`

const None = styled.div`
    display: none;
`

const BoxWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #A3DCEF;
    gap: 20px;
    flex-direction: column;
    width: 300px;
    border-radius: 10px;
    flex-wrap: wrap;
    padding-bottom: 20px;
    img {
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        width: 100%;
        height: 200px;
        object-fit: cover;
        background: #fff;
    }
`

const Button = styled.button`
    background: #9A9CE9;
    border-radius: 3px;
    border: 2px solid #fff;
    padding: 10px 16px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    :hover {
        color: #9A9CE9;
        background: transparent;
        border: 2px solid #9A9CE9;
    }
`