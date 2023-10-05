import ReactAudioPlayer from 'react-audio-player'
import lounge from '../assets/Tropical Lounge.mp3'
import style from './Musica.module.css'
const Musica = () => {
  return (
    <div>
      <ReactAudioPlayer className={style.Musi}
        src={lounge} // Reemplaza esto con la URL de tu archivo de audio
        controls // Esto agrega controles de reproducción (pausa, reproducción, volumen, etc.)
      />
    </div>
  )
}

export default Musica