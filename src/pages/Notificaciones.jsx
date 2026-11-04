import { Link } from 'react-router-dom'

function Notificaciones() {
  return (
    <main className="contenedor-login">
      <section className="formulario-login formulario-reporte">
        <img
          src="/logo-aseoclick.svg"
          alt="Logotipo de AseoClick"
          className="logo"
        />

        <h1>Notificaciones</h1>
        <p>Consulta las novedades de tus reportes</p>

        <div className="tarjeta-reporte">
         <h2 className="titulo-notificacion-azul">Reporte en proceso</h2>
          <p>Tu reporte 003 está siendo atendido.</p>
          <p>Hoy, 09:45 a. m.</p>
        </div>

        <div className="tarjeta-reporte">
          <h2>Reporte resuelto</h2>
          <p>Tu reporte 002 fue atendido y resuelto.</p>
          <p>Ayer, 3:45 p. m.</p>
        </div>

        <div className="tarjeta-reporte">
          <h2 className="titulo-notificacion-azul">Nueva retroalimentación</h2>
          <p>Nuevo comentario en tu reporte 001.</p>
          <p>Hoy, 11:15 a. m.</p>
        </div>

        <p>
          <Link to="/mapa-reportes">Volver al mapa de reportes</Link>
        </p>
      </section>
    </main>
  )
}

export default Notificaciones