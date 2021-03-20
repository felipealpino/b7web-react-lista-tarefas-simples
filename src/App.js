import React from 'react';
import ShowInput from './components/Input'

function App() {
    
    // const [searchText, setSearcText] = React.useState('');
    const [list, setList] = React.useState([]);


    React.useEffect(() => {
        setList([
            {title: 'Comprar o bolo',done:false},
            {title: 'Pegar o cachorro', done:true},
            {title: 'Gravar aula', done:false},
        ])
    }, [])

    function handleSearchInput(textoQueVeioDoArquivoInputDoUseEffect){
        // setSearcText(textoQueVeioDoArquivoInputDoUseEffect)
        let newList = [...list]
        newList.push({
            title:textoQueVeioDoArquivoInputDoUseEffect,
            done:false,
        })
        setList(newList)
    }

    function isDone (event) { 
        list.forEach((item, index) => {
            if(event.target.innerText === item.title){
                item.done = !item.done
                let changeItem = {
                    title: item.title,
                    done: item.done
                }

                list.splice(index,1)
                let newList = [...list]
                newList.splice(index, 0, {
                    title:changeItem.title,
                    done:changeItem.done
                })
                setList(newList)
            }
        })
    }


    return(<>      
        <h1>Lista de tarefas</h1>

        <ShowInput
            frasePadrao="Adicione um item"
            comunicacao={handleSearchInput}
        />


        {/* <hr/> */}
        {/* Texto procurado: {searchText} */}

        <hr/>

        <ul>
            {list.map((item, index) => (
                <li key={index} onClick={isDone} style={{cursor:'pointer'}}> {item.done ? <del>{item.title}</del> : item.title }  </li>
            ))}
        </ul>

        {console.log(list)}

    </>)
}

export default App; 