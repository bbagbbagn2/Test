import React from 'react';
import styled from 'styled-components';

import theme from '../literal-sauce-drip/theme';

export default function StyledButton({ title, price, description }) {
    return (
        <BuyBox>
                <Heading>{title}</Heading>
                <Description>{description}</Description>
            <PriceBox>
                <Price>{price}</Price>
                <BuyButton>BUY NOW</BuyButton>
            </PriceBox>
        </BuyBox>
    );
}

const BuyBox= styled.div`
    position: relative;
    bottom: 0;
`

const Heading = styled.p`
    color: #2b2835;
    font-family: Montserrat-medium;
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 3.4375rem;
`;

const Description = styled.p`
    color: #030303;
    font-family: Montserrat-regular;
    font-size: 0.875rem;
    line-height: 1.3125rem;
    z-index: 1;
`;

const PriceBox = styled.div`
    margin-top: 1.375em;
    display: flex;
    column-gap: 1.3125em;
    align-items: center;
    justify-content: flex-start;
`;

const Price = styled.p`
    color: #9d8220;
    font-size: 1.5625rem;
    font-weight: 600;
    line-height: 1.875rem;
`;

const BuyButton = styled.button`
    width: 10.357143em;
    height: 2.928572em;
    border-radius: 24px;
    font-size: 0.875rem;
    font-family: Montserrat-medium;
    font-weight: 600;
    cursor: pointer;
    
    background: ${theme.colors.black};
    color: ${theme.colors.white};
`;