import './App.css'
import { useQuery } from '@apollo/client';
import { getAllCharacters } from './queries';

const App = () => {
  const {loading, error, data} = useQuery(getAllCharacters)
 
 
  return (
    <>
      <header className='text-center m-5'>Hello Rick and Morty</header>
      <div className='row'>
        cards
      </div>
    </>
  );
}

export default App
