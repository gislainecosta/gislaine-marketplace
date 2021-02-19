import styled from 'styled-components';

export const Home = styled.div`
   width: 100%;
   display: grid;
   justify-content: space-between;
   padding: 1vw 0.1vw 2vw 0;
   margin-left: 22%;
   grid-template-columns: 1fr 1fr 1fr;
`
export const Product = styled.article`
   width: 22vw;
   height: 33vw;
   display: flex;
   flex-direction: column;
   align-items: center;
   cursor: pointer;
   &&{
      :hover{
        transform: scale(1.05);
      }

      :active{
        transform: scale(0.98);
      }
    }
`
export const PhotoContainer = styled.div`
   border: 2px solid #16011d;
   border-radius: 3%;
   width: 100%;
   height: 80%;
   overflow: hidden;
`
export const PhotoProduct = styled.img`
   width: 100%;
`
export const ProductData = styled.section`
   padding: 2% 5%;
   display: grid;
   grid-template-columns: 2fr 1fr;
   grid-template-rows: 1fr 1fr;
   width: 100%;
   column-gap: 7%;
   row-gap: 5%;
`
export const ProductTitle = styled.p`
   grid-area: 1/1/3/2;
`

export const ProductPrice = styled.p`
   grid-area: 1/2/2/3;
   text-align: right;
   font-weight: bold;
`
export const ProductInstallments = styled.p`
   grid-area: 2/2/3/3;
   text-align: right;
`