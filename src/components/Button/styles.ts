import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF ${(props)=>props.disabled?'none':null};
    border: 1px solid #81259D;
    border-radius: 21px;
    pointer-events:${(props)=>props.disabled?'none':null};
    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
`