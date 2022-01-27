import './App.css'
import { useQuery } from '@apollo/client';
import { getAllCharacters } from './queries';
import Card from './Card';

const App = () => {
  const {loading, error, data} = useQuery(getAllCharacters, {
    variables: {page: 3}
  })
 
  if(loading){
    return <h1>Loading....</h1>
  }
  
  if(error){
    return <h1>{error.message}</h1>
  }

  
  return (
    <div className='m-3'>
      <header className='text-center m-5'>Hello Rick and Morty</header>
      <div className='row'>
        {data?.characters?.results.map(
          character => (
            <Card key={character.id} character={character}/>
          )
        )}
      </div>
    </div>
  );
}

export default App
