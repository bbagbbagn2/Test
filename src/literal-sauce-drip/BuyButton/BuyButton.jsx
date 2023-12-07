import React from 'react';
import styled from 'styled-components';

export default function Main({ background, color }) {
    return (
            <BuyButton background={background} color={color}>BUY NOW</BuyButton>
    );
}

const BuyButton = styled.button`
    width: 12.143em;
    height: 2.92917em;
    border-radius: 24px;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    
    background: ${props => props.background};
    color: ${props => props.color};
`;