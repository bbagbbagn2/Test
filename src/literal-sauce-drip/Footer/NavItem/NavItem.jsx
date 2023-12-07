import React from 'react';
import styled from 'styled-components';


export default function NavItem({ href, children }) {
    return (
            <NavItemLink href={href}>
                {children}
            </NavItemLink>
    );
};

const NavItemLink = styled.a`
    color: #b8b8b8;
    font-size: .75rem;
    font-family: Montserrat-medium;
    line-height: 1.375rem;
    text-transform: uppercase;
`;
