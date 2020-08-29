import React from 'react'
import styled from 'styled-components';
import { ErrorSpan, ReactContainer } from 'basePath/views/component/atoms/htmlTags';

const AnimmesUl = styled.ul`
    list-style: none !important;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;
const AnimmeLi = styled.li`
    margin: 10px 70px 30px 0;
    display: flex;
    flex-direction: column;
    flex: 0 0 20%;
    background: #fff;
    border-radius: 10px; 
`;

export default function AnimmeView(props){
    return (
        <React.Fragment>
            {props.resultArr && props.resultArr.length > 0 ? (
                <ReactContainer>
                    <React.Fragment>
                        <div style={{position: 'absolute', top: '80px'}}>
                            <AnimmesUl>
                                {props.resultArr.map((item,index) => (
                                    <AnimmeLi key={index}>
                                        <img 
                                            src={item.image_url}
                                            alt={item.title}
                                            style={{
                                                borderRadius: '8px 8px 0 0',
                                                height: '400px',
                                                width: '300px'
                                            }}
                                        ></img>
                                        <div style={{textAlign: 'center', padding: '20px'}}> 
                                            {item.title}
                                        </div>
                                    </AnimmeLi>
                                ))}
                            </AnimmesUl>
                        </div>
                    </React.Fragment>
                </ReactContainer>
            ) : (
                <div style={{margin: '30% 50%', width: '60%'}}>
                    <ErrorSpan>No Content Found</ErrorSpan>
                </div>
            )}
            
        </React.Fragment>
    );
}