import React from 'react';
import Routes from './routes';
import Header from './layout/layoutComponents/Header';
import Footer from './layout/layoutComponents/Footer';
import {Router, BrowserRouter} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';


import {Grommet, Box, Main, base} from 'grommet';
import {merge} from 'lodash'

const customTheme = {
    global: {
        colors: {
            primary: '#0B4F6C',
            secondary: '#B3D0BF',

        },
        font: {
            family: "Space Mono"
        }
    },
    heading: {
        extend: 'letter-spacing: 1.5px; font-weight: 600'

    }
};

const history = createHistory();

const mergedTheme = merge({}, base, customTheme);
console.log(mergedTheme);

function App() {
  return (
    <BrowserRouter>
        <Grommet full className="App" theme={mergedTheme}>
            <Header/>
            <Main direction='row' fill={"vertical"} overflow={{ horizontal: 'hidden'}}>
                <Box flex align='center' style={{textAlign: "center"}}>
                    <Routes/>
                </Box>
            </Main>
            <Footer/>
        </Grommet>
    </BrowserRouter>
  );
}

export default App;
