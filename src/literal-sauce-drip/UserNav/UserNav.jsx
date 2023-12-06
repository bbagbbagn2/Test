import React from 'react';
import styled from 'styled-components';

import NavItem from '../NavItem/NavItem';

import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';

export default function UserNav() {
	return (
		<UserNavList>
			<NavItem href="/"><AiOutlineSearch size="25" /></NavItem>
			<NavItem href="/"><AiOutlineUser size="25" /></NavItem>
			<NavItem href="/"><AiOutlineShoppingCart size="25" /></NavItem>
		</UserNavList>
	);
};

const UserNavList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
