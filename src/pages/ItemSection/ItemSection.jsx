import React from 'react';
import styled from 'styled-components';

import StyledButton from '../../components/StyledList';
import product from '../../data/data';

export default function ItemListPage() {
    return (
        <Section>
            <ItemList>
                {product.map(product => (
                    <Item key={product.id}>
                        {product.id === 1 && (
                            <ListWrapper>
                                <Image src={product.url} width="263px" left="5px" marginbottom="-11px" />
                                <StyledButton title={product.name} description={product.description} price={product.price} />
                            </ListWrapper>
                        )}
                        {product.id === 2 && (
                            <ListWrapper>
                                <Image src={product.url} width="319.35px" left="-17px" marginbottom="50px" />
                                <StyledButton title={product.name} description={product.description} price={product.price} />
                            </ListWrapper>)}
                        {product.id === 3 && (
                            <ListWrapper>
                                <Image src={product.url} width="282px" left="11px" marginbottom="21px" />
                                <StyledButton title={product.name} description={product.description} price={product.price} />
                            </ListWrapper>
                        )}
                        {product.id === 4 && (
                            <ListWrapper>
                                <Image src={product.url} width="229px" left="86px" marginbottom="-174px" />
                                <StyledButton title={product.name} description={product.description} price={product.price} />
                            </ListWrapper>
                        )}
                        {product.id === 5 && (
                            <ListWrapper>
                                <Image src={product.url} width="298px" left="6px" marginbottom="-76px" />
                                <StyledButton title={product.name} description={product.description} price={product.price} />
                            </ListWrapper>
                        )}
                        {product.id === 6 && (
                            <ListWrapper>
                                <Image src={product.url} width="231px" left="75px" marginbottom="-183px" />
                                <StyledButton title={product.name} description={product.description} price={product.price} />
                            </ListWrapper>
                        )}
                    </Item>
                ))}
            </ItemList>
        </Section>
    );
}

const Section = styled.section`
    padding: 0 6.459%;
`

const ItemList = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(393px, 393px));
    justify-content: space-between;
    row-gap: 2.125em;
`;

const Item = styled.li`
    position: relative;
    background: #f8f8f9;
    overflow: hidden;
`;

const ListWrapper = styled.div`
    padding: 0 3.0625em 2.3125em;
    width: 24.5625em;
    height: 35em;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const Image = styled.img`
    position: relative;
    z-index: 0;

    width: ${(props) => props.width};
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    margin-bottom: ${(props) => props.marginbottom};
`;

