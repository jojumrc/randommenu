import React from "react";
import { faker } from '@faker-js/faker';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import styled from "@emotion/styled";

const Home = () => {

    const [random, setRandom] = React.useState('');
    const [word, setWord] = React.useState('');
    const [dataName, setDataName] = React.useState('Joju');
    const [inputArray, setInputArray] = React.useState([]);

    function generate() {
        setRandom(faker.helpers.arrayElement(inputArray));
    }

    function handleEnter(e) {
        if (e.keyCode == 13) {
            setInputArray(prev => [...prev, word]);
            setWord('')
        }
    }

    const handleSaveStorage =()=>{
        console.log(JSON.stringify(inputArray))
        // const [dataName, setDataName] = React.useState('');
        localStorage.setItem('presets', JSON.stringify({[dataName]:inputArray}) )
    }

    const handleLoadStorage =()=>{
        const arr = localStorage.getItem('presets' ).split(',');
        setInputArray(prev => [...prev, ...arr]);
    }

    return (
        <Paper elevation={5}>
            <header className="App-header">
                {!random &&
                    <>
                        RANDOM PICKER
                        <TextField
                            label="Options"
                            variant="outlined"
                            color="success"
                            focused
                            size="string"
                            value={word}
                            onChange={(e) => setWord(e.target.value)}
                            onKeyDown={handleEnter} />
                    </>
                }
                {!random && <>
                    {`Available Options `}
                    {inputArray.length && <Paper className="Chip"
                        elevation={3}
                        sx={{
                            padding: '15px',
                        }}>
                        {inputArray.map(e => {
                            return <div><Chip sx={{
                                borderRadius: '12px',
                                color: 'rgb(141, 142, 144)'
                            }} label={` ${e} `} /></div>
                        })}
                        {' '}
                    </Paper>}
                    <div style={{
                        display: 'flex', flexDirection: 'column', height: '120px', justifyContent: 'space-between'
                    }}>
                        <Button variant="contained" color="success" onClick={generate}>
                            Let me choose for you
                        </Button>
                        <Button variant="outlined" onClick={handleSaveStorage}>Add to storage</Button>
                        <Button variant="contained" onClick={handleLoadStorage}>load</Button>
                    </div>

                </>}
                {random &&
                    <Paper
                        elevation={3}
                        sx={{
                            padding: '15px',
                        }}>
                        {random}
                    </Paper>
                }

            </header>
        </Paper>
    )

}

export default Home
