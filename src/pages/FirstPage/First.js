import React from 'react';
import styled from 'styled-components';

import BuyButton from '../../literal-sauce-drip/BuyButton/BuyButton';
import theme from '../../literal-sauce-drip/theme';

export default function First() {
    return (
        <Section>
            <PriceWrapper>
                <BeatsStudi>Beats Studio3 Wireless</BeatsStudi>
                <Experience>Experience your<br />music like never before.</Experience>
                <BuyContainer>
                    <Price>$299.95</Price>
                    <BuyButton background={theme.colors.yellow} color={theme.colors.black} />
                </BuyContainer>
                <AppleMusic>$60 Apple Music gift card with purchase of select Beats products.*</AppleMusic>
            </PriceWrapper>
        </Section>
    );
}

const Section = styled.section`
    margin-top: ${theme.header.height};
    width: 100%;
    height: calc(616px - ${theme.header.height});
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        height: 100%;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        place-content: center;
    }
`;

const HeadphoneWrapper = styled.div`
    position: relative;
    width: 100%;
`;

const Image = styled.img`
    position: absolute;
    top: 0;
`


const PriceWrapper = styled.div`
    width: 100%;
    color: ${theme.colors.white};
`;

const BeatsStudi = styled.p`
    font-family: Montserrat-normal;
    font-weight: medium;
    letter-spacing: 0.0625rem;  

    @media (max-width: 768px) {
        color: black;
    }
`;

const Experience = styled.h3`
    margin-top: 0.84375rem;
    font-family: Montserrat-bold;
    font-size: 2.5rem;
    line-height: 2.6875rem;

    @media (max-width: 768px) {
        color: black;
    }
`;

const BuyContainer = styled.div`
    margin-top: 2.5em;
    display: flex;
    align-items: center;
    column-gap: 2.1875em;
`;

const Price = styled.p`
    margin: 0;
    color: #f2f2f2;
    font-family: Montserrat-regular;
    font-size: 2.5rem;

    @media (max-width: 768px) {
        color: black;
    }
`;

const AppleMusic = styled.p`
    margin-top: 1.07692em;
    font-size: 0.8125rem;
    font-family: Montserrat-regular;
    font-weight: 500;
    line-height: 19.62px;
    
    color: ${theme.colors.yellow};

    @media (max-width: 768px) {
        color: black;
    }
`;