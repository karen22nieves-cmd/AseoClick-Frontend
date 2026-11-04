import { useState } from 'react'
import { Link } from 'react-router-dom'

function GestionReporte() {
  const [clasificacion, setClasificacion] = useState('Microbasurero')
  const [prioridad, setPrioridad] = useState('Alta')
  const [asignadoA, setAsignadoA] = useState('Empresa de aseo')
  const [mensaje, setMensaje] = useState('')

  function guardarAsignacion(evento) {
    evento.preventDefault()

    setMensaje('¡Asignación guardada correctamente! (Demostración)')
  }

  return (
    <main className="contenedor-login">
      <section className="formulario-login formulario-reporte">
        <img
          src="/logo-aseoclick.svg"
          alt="Logotipo de AseoClick"
          className="logo"
        />

        <h1>Gestión del reporte</h1>
        <p>Clasifica y asigna el reporte</p>

        <div className="tarjeta-reporte">
          <h2>Reporte 001</h2>
          <p>
            <strong>Ubicación:</strong> Cra 0 # 00-00
          </p>
          <p>
  <strong>Estado:</strong>{' '}
  <span className="estado-en-proceso">En proceso</span>
</p>
        </div>

        <form onSubmit={guardarAsignacion} className="formulario-gestion">
          <label htmlFor="clasificacion">Clasificación</label>
          <select
            id="clasificacion"
            value={clasificacion}
            onChange={(evento) => setClasificacion(evento.target.value)}
            required
          >
            <option value="Microbasurero">Microbasurero</option>
            <option value="Acumulación de residuos">
              Acumulación de residuos
            </option>
            <option value="Escombros">Escombros</option>
          </select>

          <label htmlFor="prioridad">Prioridad</label>
          <select
            id="prioridad"
            value={prioridad}
            onChange={(evento) => setPrioridad(evento.target.value)}
            required
          >
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
          </select>

          <label htmlFor="asignadoA">Asignar a</label>
          <select
            id="asignadoA"
            value={asignadoA}
            onChange={(evento) => setAsignadoA(evento.target.value)}
            required
          >
            <option value="Empresa de aseo">Empresa de aseo</option>
            <option value="Equipo de limpieza">Equipo de limpieza</option>
            <option value="Cuadrilla de mantenimiento">
              Cuadrilla de mantenimiento
            </option>
          </select>

          <button type="submit" className="boton-login">
            Guardar asignación
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

export default GestionReporte