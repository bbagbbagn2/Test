import React from 'react';
import styled from 'styled-components';

import FooterHeader from '../FooterHeader/FooterHeader';
import NavItem from '../NavItem/NavItem';

import theme from '../../theme';

const categoryTitle = [
    'Product',
    'Support',
    'Company',
];

const productData = [
    'HEADPHONES',
    'EARPHONES',
    'SPEAKERS',
    'ACCESSORIES',
    'COLLABORATIONS',
    'BEATSAUDIO',
    'SPECIAL OFFERS',
];

const supporData = [
    'PRODUCT HELP',
    'SERVICE & WARRANTY',
    'REGISTER YOUR BEATS',
    'UPDATE YOUR BEATS',
    'AUTHORIZED SERVICE PROVIDERS',
    'CONTACT SUPPORT',
    'INTERNATIONAL NUMBERS',
];

const companyData = [
    'PRODUCT HELP',
    'NEWS AND EVENTS',
    'PROMOTION TERMS',
    'PRIVACY POLICY',
    'TRADEMARK',
    'TERMS OF USE',
    'COOKIES',
];

export default function CategoryNav() {
    return (
        <>
            <FooterHeader children="Products" />
            {productData.map((item, index) => (
                <li key={index}>
                    <NavItem href="#" children={item} />
                </li>
            ))}
        </>
    );
};