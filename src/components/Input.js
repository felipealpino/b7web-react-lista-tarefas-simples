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
        // console.log(event.keyCode) 
        if(event.keyCode === 13){
            props.comunicacao(texto)  
            setTexto('')          
        }
    }

    // React.useEffect(() => {
    //     props.comunicacao(texto)
    // }, [texto])

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