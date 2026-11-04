import { useState } from 'react'
import { Link } from 'react-router-dom'

function RegistrarAccion() {
  const [accion, setAccion] = useState('')
  const [fecha, setFecha] = useState('')
  const fechaFormateada = fecha
  ? fecha.split('-').reverse().join('/')
  : ''
  const [fotografia, setFotografia] = useState(null)
  const [mensaje, setMensaje] = useState('')

  function registrarAccion(evento) {
    evento.preventDefault()

    if (!accion.trim()) {
      setMensaje('Por favor, describe la acción realizada.')
      return
    }

    if (!fecha) {
      setMensaje('Por favor, selecciona la fecha de la acción.')
      return
    }

    if (!fotografia) {
      setMensaje('Por favor, adjunta una fotografía.')
      return
    }

    setMensaje('¡Acción de limpieza registrada correctamente! (Demostración)')
  }

  return (
    <main className="contenedor-login">
      <section className="formulario-login formulario-reporte">
        <img
          src="/logo-aseoclick.svg"
          alt="Logotipo de AseoClick"
          className="logo"
        />

        <h1>Registrar acción de limpieza</h1>
        <p>Registra la atención realizada al reporte</p>

        <div className="tarjeta-reporte">
          <h2>Reporte 001</h2>

          <p>
            <strong>Ubicación:</strong> Cra 0 # 00-00
          </p>
          <p><strong>Fecha:</strong> 16/08/2026</p>

          <p>
            <strong>Estado:</strong>{' '}
            <span className="estado-en-proceso">En proceso</span>
          </p>
        </div>

        <form onSubmit={registrarAccion} className="formulario-gestion">
          <label htmlFor="accion-realizada">Acción realizada</label>

          <textarea
            id="accion-realizada"
            placeholder="Describe la limpieza realizada..."
            value={accion}
            onChange={(evento) => {
              setAccion(evento.target.value)
              setMensaje('')
            }}
            rows="5"
            required
          />

          <label htmlFor="fecha-accion">Fecha de la acción</label>

          <div className="contenedor-fecha">
  <input
    type="date"
    id="fecha-accion"
    className="fecha-accion"
    lang="es-CO"
    value={fecha}
    onChange={(evento) => {
      setFecha(evento.target.value)
      setMensaje('')
    }}
    required
  />

  <span className="texto-fecha">
    {fechaFormateada || 'dd/mm/aaaa'}
  </span>
</div>

          <label htmlFor="evidencia-accion">Evidencia fotográfica</label>

         <label
  htmlFor="evidencia-accion"
  className="boton-fotografia-accion"
>
  <span className="icono-camara" aria-hidden="true">📷</span>
  <span>Agregar fotografía</span>
</label>

<input
  type="file"
  id="evidencia-accion"
  className="input-fotografia-accion"
  accept="image/*"
  onChange={(evento) => {
    setFotografia(evento.target.files[0] || null)
    setMensaje('')
  }}
  required
/>

          {fotografia && (
            <p>Fotografía seleccionada: {fotografia.name}</p>
          )}

          <button type="submit" className="boton-login">
            Registrar acción
          </button>
        </form>

        {mensaje && (
          <p role="status" className="mensaje-exito">
            {mensaje}
          </p>
        )}

        <p>
          <Link to="/gestion-reportes">
            Volver a gestión de reportes
          </Link>
        </p>
      </section>
    </main>
  )
}

export default RegistrarAccion