import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import { UserContextProvider } from './components/store/User-Context.jsx';


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
      <UserContextProvider>
          
              <App />
          
      </UserContextProvider>
  </QueryClientProvider>
</BrowserRouter>
);