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
    font-size: 15px;
    letter-spacing: 1.909091px;
    text-transform: uppercase;
    cursor: pointer;
    
    @media (max-width: 768px) {
        color: rgb(25, 23, 32);
    }
`;
