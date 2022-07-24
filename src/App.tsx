import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {Main} from './Components/Main/Main';
import {Skills} from './Components/Skills/Skills';
import {Projects} from './Components/Projects/Projects';
import {Cooperation} from './Components/Cooperation/Cooperation';
import {Form} from './Components/Form/Form';
import {Footer} from './Components/Footer/Footer';

export function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Cooperation/>
            <Form/>
            <Footer/>
        </div>
    );
}


