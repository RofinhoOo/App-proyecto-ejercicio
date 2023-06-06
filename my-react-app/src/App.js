
import './App.css';
import { Testimonio } from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp</h1>
      <Testimonio 
         nombre='Emma Bostian'
         pais='Suecia'
         persona='Emma'
         imagen='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBBOWVYCjG7rAj2_DDsvy-iRn_TfvoVoyqXw&usqp=CAU'
         cargo='Ingeniera de Software'
         emprea='Spotify'
         testimonio='Llevo trabajando durante muchos años en Spotify y estoy super encantada con la empresa.'/>

<Testimonio 
         nombre='Alex Rofes'
         pais='España'
         persona='Alex'
         imagen='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIDJkZprOLk6viyL7bc8xx8mDEdydV5wnGJQ&usqp=CAU'
         cargo='Ingeniera de Software'
         emprea='FCB'
         testimonio='Llevo trabajando durante muchos años en FCB y estoy super encantado con la empresa.'/>

<Testimonio 
         nombre='Sara Holmes'
         pais='Gran Bretaña'
         persona='Sara'
         imagen='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8AsLqdqFuLUeA5qYS-NlS2f-FKqvbZAfF8w&usqp=CAU'
         cargo='Ingeniera de Software'
         emprea='British School'
         testimonio='Llevo trabajando durante muchos años en British School y estoy super encantada con la empresa.'/>
      </div>
    </div>
  );
}

export default App;
