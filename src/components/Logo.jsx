import React from 'react';

import { ReactComponent as SvgLogo } from '../logos/logo.svg';

export default function Logo() {
    return (
        <a href="/">
            <SvgLogo src={SvgLogo} alt="logo" />
        </a>
    );
}