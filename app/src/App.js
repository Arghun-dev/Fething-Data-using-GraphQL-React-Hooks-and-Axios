import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import GetUsers from './components/GetUsers';
import Todos from './components/Todos';
import './App.css';

function App() {
  const errorLink = onError(({ qraphqlErrors, networkError }) => {
    if (qraphqlErrors) {
      qraphqlErrors.map(({ message, location, path }) => {
        alert(`GraphQL error ${message}`)
      })
    }
  })

  const link = from([
    errorLink,
    new HttpLink({ uri: 'https://api.mocki.io/v2/c4d7a195/graphql' })
  ])

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
  })

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>GraphQL</h1>
        <GetUsers />
        <Todos />
      </div>
    </ApolloProvider>
  );
}

export default App;
