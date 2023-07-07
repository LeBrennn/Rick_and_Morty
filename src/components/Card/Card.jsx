import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../Redux/actions';
import {connect} from 'react-redux';
import { useState, useEffect } from 'react';

const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites})=> {

   const [isFav, setIsFav] = useState(false);
   
   const handleFavorite = () =>{
      isFav ? removeFav(id) : addFav({id, name, status, species, gender, origin, image, onClose});
      setIsFav(!setIsFav)
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
  
   return (
      <div className={style.container}>
         {
             ( 
               <button className={style.favButton} onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
            ) 
         }
         <button className={style.closeButton} onClick={()=> {onClose(id);}}>X</button>
         <Link to={`/detail/${id}`}>
            <div className={style.contenedorImagen}>               
               <img src={image} alt='' />
            </div>
            <div className={style.contenedorDatos}>
               <h1>Name: "{name}"</h1>
               <h1>Gender: "{gender}"</h1>
               <h1>Origin: "{origin}"</h1>
               <h1>Status: "{status}"</h1>
               <h1>Species: "{species}"</h1>
            </div>
         </Link>       
          
      </div>
   );
};

const mapDispatchToProps = (dispatch)=>{
   return{
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id)),
   }
};

const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);





