import styled from 'styled-components';

export const Cart = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   padding: 1vw 0.1vw 2vw 0;
`
export const CartTitle = styled.p`
   text-align: center;
   font-weight: bold;
   font-size: 2rem;
   margin-bottom: 5%;
`
export const Product = styled.article`
   width: 100%;
   display: flex;
   padding: 1vw 0.1vw 2vw 0;
`
export const Details = styled.section`
   width: 50%;
   display: flex;
   flex-direction: column;
   padding: 1vw 0.1vw 2vw 0;
   margin-left: 8%;
`
export const Image = styled.img`
   width: 20%;
   border-radius: 10%10%;
   border: 1px solid #16011d;
`
export const ProductTitle = styled.p`
   font-weight: bold;
   font-size: 1.3rem;
`
export const ProductDetails = styled.p`
   font-size: 1.2rem;
   margin-top: 2%;
`
export const ProductTotal = styled.p`
font-weight: 400;
   font-size: 1.3rem;
   margin-top: 2%;
   text-align: right;
`
export const CartTotal = styled.p`
   font-weight: bold;
   font-size: 1.5rem;
   margin-top: 2%;
   text-align: right;
   margin-bottom: 5%;
`