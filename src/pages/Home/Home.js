import React from 'react'
import {Link} from 'react-router-dom'
import Img from '../../assets/CODAR2.png'
import Head from '../../Components/Head/Head'
import Button from '../../Components/Button/Button'
import Plans from '../../Components/Plans/Plans'
import {FiSlack} from 'react-icons/fi'
import Ilustrator from '../../assets/ilustrator.png'
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
        <Link to='/budget'>
        <Button type='submit' name='Fazer orçamento'/>
        </Link>
      </div>
    </section>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fb1" fill-opacity="1" d="M0,96L30,106.7C60,117,120,139,180,133.3C240,128,300,96,360,117.3C420,139,480,213,540,229.3C600,245,660,203,720,186.7C780,171,840,181,900,202.7C960,224,1020,256,1080,261.3C1140,267,1200,245,1260,213.3C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>

    <div className='details'>
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
  </div>
      <Plans/>
 
    <h2 className='section_Tel'>Digite seu telefone</h2>
    <Input type='number' placeholder='TEL'/>
    <Button type='submit' name='Enviar'/>
 
  </>
  )
}

export default Home