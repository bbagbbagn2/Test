import React from 'react';
import styled from 'styled-components';

export default function NavItem({ href, children }) {
    return (
        <li>
            <NavItemLink href={href}>
                {children}
            </NavItemLink>
        </li>
    );
};

const NavItemLink = styled.a`
    color: #fff;
    text-transform: uppercase;
`;
