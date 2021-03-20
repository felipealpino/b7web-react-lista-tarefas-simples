import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    width:300px;
    height:20px;
    font-size:16px; 
    padding:5px;
    border-radius:5px;
    margin:5px;
`

function ShowInput(props){
    const [texto, setTexto] = React.useState('');

    function mudouTexto(event){
        setTexto(event.target.value)
    }

    function handleKeyUp(event){
        if(event.keyCode === 13 && texto !== ""){
            props.comunicacao(texto)  
            setTexto('')          
        }
    }

    return(<>
        <Input 
            type="text"
            value = {texto}
            onChange={mudouTexto}
            onKeyUp={handleKeyUp}
            placeholder={props.frasePadrao ? props.frasePadrao : 'Não tem placeholder'}
        />
    </>)
}

export default ShowInput