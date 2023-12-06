import React from 'react';
import styled from 'styled-components';

import { ReactComponent as SvgLogo } from '../logos/logo.svg';

export default function Logo() {
    return (
        <a href="/"><Svg src={SvgLogo} alt="logo" /></a>
    );
}

const Svg = styled(SvgLogo)``;