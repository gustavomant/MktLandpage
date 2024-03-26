// import { useState } from 'react'
import * as styles from './styled';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Form from '../../components/Form';

function Home() {

  return (
    <styles.styledApp>
      <div className='content gradient'>
        <Navbar />  
        <div className='content_grid'>
          <div className='text flex-col'>
          <h1 className='paragraph white mb-[22px]'>
          Descubra um mundo de inovação e criatividade, em que os objetivos da sua marca se conectam com os desejos dos seus clientes.
          </h1>
          <p className='paragraph white'>
          Encontrar uma agência é fundamental para ter os benefícios do marketing simplificados – nós planejamos e identificamos o seu objetivo, impulsionando metas e desenvolvendo estratégias eficientes. Aqui, comunicar-se com o seu público e abranger os horizontes é fácil. Na Evoi, você encontra uma ponte dedicada entre a sua marca e seus clientes!
          </p>
          </div>
          <Form />
        </div>
        <Footer />
      </div>
    </styles.styledApp>
  )
}

export default Home
