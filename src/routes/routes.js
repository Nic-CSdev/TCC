import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Info from '../pages/Info';
import Sobre from '../pages/Sobre';
import Receitas from '../pages/Receitas';
import Waffle from '../components/receitas/Waffle';
import Panqueca from '../components/receitas/Panqueca';
import Bolo from '../components/receitas/Bolo';
import Guacamole from '../components/receitas/Guacamole';
import Curiosidades from '../pages/Curiosidades';
import Curiosidadesveg from '../components/curiosidades/Curiosidadesveg';
import Fatosveg from '../components/curiosidades/Fatosveg';
import Cidadesveg from '../components/curiosidades/Cidadesveg';
import Restaurantes from '../pages/Restaurantes';
import Famosos from '../components/curiosidades/Famosos';
import FoodChanger from '../pages/FoodChanger';

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/info' element={<Info />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/receitas' element={<Receitas />} />
        <Route path='/waffle' element={<Waffle />} />
        <Route path='/panqueca' element={<Panqueca />} />
        <Route path='/bolo' element={<Bolo />} />
        <Route path='/guacamole' element={<Guacamole />} />
        <Route path='/curiosidades' element={<Curiosidades />} />
        <Route path='/curiosidadesveg' element={<Curiosidadesveg />} />
        <Route path='/fatosveg' element={<Fatosveg />} />
        <Route path='/cidadesveg' element={<Cidadesveg />}/>
        <Route path='/restaurantes' element={<Restaurantes/>}/>
        <Route path='/famosos' element={<Famosos/>} />
        <Route path='/food-changer' element={<FoodChanger/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default routes