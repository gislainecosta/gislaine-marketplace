import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import * as St from './style';
import { useSelector } from 'react-redux';

import TuneIcon from '@material-ui/icons/Tune';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import StraightenIcon from '@material-ui/icons/Straighten';
import StoreIcon from '@material-ui/icons/Store';
import RedeemIcon from '@material-ui/icons/Redeem';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Navigation = () => {
    const products = useSelector(state => state.products)
    const sizes = useSelector(state => state.sizes)
    const [state, setState] = useState({ });

    let history = useHistory();

    const goToHome = () => {
        history.push('/')
    }

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    console.log(state)

    return (
        <St.Navigation>
            <St.TitleButtom onClick={goToHome}>
                <StoreIcon style={{ fontSize: 30 }} />
                <St.FilterTitle>PÁGINA INICIAL</St.FilterTitle>
            </St.TitleButtom>

            <St.TitleButtom>
                <RedeemIcon style={{ fontSize: 30 }} />
                <St.FilterTitle>PROMOÇÕES</St.FilterTitle>
            </St.TitleButtom>

            <St.Title>
                <TuneIcon style={{ fontSize: 30 }} />
                <St.FilterTitle>FILTROS</St.FilterTitle>
                <St.ButtomDelete aria-label="Apagar Filtros">
                    <St.IconDelete />
                </St.ButtomDelete>
            </St.Title>

            <St.Filter Filter>
                <St.FilterCategory>
                    <St.FilterCategoryTitle>
                        <StraightenIcon style={{ fontSize: 20 }} />
                        <St.FilterSubtitle>Tamanho</St.FilterSubtitle>
                    </St.FilterCategoryTitle>
                    <St.FilterBody>
                        {
                           sizes.map((size) => {
                                return <FormControlLabel
                                    control={<St.InputCheckbox key={size} checked={size.checked} onChange={handleChange} name={size} />}
                                    label={size}
                                />
                            })
                        }
                    </St.FilterBody>
                </St.FilterCategory>

                <St.FilterCategory>
                    <St.FilterCategoryTitle>
                        <ColorLensIcon style={{ fontSize: 20 }} />
                        <St.FilterSubtitle>Cores</St.FilterSubtitle>
                    </St.FilterCategoryTitle>
                    <St.FilterBody>
                        {
                            products.map((product) => {
                                return <FormControlLabel
                                    control={<St.InputCheckbox key={product.style} checked={product.checked} onChange={handleChange} name={product.color} />}
                                    label={product.color}
                                />
                            })
                        }
                    </St.FilterBody>
                </St.FilterCategory>

                <St.FilterCategory>
                    <St.FilterCategoryTitle>
                        <CreditCardIcon style={{ fontSize: 20 }} />
                        <St.FilterSubtitle>Forma de Pagamento</St.FilterSubtitle>
                    </St.FilterCategoryTitle>

                    <St.FilterBody>
                        <FormControlLabel
                            control={<St.InputCheckbox checked={state.aVista} onChange={handleChange} name="aVista" />}
                            label="À Vista"
                        />
                        <FormControlLabel
                            control={<St.InputCheckbox checked={state.parcelado} onChange={handleChange} name="parcelado" />}
                            label="Parcelado"
                        />
                    </St.FilterBody>
                </St.FilterCategory>
            </St.Filter>


        </St.Navigation>
    );
}

export default Navigation