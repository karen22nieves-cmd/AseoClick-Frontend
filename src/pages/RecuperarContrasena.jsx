import { useState } from 'react'
import { Link } from 'react-router-dom'

function RecuperarContrasena() {
  const [correo, setCorreo] = useState('')
  const [mensaje, setMensaje] = useState('')

  function recuperarContrasena(evento) {
    evento.preventDefault()

    setMensaje(
      'Solicitud recibida. Esta función estará disponible cuando conectemos el sistema.'
    )
  }

  return (
    <main className="contenedor-login">
      <form
        className="formulario-login"
        onSubmit={recuperarContrasena}
      >
        <img
          src="/logo-aseoclick.svg"
          alt="Logotipo de AseoClick"
          className="logo"
        />

       <h1>Recupera tu contraseña</h1>

        <p>Ingresa tu correo electrónico</p>

        <label htmlFor="correo-recuperacion">
          Correo electrónico
        </label>

        <input
          id="correo-recuperacion"
          type="email"
          placeholder="ejemplo@correo.com"
          value={correo}
          onChange={(evento) => setCorreo(evento.target.value)}
          autoComplete="email"
          required
        />

       <button type="submit" className="boton-login">
  Enviar enlace
</button>

        {mensaje && <p role="status">{mensaje}</p>}

        <p>
          <Link to="/">Volver al inicio de sesión</Link>
        </p>
      </form>
    </main>
  )
}

export default RecuperarContrasena