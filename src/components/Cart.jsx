import React from 'react'
import styled from 'styled-components'
import Products from '../assets/products.json'

const Cart = ({ count, productID }) => {
    var noDupPorduct = [];
    var noDupPorduct = productID.filter(function (elem, pos) {
        return productID.indexOf(elem) === pos;
    });

    const showCart = () => {
        const cart = document.getElementById('cart');
        cart.style.display = 'flex';
    }

    const closeCart = () => {
        const cart = document.getElementById('cart');
        cart.style.display = 'none';
    }

    const DisplayData = noDupPorduct.map(
        (info, i) => {
            const arr = []
            Object.keys(Products).forEach(key => arr.push({ name: key, value: Products[key] }))
            let flag = false;
            let money = 0;
            for (let j = 0; j < arr.length; j++) {
                if (arr[j].value.id === info) {
                    flag = true;
                    money = arr[i].value.price;
                }
            }

            const updateMoney = (mon) => {
                const moneyBox = document.getElementById('mon');
                mon = mon + mon;
                moneyBox.innerHTML = mon;
            }
            return (
                <div key={info}>
                    {
                        flag ? <CartBox>
                            <img src={arr[i].value.thumbnail} alt="" />
                            <p>{arr[i].value.name}</p>
                            <p id='mon'>{money} </p> <p>{arr[i].value.currency}</p>
                            <button className='btn' onClick={() => { updateMoney(money) }}>+ 1</button>
                        </CartBox> :
                            <p>false</p>
                    }
                </div>
            )
        }
    )

    return (
        <div>
            <CartMain>
                <button onClick={() => showCart()}>Cart {count}</button>
            </CartMain>
            <CartBody id='cart'>
                <button onClick={() => closeCart()}>close</button>
                <h1>Your Cart</h1>
                {DisplayData}
            </CartBody>
        </div>
    )
}

export default Cart

const CartMain = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;
`

const CartBody = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background: #A3DCEF;
    display: none;
    flex-direction: column;
    button {
        position: absolute;
        top: 30px;
        right: 30px;
    }

    h1 {
        margin-bottom: 40px;
    }
`

const CartBox = styled.div`
    display: flex;
    width: 100%;
    background: #9A9CE9;
    border-radius: 5px;
    gap: 20px;
    position: relative;
    margin-bottom: 20px;
    img{
        width: 50px;
        height: 50px;
        object-fit: cover;
    }

    .btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
`