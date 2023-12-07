import React from 'react';
import styled from 'styled-components';

import theme from '../../theme';

export default function FooterHeader({ children }) {
    return (
            <NavItemHeading>{children}</NavItemHeading>
    );
};

const NavItemHeading = styled.h1`
    font-size: 1.5rem;
    font-family: Montserrat-regular;
    font-weight: 600;
    line-height: 1.9375rem;

    color: ${theme.colors.white};
`;