import React from 'react';
import styled from 'styled-components';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsTelephoneFill } from 'react-icons/bs';

export default function FollowLogo() {
    return (
        <FollowList>
                <Background><BsInstagram /></Background>
                <Background><FaFacebookF /></Background>
                <Background><BsTwitter /></Background>
                <Background><BsTelephoneFill /></Background>
        </FollowList>
    );
}

const FollowList = styled.div`
    margin-top: 33px;
    width: 165px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 796px) {
        margin-top: -6px;
    }
`;

const Background = styled.div`
    width: 33px;
    height: 33px;
    display: grid;
    place-items: center;
    border:none;
    border-radius: 17px;
    background: #FFFFFF;
    cursor: pointer;
`;