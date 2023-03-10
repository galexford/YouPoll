import React from 'react';
import AppContainer from './src/navigation';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <AppContainer />
        </QueryClientProvider>
    );
};

export default App;
