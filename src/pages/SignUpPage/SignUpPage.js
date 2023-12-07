import React from 'react';
import styled from 'styled-components';

import theme from '../../literal-sauce-drip/theme';

export default function SignUpPage() {

    return (
        <SignUpSection>
            <InnerContent>
                <Heading>Hear it first</Heading>
                <Paragraph>Get updates on product drops, collaborations and all things Beats.</Paragraph>
                <EnterYour placeholder='Enter your email' />
                <SignButton type='submit'>sign up</SignButton>
            </InnerContent>
        </SignUpSection>
    );
}

const SignUpSection = styled.section`
    margin-top: 2.1875em;
    width: 100%;
    height: 334.81px;
    display: grid;
    place-items: center;
    background: #f8f8f9;
`;

const InnerContent = styled.div`
    display: grid;
    place-items: center;
`;

const Heading = styled.p`
    color: #2b2835;
    font-size: 3.125rem;
    font-family: Montserrat-Bold;
    line-height: 3.4375rem;
`;

const Paragraph = styled.p`
    margin-top: 1.0625em;
    color: #030303;
    font-size: 0.875rem;
    font-family: Montserrat-regular;
`;

const EnterYour = styled.input`
    margin-top: 2.9375em;
    padding-left: 1.375em;
    width: 100%;
    height: 2.25em;
    border: 1px solid #bfbfbf;
    border-radius: 1.125em;
    color: #030303;
    font-family: Montserrat-regular;
    font-size: 0.875rem;

    @media (max-width: 768px) {
        width: 80%;
    }

`;

const SignButton = styled.button`
    margin-top: 1.1875em;
    width: 100%;
    height: 2.5616em;
    border-radius: 6.25em;
    font-family: Montserrat-regular;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;

    background: ${theme.colors.yellow};

    @media (max-width: 768px) {
        width: 85%;
    }
`;
