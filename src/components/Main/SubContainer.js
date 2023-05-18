import React from 'react';
import styled from 'styled-components';

export default function Main() {

    const screenWidth = window.innerWidth;
    const isSmallScreen = screenWidth <= 768;
    const imageSrc = isSmallScreen ? 'images/pill_mobile.png' : 'images/pill_desktop.png';

    return (
        <SubContainer>
            <TitleContainer>
                <PortableWi>Portable Wireless Speaker</PortableWi>
                <BeatsPill>Beats Pill</BeatsPill>
                <AvailableC>Available Color</AvailableC>
                <ColorWrapper>
                    <FindYourCo>Find your Color</FindYourCo>
                    <ColorList>
                        <Oval />
                        <OvalCopy background='#dd5656' />
                        <OvalCopy background='#000000' />
                    </ColorList>
                </ColorWrapper>
                <PriceWrapper>
                    <Copy>$299.95</Copy>
                    <BuyButton>BUY NOW</BuyButton>
                </PriceWrapper>
                <AppleMusic>$60 Apple Music gift card with purchase of select Beats products.*</AppleMusic>
            </TitleContainer>
            <SpeakerContainer>
                <Image src={imageSrc} />
            </SpeakerContainer>
        </SubContainer>
    );
}

const SubContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const TitleContainer = styled.div`
`;

const PortableWi = styled.p`
    margin-bottom: 5px;
    color: #2B2835;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: Regular;
`;

const BeatsPill = styled(PortableWi)`
    margin-top: 2px;
    font-size: 50px;
    font-weight: 700;
    line-height: 55px;
`;

const AvailableC = styled(PortableWi)`
    margin-top: 15px;
    font-size: 40px;
    line-height: 55px;
`;

const ColorWrapper = styled.div`
    margin-top: 6px;
    margin-bottom: 47px;
`;

const FindYourCo = styled(PortableWi)`
    margin-bottom: 14px;
`;

const ColorList = styled.div`
    width: 147px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

const OvalCopy = styled.div`
    width: 37px;
    height: 37px;
    border: 1px solid #eaeaea;
    border-radius: 19px;
    background: ${(props) => props.background};
    background-blend-mode: normal;
    box-shadow: 0px 2px 1px 1px rgba(0,0,0,0.14);
`;

const Oval = styled.div`
    width: 37px;
    height: 37px;
    border: 1px solid #EAEAEA;
    border-radius: 19px;    
    background: #FFFFFF;
    background-blend-mode: normal;
    box-shadow: 0px 2px 1px 1px rgba(0,0,0,0.14);
`;

const PriceWrapper = styled.div`
    width: 368px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
`;

const Copy = styled(PortableWi)`
    margin: 0;
    font-size: 40px;
`;

const BuyButton = styled.div`
    width: 170px;
    height: 45px;
    display: grid;
    place-items: center;
    border-radius: 24px;
    background: #000000;
    background-blend-mode: normal;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
`;

const AppleMusic = styled.p`
    font-family: Montserrat;
    font-size: 13px;
    font-weight: Medium;
    line-height: 19.62px;
    opacity: 0.5168573;
`;

const SpeakerContainer = styled.div`
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