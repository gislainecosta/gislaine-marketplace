import React, { useEffect, useState } from 'react';
import * as St from './style';
import { useSelector } from 'react-redux';
import noPhotoProduct from '../../assets/noPhoto.jpg';


const Cart = () => {
    const products = useSelector(state => state.products)
    const cart = useSelector(state => state.cart)
    const [ cartList, setCartList ] = useState([])
    const [cartTotal, setCartTotal] = useState('0,00')
    const prices = []
    
    useEffect(() =>{
        setCartList(cart.map((product) => {
            prices.push(product.total)
            return <St.Product key={product.productId}>
                <St.Image src={product?.image !== "" ? product?.image : noPhotoProduct} alt={product.name} />
                <St.Details>
                    <St.ProductTitle>{product.name}</St.ProductTitle>
                    <St.ProductDetails><b>Tamanho: </b>{product.size}</St.ProductDetails>
                    <St.ProductDetails><b>Quantidade: </b>{product.quantity}</St.ProductDetails>
                    <St.ProductDetails><b>Valor: </b>{product.price}</St.ProductDetails>
                    <St.ProductTotal>Total: R$ {product?.total?.toString().replace(".", ",")}</St.ProductTotal>
                </St.Details>
            </St.Product>
        }))

        if(prices.length !== 0){
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            setCartTotal(prices.reduce(reducer).toString().replace(".", ","))
        }

        
    }, [cart])

    return (
        <St.Cart>
            <St.CartTitle>CARRINHO</St.CartTitle>
            <St.CartTotal>TOTAL DO CARRINHO: R$ {cartTotal}</St.CartTotal>
            { cartList }
        </St.Cart>
    );
}

export default Cart