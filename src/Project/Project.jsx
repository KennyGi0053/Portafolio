import style from './Project.module.css'
import Videogames from '../assets/Videogames Landing.png'
import Ticket from '../assets/TicketShow.png'
import laptop from '../assets/laptop2.gif'
import shopi from '../assets/imagen shopi.png'
import magical from '../assets/imagen Magical Journey.png'
import mundocurso from '../assets/imagen mi mundo curso pagina web.png'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { useEffect, useState } from 'react'
const Project = () => {

  const [loading, setLoading] = useState(true);
    
  useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2500);
      return () => clearTimeout(timer);
    }, []);
  return (
    <div>
{loading ? (
      <Loader />
  ) : (
    <div className={style.proyecto}>
      <div className={style.tituloLaptop}>
        <h2 className={style.titulo0}>Mis proyectos </h2>

        <img className={style.laptop} src={laptop} to='laptop'/>
      </div>
  <section className={style.imagenes}>
    <Link className={style.link1} to='https://pi-videogame-kennygabriel00-gmailcom.vercel.app/' target="_blank">
      <h2 className={style.titulo1}>Videogames</h2>
      <img className={style.imagegames} src={Videogames} alt='PI videogames' />
    </Link>
    <Link className={style.link2} to='https://ticket-show.netlify.app/' target="_blank">
      <h2 className={style.titulo2}>TicketShow</h2>
      <img className={style.ticket} src={Ticket} alt='ticketshow' />
    </Link>
    <Link className={style.link3} to='https://mimundocurso.vercel.app/' target="_blank">
      <h2 className={style.titulo3}>Mi Mundo Curso</h2>
      <img className={style.mundocurso} src={mundocurso} alt='mundocurso' />
    </Link>
    <Link className={style.link4} to='https://especial-shopi-i5o5.vercel.app/' target="_blank">
      <h2 className={style.titulo4}>Especial Shopi</h2>
      <img className={style.shopi} src={shopi} alt='especialshopi' />
    </Link>
    <Link className={style.link4} to='https://magical-journey-sigma.vercel.app/' target="_blank">
      <h2 className={style.titulo4}>Magical Journey</h2>
      <img className={style.shopi} src={magical} alt='especialshopi' />
    </Link>
 
</section>
    </div>
  )}
    </div>
  )
}

export default Project