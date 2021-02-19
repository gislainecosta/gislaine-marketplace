import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export const InputCheckbox = withStyles({
   root: {
      color: 'rgba(0,0,0,0)',
      '&$checked': {
         color: '#16011d',
      },
   },
   checked: {},
})((props) => <Checkbox color="default" {...props} />);

export const ButtomDelete = withStyles({
   root: {
      color: '#16011d',
      '& :hover': {
         color:'#45065c',
         transform: 'scale(1.02)'
      },
      marginLeft: '32% !important'
   }
})((props) => <IconButton color="default" {...props} />);

export const IconDelete = withStyles({
   root: {
      color: '#16011d',
   }
})((props) => <DeleteIcon color="default" {...props} />);

export const Navigation = styled.div`
   width: 20%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   color: #0e0012;
   position: static;
   border-right: 1px solid #0e0012;
   margin-right: 4vw;
   position: fixed;
   top:18vh;
   left: 0px;
   z-index: 1;
   padding: 1vw 0.1vw 2vw 2vw;
`
export const Title = styled.div`
   display: flex;
   align-items: center;
`
export const FilterTitle = styled.span`
   margin: 0 0 0 0.5vw;
   font-size: 1.2rem;
   font-weight: bolder;
`
export const FilterSubtitle = styled.span`
   font-size: 1.05rem;
   font-weight: 600;
   margin: 0 0 0 0.5vw;
`
export const TitleButtom = styled.div`
   display: flex;
   margin-bottom: 3vw;
   align-items: center;
   cursor: pointer;
   &&{
      :hover{
        color: #45065c;
        transform: scale(1.02);
      }

      :active{
        transform: scale(0.98);
      }
    }
`
export const Filter = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-start;
   padding: 0.5vw 0  0.5vw 0.5vw;
`
export const FilterCategory = styled.section`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-start;
   font-size: 0.9rem;
   margin-bottom: 1vw;
   padding: 0.5vw 0  0.5vw 0.5vw;
`
export const FilterCategoryTitle = styled.div`
   display: flex;
   flex-wrap: nowrap;   
`

export const FilterBody = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-start;
   font-size: 0.5rem;  
   padding-left: 0.5vw;
`
