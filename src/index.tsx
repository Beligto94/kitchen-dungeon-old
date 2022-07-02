import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { setupStore } from './store/store';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';

const store = setupStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
