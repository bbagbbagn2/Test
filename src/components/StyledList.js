import React from 'react';
import styled from 'styled-components';

export default function Main({ title, price, description }) {

    return (
        <PriceBox>
            <ProductWrapper>
                <Title>{title}</Title>
                <Message>{description}</Message>
            </ProductWrapper>
            <PriceWrapper>
                <Price>{price}</Price>
                <BuyButton>BUY NOW</BuyButton>
            </PriceWrapper>
            </PriceBox>
    );
}

const PriceBox = styled.div`
    position: relative;
    bottom: 0;
`
const ProductWrapper = styled.div`
    margin-top: 0;
    height: 108px;
    z-index:1;
`;

const Title = styled.p`
    color: #2b2835;
    font-family: Montserrat-medium;
    font-size: 50px;
    line-height: 55px;
`;

const Message = styled.p`
    color: #030303;
    font-family: Montserrat-regular;
    font-size: 14px;
    line-height: 21.0145px;
    z-index: 1;
`;

const PriceWrapper = styled.div`
    margin-top: 0;
    display: flex;
    column-gap: 29px;
    align-items: center;
`;

const Price = styled.p`
    color: #9D8220;
    font-size: 25px;
    font-weight: 600;
`;

const BuyButton = styled.button`
    width: 145px;
    height: 41px;
    border-radius: 24px;
    background: #000;
    color: #fff;
    font-family: Montserrat-semibold;
    font-size: 14px;
    cursor: pointer;
`;