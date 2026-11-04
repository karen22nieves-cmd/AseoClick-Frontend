import { useState } from 'react'
import { Link } from 'react-router-dom'

function CrearReporte() {
  const [ubicacion, setUbicacion] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [fotografia, setFotografia] = useState(null)
  const [mensaje, setMensaje] = useState('')
function obtenerUbicacion() {
  if (!navigator.geolocation) {
    setMensaje('Tu navegador no permite obtener la ubicación.')
    return
  }

  setMensaje('Obteniendo ubicación...')

  navigator.geolocation.getCurrentPosition(
    (posicion) => {
      const latitud = posicion.coords.latitude.toFixed(6)
      const longitud = posicion.coords.longitude.toFixed(6)

      setUbicacion(`${latitud}, ${longitud}`)
      setMensaje('Ubicación obtenida correctamente.')
    },
    () => {
      setMensaje(
        'No fue posible obtener tu ubicación. Puedes escribirla manualmente.'
      )
    },
    {
      enableHighAccuracy: true,
      timeout: 10000
    }
  )
}
  function enviarReporte(evento) {
    evento.preventDefault()

    if (descripcion.trim().length < 10) {
      setMensaje('La descripción debe tener al menos 10 caracteres.')
      return
    }

    setMensaje('Reporte validado correctamente. Envío de demostración.')
  }

  return (
    <main className="contenedor-login">
      <form
  className="formulario-login formulario-reporte"
  onSubmit={enviarReporte}
>
        <img
          src="/logo-aseoclick.svg"
          alt="Logotipo de AseoClick"
          className="logo"
        />

        <h1>Crear reporte</h1>

        <p>Reporta un microbasurero</p>

        <label htmlFor="ubicacion-reporte">Ubicación</label>
        <input
          id="ubicacion-reporte"
          type="text"
         placeholder="Ingresa la dirección o ubicación"
          value={ubicacion}
          onChange={(evento) => setUbicacion(evento.target.value)}
          required
          minLength={5}
        />
<button
  type="button"
  className="boton-ubicacion"
  onClick={obtenerUbicacion}
>
  📍 Usar mi ubicación actual
</button>
        <label htmlFor="descripcion-reporte">Descripción</label>
        <textarea
          id="descripcion-reporte"
          placeholder="Describe el problema encontrado..."
          value={descripcion}
          onChange={(evento) => setDescripcion(evento.target.value)}
          required
          minLength={10}
          maxLength={500}
          rows={4}
        />

       <label htmlFor="fotografia-reporte">
  Evidencia fotográfica
</label>

<label
  htmlFor="fotografia-reporte"
  className="boton-fotografia"
>
  Agregar fotografía 📷
</label>

<input
  id="fotografia-reporte"
  className="input-fotografia"
  type="file"
  accept="image/*"
  aria-label="Seleccionar evidencia fotográfica"
  onChange={(evento) =>
    setFotografia(evento.target.files?.[0] || null)
  }
/>

        {fotografia && (
          <p>Archivo seleccionado: {fotografia.name}</p>
        )}

        <button type="submit" className="boton-login">
          Enviar reporte
        </button>

        {mensaje && <p role="status">{mensaje}</p>}

        <p>
          <Link to="/">Volver al inicio</Link>
        </p>
      </form>
    </main>
  )
}

export default CrearReporte