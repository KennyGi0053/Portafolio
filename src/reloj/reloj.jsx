import React, {Component} from "react";
import style from './reloj.module.css'
class Reloj extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hora: '00',
            minuto: '00',
            segundo: '00'
        };
    }

    componentDidMount() {
        // Actualizar el reloj cada segundo
        this.intervalID = setInterval(this.actualizarReloj, 1000);
        // Configurar el reloj inicialmente
        this.actualizarReloj();
    }

    componentWillUnmount() {
        // Limpiar el intervalo cuando el componente se desmonta
        clearInterval(this.intervalID);
    }

    actualizarReloj = () => {
        const ahora = new Date();
        const hora = ahora.getHours().toString().padStart(2, '0');
        const minuto = ahora.getMinutes().toString().padStart(2, '0');
        const segundo = ahora.getSeconds().toString().padStart(2, '0');

        this.setState({
            hora,
            minuto,
            segundo
        });
    }

    render() {
        return (
            <div className={style.reloj}>
                <span className={style.tiempo} id="hora">{this.state.hora}</span>:
                <span className={style.tiempo} id="minuto">{this.state.minuto}</span>:
                <span className={style.tiempo} id="segundo">{this.state.segundo}</span>
            </div>
        );
    }
}

export default Reloj;