import React from 'react';
import styled from 'styled-components';

import BuyButton from '../../literal-sauce-drip/BuyButton/BuyButton';
import theme from '../../literal-sauce-drip/theme';

export default function SecondSection() {

    const screenWidth = window.innerWidth;
    const isSmallScreen = screenWidth <= 768;

    return (
        <section>
            <div>
                <Paragraph>Portable Wireless Speaker</Paragraph>
                <Heading>Beats Pill</Heading>
                <Paragraph
                marginTop='0.5em'
                fontSize='2.5em'
                lineHeight='3.4375rem'
                >
                    Available Colors
                </Paragraph>
                <FindColorBox>
                    <Paragraph>Find your Color</Paragraph>
                    <ColorList>
                        <Oval backGround='#fff'/>
                        <Oval backGround='#dd5656' />
                        <Oval backGround='#000' />
                    </ColorList>
                </FindColorBox>
                <BuyButtonbox>
                    <Paragraph fontSize='2.5rem'>$299.95</Paragraph>
                    <BuyButton background={theme.colors.black} color={theme.colors.white} />
                </BuyButtonbox>
                <AppleMusic>$60 Apple Music gift card with purchase of select Beats products.*</AppleMusic>
            </div>
        </section>
    );
}

const Paragraph = styled.p`
    font-family: Montserrat-regular;

    color: ${theme.colors.navy};

    margin-top: ${props => props.marginTop};
    font-size: ${props => props.fontSize};
    line-height: ${(props => props.lineHeight)};
`;

const Heading = styled.p`
    margin-top: 0.46875em;
    font-size: 3.125rem;
    font-family: Montserrat-bold;
    line-height: 3.4375rem;

    color: ${theme.colors.navy};
`;

const FindColorBox = styled.div`
    margin-top: 0.6875em;
`;

const ColorList = styled.div`
    margin-top: 0.90625em;
    width: 9.1875em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

const Oval = styled.div`
    width: 37px;
    height: 37px;
    border: 1px solid #EAEAEA;
    border-radius: 19px;    
    box-shadow: 0px 2px 1px 1px rgba(0,0,0,0.14);

    background: ${props => props.backGround};
`;

const BuyButtonbox = styled.div`
    margin-top: 2.9375em;
    width: 368px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
`;


const AppleMusic = styled.p`
    margin-top: 12px;
    font-family: Montserrat-regular;
    font-weight: 500;
    font-size: 0.92857rem;
    line-height: 19.62px;

    color: ${theme.colors.black};
`;

const SpeakerImageBox = styled.div`
    width: 100%;
    display: grid;
    justify-content: end;

    @media (max-width: 768px) {
        justify-content: center;
    }   
`;

const Image = styled.img`
    width: 100%;
`;