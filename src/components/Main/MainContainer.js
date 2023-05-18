import React from 'react';
import styled from 'styled-components';

export default function Main() {
    const screenWidth = window.innerWidth;
    const imageSrc = screenWidth <= 768 ? 'images/headphone_mobile.png' : 'images/headphone_desktop.png';

    return (
        <MainContainer>
            <HeadphoneWrapper>
                <Image src={imageSrc} />
            </HeadphoneWrapper>
            <PriceWrapper>
                <BeatsStudi>Beats Studio3 Wireless</BeatsStudi>
                <Experience>Experience your</Experience>
                <Experience>music like never before.</Experience>
                <BuyContainer>
                    <Price>$299.95</Price>
                    <BuyButton>
                        BUY NOW
                    </BuyButton>
                </BuyContainer>
                <AppleMusic>$60 Apple Music gift card with purchase of select Beats products.*</AppleMusic>
            </PriceWrapper>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    width: 100%;
    height: 616px;
    display: grid;
    grid-template-columns: 60% 40%;
    align-items: center;
    align-content: space-between;

    @media (max-width: 768px) {
        height: 100%;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        place-content: center;
    }
`;

const HeadphoneWrapper = styled.div``;

const Image = styled.img`
    width: 100%;
`


const PriceWrapper = styled.div`
    width: 100%;
`;

const BeatsStudi = styled.p`
    color: #FFFFFF;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;  

    @media (max-width: 768px) {
        color: black;
    }
`;

const Experience = styled.h3`
    margin-top: 13px;
    margin-bottom: 5px;
    color: #FFFFFF;
    font-family: Montserrat;
    font-size: 40px;
    font-weight: 700;
    line-height: 43px;

    @media (max-width: 768px) {
        color: black;
    }
`;

const Price = styled.p`
    margin: 0;
    color: #F2F2F2;
    font-family: Montserrat;
    font-size: 40px;
    font-weight: 400;

    @media (max-width: 768px) {
        color: black;
    }
`;

const BuyContainer = styled.div`
    width: 340px;
    margin-top: 40px;
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: start;
    align-items: center;
    gap: 10px;
`;

const BuyButton = styled.div`
    width: 170px;
    height: 41px;
    display: grid;
    place-items: center;
    place-content: center;
    border-radius: 24px;
    background: #FFC700;
    background-blend-mode: normal;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
`;

const AppleMusic = styled.p`
    margin: 0;
    color: #FFC700;
    font-family: Montserrat;
    font-size: 13px;
    font-weight: 500;
    line-height: 19.62px;

    @media (max-width: 768px) {
        color: black;
    }
`;