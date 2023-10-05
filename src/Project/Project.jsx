import style from './Project.module.css'
import Videogames from '../assets/Videogames Landing.png'
import Ticket from '../assets/TicketShow.png'
import laptop from '../assets/laptop2.gif'
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
    <Link to='https://pi-videogame-kennygabriel00-gmailcom.vercel.app/' target="_blank">
      <h2 className={style.titulo1}>Videogames</h2>
      <img className={style.imagegames} src={Videogames} alt='PI videogames' />
    </Link>
    <Link to='https://ticket-show.netlify.app/' target="_blank">
      <h2 className={style.titulo2}>TicketShow</h2>
      <img className={style.ticket} src={Ticket} alt='ticketshow' />
    </Link>
</section>
    </div>
  )}
    </div>
  )
}

export default Project