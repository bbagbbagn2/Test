import React from 'react';
import styled from 'styled-components';

export default function Main() {

    return (
        <SignContainer>
            <SignWrapper>
                <Hearitfirs>Hear it first</Hearitfirs>
                <GetUpdates>Get updates on product drops, collaborations and all things Beats.</GetUpdates>
                <EnterYour placeholder='Enter your email' />
                <SignButton>sign up</SignButton>
            </SignWrapper>
        </SignContainer>
    );
}

const SignContainer = styled.div`
    margin-top: 70px;
    height: 334.81px;
    display: grid;
    place-items: center;
    background: #f8f8f9;
    background-blend-mode: normal;
`;

const SignWrapper = styled.div`
    display: grid;
    place-items: center;
`;

const Hearitfirs = styled.p`
    color: #2b2835;
    font-family: Montserrat;
    font-size: 50px;
    font-weight: 700;
    line-height: 55px;
    margin:0;
`;

const GetUpdates = styled.p`
    color: #030303;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 47px;

`;

const EnterYour = styled.input`
    margin-top: 0;
    padding-left: 20px;
    width: 100%;
    height: 36px;
    border-radius: 18px;
    border: 1px solid #BFBFBF;
    color: #030303;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;

    @media (max-width: 768px) {
        width: 80%;
    }

`;

const SignButton = styled.button`
    margin-top: 19px;
    width: 105%;
    height: 41px;
    border: none;
    border-radius: 24px;
    background: #FFC700;
    background-blend-mode: normal;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 85%;
    }
`;
