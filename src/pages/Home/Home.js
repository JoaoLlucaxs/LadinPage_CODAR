import React from 'react'
import {Link} from 'react-router-dom'
import Img from '../../assets/redes.png'
import Head from '../../Components/Head/Head'
import Button from '../../Components/Button/Button'
import Info from '../../assets/Infografia.jpg'


function Home() {
  return (
    <>
    <section className='section'>
      <Head title='SOCIALMENTE' description='page codar'/>
      <div className='img_page'>
        <img src={Img} alt='slogan in website'/>
      </div>
      <div className='text_page'>
        <h2>SOCIALMENTE</h2>
        <p>Uso excessivo das <span>redes sociais</span></p>
        <Link to='details'>
        <Button type='submit' name='Saiba Mais'/>
        </Link>
      </div>
    </section>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#176585" fill-opacity="1" d="M0,96L30,106.7C60,117,120,139,180,133.3C240,128,300,96,360,117.3C420,139,480,213,540,229.3C600,245,660,203,720,186.7C780,171,840,181,900,202.7C960,224,1020,256,1080,261.3C1140,267,1200,245,1260,213.3C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>

    <div className='details'>
      <div className='ilustrator'>
       <h1>CAUSAS E PERFIS DAS PESSOAS DEPENDENTES DAS REDES SOCIAIS</h1>
        <p>Entre as causas mais reconhecidas da dependência das redes sociais se encontra a baixa autoestima, a insatisfação pessoal, a depressão ou hiperatividade e, inclusive, a falta de afeto, carência que muitas vezes os adolescentes tentam preencher com os famosos likes. De fato, muitos jovens os procuram quase compulsivamente para experimentar uma intensa ,
        mas sempre breve sensação de satisfação que, no entanto, pode ser contraproducente uma vez que os tornam dependentes, ao longo do tempo, da opinião dos outros.
        O perfil majoritário do dependente é o de um jovem de 16 a 24 anos. Os adolescentes são os que correm um maior risco de cair na dependência, de acordo com os especialistas,
        por três motivos fundamentais: sua tendência para a impulsividade, a necessidade de terem influência social ampla e expansiva e, finalmente, a necessidade de reafirmar a identidade de grupo.</p>
      </div>
      <img src={Info} width='650' placeholder='dados de redes sociais'/>
  </div>
  
  </>
  )
}

export default Home