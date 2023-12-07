import React from 'react';
import styled from 'styled-components';

import theme from '../../theme';
export default function NavItem({ title, href, children }) {
    return (
        <li>
            <NavItemHeading>{title}</NavItemHeading>
            <NavItemLink href={href}>
                {children}
            </NavItemLink>
        </li>
    );
};

const NavItemHeading = styled.h1`
    font-size: 1.5rem;
    font-family: Montserrat-regular;
    font-weight: 600;
    line-height: 1.9375rem;

    color: ${theme.colors.white};
`;

const NavItemLink = styled.a`
    font-size: .75rem;
    font-family: Montserrat-medium;
    color: #b8b8b8;
    text-transform: uppercase;
`;
