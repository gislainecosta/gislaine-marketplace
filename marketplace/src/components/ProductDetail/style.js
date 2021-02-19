import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

export const InputCheckbox = withStyles({
    root: {
        color: 'rgba(0,0,0,0)',
        '&$checked': {
            color: '#16011d',
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

export const ButtonProduct = withStyles(() => ({
    root: {
        borderRadius: '10%',
        backgroundColor: ' #280035 !important',
        '&:hover': {
            backgroundColor: '#350346 !important',
        },
    },
}))(Button);

export const ProductTitle = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    width: 100%;
    text-align: center;
    margin: 2% 0;
`
export const ProductContainer = styled.div`
    width: 100%;
    padding: 2%;
    display: flex;
    justify-content: space-between;
`
export const ProductPhoto = styled.img`
    width: 58%;
    border: 1px solid #16011d;
    border-radius: 2%;
`
export const ProductDetails = styled.section`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
`
export const ProductSizes = styled.section`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    margin: 5%;
`
export const ProductPrice = styled.p`
    font-weight: bold;
    font-size: 1.4rem;
    margin-top: 10%;
`
export const ProductFinalPrice = styled.p`
    font-weight: bold;
    font-size: 1.5rem;
    font-style: italic;
    color: #6b0101;
`
export const ProductDetailsTitle = styled.p`
    font-weight: bold;
    font-size: 1.3rem;
    margin-top: 10% ;
`
export const Quantity = styled.section`
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 10%;
`
export const InputQuantity = styled.input`
    border: none;
    height: 100%;
    width: 20%;
    border-bottom: 1px solid #16011d;
    margin: 11% 0 0 8%;
    padding: 0 0 1% 4%;
    &&{
        :focus{
            box-shadow: 0 0 0 0;
            outline: 0;
      }
    };
`
export const Buttons = styled.section`
    height: 13vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`