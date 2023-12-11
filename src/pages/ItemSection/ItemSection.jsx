import React from 'react';
import styled from 'styled-components';

import StyledList from '../../components/StyledList';
import product from '../../data/data';

export default function ItemListPage() {
    return (
                <Section>
                        <ItemList>
                            {product.map(product => (
                                <Item key={product.id}>
                                    {product.id === 1 && (
                                        <ListWrapper>
                                                <Image src={product.url} width="263px" top="-6px" marginbottom="-1px;" />
                                                <StyledList title={product.name} description={product.description} price={product.price} />
                                        </ListWrapper>
                                    )}
                                    {product.id === 2 && (
                                        <ListWrapper>
                                            <ImageWrapper>
                                                <Image src={product.url} width="319.35px" top="0" left="10px" marginbottom="70.41px" />
                                                <StyledList title={product.name} description={product.description} price={product.price} />
                                            </ImageWrapper>
                                        </ListWrapper>)}
                                    {product.id === 3 && (
                                        <ListWrapper>
                                            <ImageWrapper>
                                                <Image src={product.url} width="282px" top="17px" left="28px" marginbottom="21px" />
                                                <StyledList title={product.name} description={product.description} price={product.price} />
                                            </ImageWrapper>
                                        </ListWrapper>
                                    )}
                                    {product.id === 4 && (
                                        <ListWrapper>
                                            <ImageWrapper>
                                                <Image src={product.url} width="229px" top="10px" left="102px" marginbottom="-134px" />
                                                <StyledList title={product.name} description={product.description} price={product.price} />
                                            </ImageWrapper>
                                        </ListWrapper>
                                    )}
                                    {product.id === 5 && (
                                        <ListWrapper>
                                            <ImageWrapper>
                                                <Image src={product.url} width="298px" top="-22px" left="25px" marginbottom="-90px" />
                                                <StyledList title={product.name} description={product.description} price={product.price} />
                                            </ImageWrapper>
                                        </ListWrapper>
                                    )}
                                    {product.id === 6 && (
                                        <ListWrapper>
                                            <ImageWrapper>
                                                <Image src={product.url} width="231px" top="95px" left="94px" marginbottom="-106px" />
                                                <StyledList title={product.name} description={product.description} price={product.price} />
                                            </ImageWrapper>
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
    display: flex;
    flex-wrap: wrap;
    row-gap: 2.125em;
    justify-content: space-between;
`;

const Item = styled.li`
    position: relative;
    flex: 0 1 calc((100% - 4.685em) / 3);
    background: #f8f8f9;
    overflow: hidden;
    
`;

const ListWrapper = styled.div`
    padding: 0 2.9375em;
    width: 393px;
    height: 560px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
`;

const ImageWrapper = styled.div`

`;

const Image = styled.img`
    position: relative;
    z-index: 0;
    width: ${(props) => props.width};
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    margin-bottom: ${(props) => props.marginbottom || "auto"};
`;

