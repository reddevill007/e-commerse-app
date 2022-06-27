import React from 'react'
import ProductDetails from '../assets/products.json'
import styled from 'styled-components'

const Keyboards = () => {
    const DisplayData = ProductDetails.map(
        (info) => {
            return (
                <div>
                    {info.keyboard ? <BoxWrapper>
                        <img src={info.thumbnail} alt="" />
                        <h1>{info.name}</h1>
                        <p>{info.price} {info.currency}</p>
                        {info.delivery ? <p>Diliverable</p> : <p>Non Diliverable</p>}
                        {info.inStock ? <p>In Stock</p> : <p>Out of Stock</p>}
                    </BoxWrapper> : <None></None>}
                </div>
            )
        }
    )
    return (

        <ProductWrapper>{DisplayData}</ProductWrapper>
    )
}

export default Keyboards

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