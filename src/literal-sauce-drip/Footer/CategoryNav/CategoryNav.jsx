import React from 'react';
import styled from 'styled-components';

import FooterHeader from '../FooterHeader/FooterHeader';
import NavItem from '../NavItem/NavItem';

import theme from '../../theme';

const categoryData = {
    'Product': [
        'HEADPHONES',
        'EARPHONES',
        'SPEAKERS',
        'ACCESSORIES',
        'COLLABORATIONS',
        'BEATSAUDIO',
        'SPECIAL OFFERS',
    ],
    'Support': [
        'PRODUCT HELP',
        'SERVICE & WARRANTY',
        'REGISTER YOUR BEATS',
        'UPDATE YOUR BEATS',
        'AUTHORIZED SERVICE PROVIDERS',
        'CONTACT SUPPORT',
        'INTERNATIONAL NUMBERS',
    ],
    'Company': [
        'PRODUCT HELP',
        'NEWS AND EVENTS',
        'PROMOTION TERMS',
        'PRIVACY POLICY',
        'TRADEMARK',
        'TERMS OF USE',
        'COOKIES',
    ],
};

export default function CategoryNav() {
    return (
        <>
            {Object.entries(categoryData).map(([categoryTitle, categoryDataArray]) => (
                <li key={categoryTitle}>
                    <FooterHeader children={categoryTitle} />
                    <ul>
                        {categoryDataArray.map((item, index) => (
                            <li key={index}>
                                <NavItem href="#" children={item} />
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </>
    );
};