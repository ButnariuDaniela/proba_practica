import React from 'react';
import {Link} from 'react-router-dom';
import { showFavorites } from '../../utils';
import { useSelector } from "react-redux";
import FavoritesItem from '../../components/FavoritesItem/FavoritesItem';
import Layout from '../../components/Layout/Layout';


export default function Favorites() {
    const presentFavorites = useSelector(showFavorites);
    console.log(presentFavorites)
  return (
    <div className='container container-min-max-width'>
        <Layout>
          <p className='my-5 pb-3 fs-2'>CUVINTE FAVORITE: </p>
            <div className='container my-5 fs-2'>{presentFavorites.map((word, index) => {
                return <FavoritesItem 
                word={word}
                key={index}
                id={index+1}
                />
            })}</div>
            <br />
            {/* <Link to='/'>Cauta alt cuvant</Link> */}
        </Layout>
    </div>
  )
}

