import React from 'react'
import styled,{css, keyframes} from 'styled-components';

const RotateAnimation = keyframes`
    0%{
        transform: rotateZ(0deg)
    };
    100%{
        transform: rotateZ(360deg)
    };
`;

const StyledButton = styled.button`
border:none;
padding: .5em 1em;
font-size:18px;
cursor: pointer;
&:focus{
    outline:none;
}
&:hover{
    animation: ${RotateAnimation} 1s infinite linear; 
}
align-self: ${props => props.align || 'stretch'};

${props => props.primary && css`
    color: ${props=> props.color || 'white'};
    background: ${props=> props.background || 'white'};
`}
${props => props.outlined && css`
    color: ${props=> props.color || 'white'};
    border: 1px solid   ${props=> props.color || 'white'};
    background: transparent;
`}
`
const LargeButton = styled(StyledButton)`
    font-size:32px;
`
const Button = (props) => {
    return <StyledButton {...props} />
}

export default Button
