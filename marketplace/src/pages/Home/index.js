import React, { useEffect, useState } from 'react';
import * as St from './style';
import { useSelector } from 'react-redux'
import ProductDetail from '../../components/ProductDetail'
import noPhotoProduct from '../../assets/noPhoto.jpg'


const Home = () => {
    const products = useSelector(state => state.products)
    const [productsList, setProductsList] = useState();
    const [open, setOpen] = useState(false);
    const [idProduct, setIdProduct] = useState('')

    const closeDetail = () => {
        setOpen(false);
    };

    useEffect(() => {
        setProductsList(products.map((product) => {
            return <St.Product key={product.style}
                onClick={() => {
                    setOpen(true);
                    setIdProduct(product.style)
                }
                }
            >
                <St.PhotoContainer>
                    <St.PhotoProduct src={product?.image !== "" ? product?.image : noPhotoProduct} alt={product.name} />
                </St.PhotoContainer>
                <St.ProductData>
                    <St.ProductTitle><b>{product.name}</b></St.ProductTitle>
                    <St.ProductPrice>{product.actual_price}</St.ProductPrice>
                    <St.ProductInstallments>{product.installments}</St.ProductInstallments>
                </St.ProductData>
            </St.Product>
        }))
        
    }, [products])

    return (
        <St.Home>
            { productsList}
            <ProductDetail closeDetail={closeDetail} isOpen={open} productId={idProduct} />
        </St.Home>
    );
}

export default Home