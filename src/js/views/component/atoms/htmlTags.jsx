import styled from 'styled-components';
import React from 'react';
export const Button = styled.button`
  border-radius:0 8px 8px 0;
  padding: 10px 13px;
  font-size: 14px;
  color: #fff;
  height: 42px;
  cursor: pointer;
  font-weight: 400;
  background-color: dodgerblue;
  border: 1px solid #e7e7e7;
  border-left: 0;
`;

export const SearchDIV = styled.div`
    padding-top: 20px;
    background-color: dodgerblue;
`;
const ESpan = styled.span`
    color: #d0021b;
`;
    
export function ErrorSpan(props){
    return (
        <ESpan>
            {props.children}
        </ESpan>
    );

}
ErrorSpan.defaultProps = {
    children: 'Error'
}

export const ReactContainer = styled.div`
    padding: 15px 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: dodgerblue;
  `;