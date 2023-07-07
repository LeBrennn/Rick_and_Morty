import style from './SearchBar.module.css'
import { useState } from 'react';


const SearchBar = ({onSearch}) =>{
   const [id, setId] = useState('');

   const handleChange = (event) =>{
      setId(event.target.value)
   };
   return (
      <div className={style.contenedor}>
        
         <input className={style.buscador} type='search' onChange={handleChange} value={id}/>         
         <button className={style.buscadorButton} onClick={()=> {onSearch(id)}}>Buscar</button>
      </div>
   );
}

export default SearchBar;
