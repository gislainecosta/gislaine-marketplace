import React, { useState, useEffect } from "react";
import * as St from './style';
import { useSelector, useDispatch } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';

import noPhotoProduct from '../../assets/noPhoto.jpg';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const ProductDetail = (props) => {
    const dispatch = useDispatch()
    const products = useSelector(state=> state.products)
    const cart = useSelector(state => state.cart)
    const [openDetail, setOpenDetail] = useState('')
    const [product, setProduct] = useState("")
    const [sizeSelected, setSizeSelected] = useState({})

    const [productsSize, setProductsSize] = useState("")

    useEffect(() => {
        const productSelected = products.filter((product) => {
            return product.style === props.productId
        })
        setProduct(productSelected[0])
    }, [ props.productId, products ])

    useEffect(() => {
        setOpenDetail(props.isOpen)
    }, [props.isOpen])

    useEffect(() => {
        if (product !== "" && product !== undefined) {
            setProductsSize(product.sizes.map((size) => {
                return <FormControlLabel
                    label={size.size}
                    disabled={!size.available}
                    control={<St.InputCheckbox
                        key={size.sku}
                        checked={sizeSelected.sku === size.sku}
                        onChange={(event) => handleChangeSize(event, size.sku, size.size)} />}
                />
            }))
        }
    }, [product, sizeSelected])

    const addCart = () => {
        if (sizeSelected === null || !sizeSelected?.quantity ){
            alert("Por favor, selecione um tamanho e uma quantidade")
            return 
        }

        const productCart = cart.filter((product) => {return product.sku === sizeSelected.sku})

        if (productCart.length !== 0){
            alert("O produto já está no carrinho")
            return 
        }

        const productQuantity = Number(sizeSelected.quantity)
        const productPriceUnity = Number(product.actual_price.slice(4).replace(",", "."))
        const totalPrice = productQuantity * productPriceUnity

        const payload = {
            productId: props.productId,
            size: sizeSelected.size,
            quantity: sizeSelected.quantity,
            image: product.image,
            price: product.actual_price,
            name: product.name,
            sku: sizeSelected.sku,
            total: totalPrice
         }

         dispatch({ type: 'ADD_CART', payload})

         props.closeDetail()
      setSizeSelected({})
    }

    const handleChangeQuantity = (number) => {
        setSizeSelected({
            ...sizeSelected,
            quantity: number
        })
    };

    

    const handleChangeSize = (event, sku, size) => {
        if (event.target.checked) {
            setSizeSelected({
                ...sizeSelected,
                size: size,
                sku: sku
            })
        } else {
            setSizeSelected({
                ...sizeSelected,
                size: ""
            })
        }
    };

    return (
        <Dialog fullWidth={true} open={openDetail} onClose={props.closeDetail} id='product-detail'>
            <St.ProductTitle>{product?.name}</St.ProductTitle>
            <St.ProductContainer>
                <St.ProductPhoto src={product?.image !== "" ? product?.image : noPhotoProduct} alt={product?.name} />
                <St.ProductDetails>
                    <St.ProductPrice>{product?.on_sale ? 'De: ' + product?.regular_price : product?.regular_price}</St.ProductPrice>
                    {product?.on_sale ? <St.ProductFinalPrice>Por: {product?.actual_price}</St.ProductFinalPrice> : <></>}

                    <St.ProductDetailsTitle>Cor: {product?.color}</St.ProductDetailsTitle>
                    <St.ProductDetailsTitle>Tamanhos diponíveis:</St.ProductDetailsTitle>
                    <St.ProductSizes>
                        {productsSize}
                    </St.ProductSizes>

                    <St.Quantity>
                        <St.ProductDetailsTitle>Quantidade:</St.ProductDetailsTitle>
                        <St.InputQuantity
                            type='number'
                            value={sizeSelected.quantity}
                            onChange={(event) => handleChangeQuantity(event.target.value)}
                            min="0"
                            max="10"
                        />
                    </St.Quantity>

                    <St.Buttons>
                        <St.ButtonProduct
                            variant="contained"
                            onClick={addCart}
                            size="small"
                        >
                            Adicionar ao Carrinho
                        </St.ButtonProduct>
    
                        <St.ButtonProduct
                            variant="contained"
                            onClick={() => {
                                props.closeDetail()
                               setSizeSelected({})
                            }}
                            size="small"
                        >
                            Fechar
                        </St.ButtonProduct>
                    </St.Buttons>
                </St.ProductDetails>
            </St.ProductContainer>
        </Dialog>
    )
}

export default ProductDetail