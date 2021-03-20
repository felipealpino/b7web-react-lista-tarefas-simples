import React from 'react'
import styled from 'styled-components'

const Botao = styled.button`
    font-size:19px;
    padding:10px;
    margin:10px;
    color:white;
    border:1px solid black;
    border-radius:5px;
    background-color: ${props => (props.ativo) ? '#0085C8' : 'purple'};
    
    &:hover {
        cursor: pointer;
    }
`

function ShowBotao(){

    <Botao/>
}

export default ShowBotao 