import Card from '../Card/Card';
import {connect, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../Redux/actions';
import { useState } from 'react';
import style from './Favorites.module.css'


const Favorites = ({myFavorites}) =>{

    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();
    
    const handleOrder = (event) =>{
        dispatch(orderCards(event.target.value));
        setAux(!aux)
    };

    const handleFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    };


    return(
        <div>
           

            <select className={style.asdes} onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select className={style.info} onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>

            </select>
          
            {
                myFavorites.map((personajes)=>{
                    return(
                        <Card key={personajes.id}
                         id={personajes.id}
                         name={personajes.name}
                         status={personajes.status}
                         species={personajes.species}
                         gender={personajes.gender}
                         origin={personajes.origin.name}
                         image={personajes.image}
                         onClose={personajes.onClose}                         
                         />
                    )
                })
            }          
        </div>
    )
};

const mapStateToProps = (state) =>{
    return{
        myFavorites: state.myFavorites
    }
};


export default connect(mapStateToProps, null)(Favorites);