import React from 'react';
import ShowInput from './components/Input'

function App() {
    const [list, setList] = React.useState([]);

    React.useEffect(() => {
        setList([
            {title: 'Comprar o bolo',done:false},
            {title: 'Pegar o cachorro', done:true},
            {title: 'Gravar aula', done:false},
        ])
    }, [])

    function handleSearchInput(textoQueVeioDoArquivoInputDoUseEffect){
        let newList = [...list]
        newList.push({
            title:textoQueVeioDoArquivoInputDoUseEffect,
            done:false,
        })
        setList(newList)
    }

    function isDone (index,event) { 
        let newList = [...list]
        newList[index].done = !newList[index].done
        setList(newList)
    }

    return(<>      
        <h1>Lista de tarefas</h1>

        <ShowInput
            frasePadrao="Adicione um item"
            comunicacao={handleSearchInput}
        />

        <hr/>

        <ul>
            {list.map((item, index) => (
                <li key={index} onClick={() => isDone(index)} style={{cursor:'pointer'}}> {item.done ? <del>{item.title}</del> : item.title }  </li>
            ))}
        </ul>

    </>)
}

export default App; 