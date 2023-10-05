import style from './Acerca.module.css'
import happy from '../assets/happy-hacker.gif'
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';

const Acerca = () => {

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
    <div className={style.acercontainer }>
   
    <div className={style.containerText}>

      <h2 className={style.acerca}>¡Hola! Soy Kenny Perez, un apasionado de la tecnología con raíces en Venezuela y actualmente vivo en Argentina. Mi trayectoria educativa comenzó con un enfoque en la administración, y me convertí en Técnico Superior en Administración. Sin embargo, mi búsqueda de desafíos me llevó a explorar un mundo completamente nuevo: LA PROGRAMACIÓN.



</h2> 
    <h2 className={style.acerca2}>En mi viaje de aprendizaje, me sumergí en el fascinante mundo del desarrollo web y me certifiqué como Full Stack Developer en la prestigiosa escuela de programación "Soy Henry". Esta experiencia me ha brindado una sólida base en tanto el desarrollo backend como el frontend.

Mi habilidad para trabajar en ambos lados del desarrollo web me permite abordar proyectos de manera integral, desde la creación de servidores y bases de datos hasta la construcción de interfaces de usuario atractivas y funcionales.

</h2>
    <h2 className={style.acerca3}>Si estás buscando un desarrollador versátil y comprometido, estaré encantado de hablar contigo y explorar cómo puedo aportar valor a tu equipo.

¡Espero conocer nuevos desafíos y oportunidades emocionantes en el mundo de la tecnología!</h2>
    </div>
    <img className={style.gifi} src={happy} to='gif'/>
    
    </div>
    )}
    </div>
  )
}

export default Acerca