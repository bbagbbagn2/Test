import React from 'react';
import styled from 'styled-components';

import NavItem from '../NavItem/NavItem';

export default function CategoryNav() {
	return (
		<CategoryNavList>
			<NavItem href="/"> Headphones </NavItem>
			<NavItem href="/"> Earphones </NavItem>
			<NavItem href="/"> Speakers </NavItem>
			<NavItem href="/"> Explore </NavItem>
		</CategoryNavList>
	);
};

const CategoryNavList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;

	li {
	}
`;
