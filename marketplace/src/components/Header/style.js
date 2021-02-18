import styled from 'styled-components'

export const Header = styled.div`
    width: 100%;
    padding: 0 2%;
    display: flex;
    justify-content: space-between;
    background-color: #0e0012;
    color: #bc7ffb;
    align-items: center;
   height: 14vh;
   position: static;
   box-shadow: 0px 2px 4px 0px rgba(50, 50, 50, 0.75)
`

export const Logo = styled.img`
   height: 80%;
`

export const SearchWrapper = styled.section`
   position: relative;
   border-radius: 20px;
   background-color: rgba(254, 240, 255, 0.1);
   &&{
      :hover{
       background-color: rgba(244, 139, 255, 0.1);
   }};
   width: 40vw !important
`