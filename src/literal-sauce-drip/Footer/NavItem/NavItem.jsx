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
    font-size: .75rem;
    font-family: Montserrat-medium;
    color: #b8b8b8;
    text-transform: uppercase;
`;
