import React from 'react'
import Img from '../../assets/CODAR2.png'
import Head from '../../Components/Head/Head'
import Button from '../../Components/Button/Button'
import {FiSlack} from 'react-icons/fi'
import Ilustrator from '../../assets/CODAR.png'
import Input from '../../Components/Input/Input'

const detail=[
  {
    display:'Domínio Personalizado'
  },{
    display:'Hospedagem'
  },{
    display:'Site responsivo'
  }
  ,{
    display:'Redes sociais'
  }
  ,{
    display:'Chat online'
  },{
    display:'Blog integrado'
  }
]


function Home() {
  return (
    <>
    <section className='section'>
      <Head title='CODAR-HOME' description='page codar'/>
      <div className='img_page'>
        <img src={Img} alt='slogan in website'/>
      </div>
      <div className='text_page'>
        <h2>Alavanque seu negócio com um</h2>
        <h1>WebSite Incrível</h1>
        <Button type='submit' name='Fazer orçamento'/>
      </div>
    </section>

    <section className='details'>
    <ul>
    {detail.map((item)=>(
      <li>
        <FiSlack color='#fb1'/>{item.display}
      </li>
    ))}
    </ul>
      <div className='ilustrator'>
       <img src={Ilustrator} alt='ilustrator ladin-page'/>
      </div>
  </section>

  <section className='section_Tel'>
    <h2>Digite seu telefone</h2>
    <Input type='number' placeholder='TEL'/>
    <Button type='submit' name='Enviar'/>
  </section>
  </>
  )
}

export default Home