import React from 'react';
import styled from 'styled-components';
import Header from './literal-sauce-drip/Header/Header';
import FirstSection from './pages/FirstPage/First.js';
import SecondSection from './pages/SecondPage/Second.js';
import SignUpPage from './pages/SignUpPage/SignUpPage.js';
import Footer from './literal-sauce-drip/Footer/Footer';
import StyledList from './components/StyledList';
import ToTop from './components/ToTop';
import product from './data/data.js';

export default function Main() {

    return (
        <>
            <Header />
            <Page>
                <ContainerOne>
                    <Wrapper>
                        <FirstSection />
                    </Wrapper>
                </ContainerOne>
                <ContainerTwo>
                    <Wrapper>
                        <SecondSection />
                    </Wrapper>
                </ContainerTwo>
                <ContainerThree>
                    <ThreeWrapper>
                        <ItemContainer>
                            {product.map(product => (
                                <div key={product.id}>
                                    {product.id === 1 && (
                                        <ListWrapper>
                                            <ImageWrapper>
                                                <Image src={product.url} width="263px" top="-6px" left="20px" marginbottom="-1px;" />
                                                <StyledList title={product.name} description={product.description} price={product.price} />
                                            </ImageWrapper>
                                        </ListWrapper>
                                    )}
                                    {product.id === 2 && (
                                        <ListWrapper>
                                            <ImageWrapper>
                                                <Image src={product.url} width="319.35px" top="0" left="10px" marginbottom="70.41px" />
                                                <StyledList title={product.name} description={product.description} price={product.price} />
                                            </ImageWrapper>
                                        </ListWrapper>)}
                                    {product.id === 3 && (
                                        <ListWrapper>
                                            <ImageWrapper>
                                                <Image src={product.url} width="282px" top="17px" left="28px" marginbottom="21px" />
                                                <StyledList title={product.name} description={product.description} price={product.price} />
                                            </ImageWrapper>
                                        </ListWrapper>
                                    )}
                                    {product.id === 4 && (
                                        <ListWrapper>
                                            <ImageWrapper>
                                                <Image src={product.url} width="229px" top="10px" left="102px" marginbottom="-134px" />
                                                <StyledList title={product.name} description={product.description} price={product.price} />
                                            </ImageWrapper>
                                        </ListWrapper>
                                    )}
                                    {product.id === 5 && (
                                        <ListWrapper>
                                            <ImageWrapper>
                                                <Image src={product.url} width="298px" top="-22px" left="25px" marginbottom="-90px" />
                                                <StyledList title={product.name} description={product.description} price={product.price} />
                                            </ImageWrapper>
                                        </ListWrapper>
                                    )}
                                    {product.id === 6 && (
                                        <ListWrapper>
                                            <ImageWrapper>
                                                <Image src={product.url} width="231px" top="95px" left="94px" marginbottom="-106px" />
                                                <StyledList title={product.name} description={product.description} price={product.price} />
                                            </ImageWrapper>
                                        </ListWrapper>
                                    )}
                                </div>
                            ))}
                        </ItemContainer>
                    </ThreeWrapper>
                </ContainerThree>
                <ContainerFour>
                    <Wrapper>
                        <SignUpPage />
                    </Wrapper>
                </ContainerFour>
                <Footer />
            </Page>
            <ToTop />
        </>
    );
}

const Page = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;

    @media (max-width: 768px) {
        display: grid;
        grid-template-rows: 15% 15% 1fr 7% 9%;
    }
`

const ContainerOne = styled.div`
    width: 100%;
    height: 38em;
    background: #2B2835;

    @media (max-width: 768px) {
        height: 60vw;
    }
`;

const Wrapper = styled.div`
    padding: 0 6%;
`;
const ThreeWrapper = styled(Wrapper)`
    @media (max-width: 768px) {
        margin: 0;
    }
`;


const ContainerTwo = styled.div`
    margin-top: 150px;
    width: 100%;

    @media (max-width: 768px) {
        margin-top: 0;
    }
`;

const ContainerThree = styled.div`
    margin-top: 8%;
`;

const ItemContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(401px,1fr));
    column-gap: 15px;
    row-gap: 34px;
    justify-items: center;
    align-items: center;
`;

const ListWrapper = styled.div`
    padding: 5px 30px;
    width: 333px;
    height: 560px;
    display: grid;
    align-items: center;
    background: #F8F8F9;
    background-blend-mode: normal;
`;

const ImageWrapper = styled.div`

`;

const Image = styled.img`
    position: relative;
    z-index: 0;
    width: ${(props) => props.width};
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    margin-bottom: ${(props) => props.marginbottom || "auto"};
`;

const ContainerFour = styled.div`
    width: 100%;
`;

const ContainerFive = styled.div`
    margin-top: 64.19px;
    width: 100%;
    height: 100%;
    padding-top: 54px;
    background: #2B2835;
    background-blend-mode: normal;

    @media (max-width: 768px) {
        padding-top: 20px;
    }
`;

