import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import NavItem from '../NavItem/NavItem';

import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';

export default function UserNav() {
	const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 910);

	useEffect(() => {
		const handleResize = () => {
			setIsMobileView(window.innerWidth <= 910);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		}
	}, []);

	return (
		<UserNavList>
			{isMobileView ? (
				<NavItem href="/"><AiOutlineMenu size="25" /></NavItem>
			) : (
				<>
					<NavItem href="/"><AiOutlineSearch size="25" /></NavItem>
					<NavItem href="/"><AiOutlineUser size="25" /></NavItem>
					<NavItem href="/"><AiOutlineShoppingCart size="25" /></NavItem>
				</>
			)}
		</UserNavList>
	);
};

const UserNavList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;

	li {
		&:not(:last-of-type) {
			margin-right: 2.45vw;
		}
	}
`;
