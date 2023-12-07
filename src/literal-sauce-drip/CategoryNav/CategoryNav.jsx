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
	font-family: Montserrat-medium;
	line-height: 1.125rem;

	li {
		&:not(:last-of-type) {
			margin-right: 11.98vw;

			@media screen and (min-width: 911px) and (max-width: 1260px){
				margin-right: 6vw;
			}
		}
	}

	@media screen  and (max-width: 910px) {
		display: none;
	}
`;
