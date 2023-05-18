import React from 'react';
import styled from 'styled-components';

export default function Main({ title, price, description }) {

    return (
        <>
            <ProductWrapper>
                <Title>{title}</Title>
                <Message>{description}</Message>
            </ProductWrapper>
            <PriceWrapper>
                <Price>{price}</Price>
                <BuyButton>BUY NOW</BuyButton>
            </PriceWrapper>
            </>
    );
}
const ProductWrapper = styled.div`
    margin-top: 0;
    height: 108px;
    z-index:1;
`;

const Title = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    color: #2b2835;
    font-family: Montserrat;
    font-size: 50px;
    font-weight: 500;
    line-height: 55px;
`;

const Message = styled.p`
    margin-bottom: 0;
    color: #030303;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 21.0145px;
    z-index: 1;
`;

const PriceWrapper = styled.div`
    margin-top: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: start;
    align-items: center;
`;

const Price = styled.p`
    color: #9D8220;
    font-family: Montserrat;
    font-size: 25px;
    font-weight: 600;
`;

const BuyButton = styled.button`
    width: 145px;
    height: 41px;
    border: none;
    border-radius: 24px;
    background: #000000;
    background-blend-mode: normal;
    color: #ffffff;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    z-index:0;
`;