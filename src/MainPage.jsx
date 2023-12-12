import React from 'react';
import styled from 'styled-components';

import Header from './literal-sauce-drip/Header/Header.jsx';
import FirstSection from './pages/FirstPage/First.jsx';
import SecondSection from './pages/SecondPage/Second.jsx';
import ItemListSection from './pages/ItemSection/ItemSection.jsx';
import SignUpPage from './pages/SignUpPage/SignUpPage.jsx';
import Footer from './literal-sauce-drip/Footer/Footer.jsx';

import ToTopButton from './components/ToTop';

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
                <SecondSection />
                <ItemListSection />
                <SignUpPage />
            </Page>
            <Footer />
            <ToTopButton />
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
    padding: 0 6.459%;
`;

const ThreeWrapper = styled(Wrapper)`
    @media (max-width: 768px) {
        margin: 0;
    }
`;

const ContainerThree = styled.div`
    margin-top: 8%;
`;

const ItemContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    row-gap: 34px;
    justify-content: space-between;
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

