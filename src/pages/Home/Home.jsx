import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getDefi } from '../../redux/definitionsSlice';
import { showDefinitions } from '../../utils';
import Layout from '../../components/Layout/Layout';
import DefinitionList from '../../components/DefinitionList/DefinitionList';



function Home() {
    const def = useSelector(showDefinitions)
    const dispatch = useDispatch();
    function getVal() {
        const val = document.querySelector('#input').value;
        return val;
    }

    return (
        <div className='container container-min-max-width'>
            <Layout>
                <br />
                <div className='row my-5 mx-1'>
                    <label className='col-3 col-lg-2 border-info fs-4' htmlFor="word"><strong>Cauta cuvant</strong></label>
                    <input
                        className='col-9 col-lg-7 fs-4 border-info'
                        id='input'
                        type='text'
                        name='word'
                        required='yes'
                    />
                    <button
                        aria-label="Cauta"
                        className='col-12 col-md-6 col-lg-3 fav-col fs-4'
                        onClick={() => {
                            let newWord = getVal();
                            dispatch(getDefi(newWord));
                        }}
                    >
                        Cauta
                    </button>
                </div>
                {(def.error !== 'Cuvant inexistent')
                    ? null
                    : <div className='text-danger fst-italic fs-3'>Cuvantul <strong>{getVal()} </strong>nu exista sau definitie indisponibila.</div>
                }
                <DefinitionList></DefinitionList>

            </Layout>
        </div>
    )
}

export default Home
