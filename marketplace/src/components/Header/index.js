import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as St from './style';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../assets/Logo.png';
import CartIcon from '@material-ui/icons/ShoppingCartSharp';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';

const Cart = styled(CartIcon)`
    color:#f0d2fc;
    cursor: pointer;
    &&{
      :hover{
        color: #bc7ffb;
        transform: scale(1.1);
      }
    }
`

const Search = styled(SearchIcon)`
    cursor: pointer;
    &&{
      :hover{
        color: #bc7ffb;
        transform: scale(1.1);
      }
    }
`

const useStyles = makeStyles((theme) => ({
    search: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchInput: {
        marginLeft: 50,
        color: '#bc7ffb!important'
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

const Header = () => {
    const cart = useSelector(state => state.cart)
    let history = useHistory()
    const classes = useStyles();
    const [ cartNumber, setCartNumber ] = useState("0")
    const goToCart = () => { history.push('cart') }

    useEffect(() =>{
        const itensCart = cart.length
        setCartNumber(itensCart.toString())
    }, [cart])

    return (
        <St.Header>
            <St.Logo src={Logo} alt='Logo' />

            <St.SearchWrapper className={classes.search}>
                <div className={classes.searchIcon}>
                    <Search />
                </div>
                <InputBase
                    className={classes.searchInput}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </St.SearchWrapper>

            <section>
                <IconButton aria-label="Carrinho" onClick={goToCart}>
                    <Badge badgeContent={cartNumber} color="secondary">
                        <Cart style={{ fontSize: 50 }} />
                    </Badge>
                </IconButton>            
            </section>
        </St.Header>
    );
}

export default Header