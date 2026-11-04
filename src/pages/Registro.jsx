import { useState } from 'react'

function Registro() {
 const [nombre, setNombre] = useState('')
const [apellido, setApellido] = useState('')
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [confirmarContrasena, setConfirmarContrasena] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [mostrarContrasena, setMostrarContrasena] = useState(false)
const [mostrarRequisitos, setMostrarRequisitos] = useState(false)
const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false)
const [confirmacionRevisada, setConfirmacionRevisada] = useState(false)
  function registrarUsuario(evento) {
    evento.preventDefault()

    if (contrasena !== confirmarContrasena) {
      setMensaje('Las contraseñas no coinciden.')
      return
    }

    setMensaje('Formulario validado correctamente. Registro de demostración.')
  }

  return (
    <main className="contenedor-login">
      <form className="formulario-login" onSubmit={registrarUsuario}>
        <img
         src="/logo-aseoclick.svg"
          alt="Logotipo de AseoClick"
          className="logo"
        />

        <h1>Crea tu cuenta</h1>
       <p>Regístrate para comenzar</p>

        <label htmlFor="nombre">Nombre(s)</label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(evento) => setNombre(evento.target.value)}
          required
          minLength={2}
          maxLength={50}
        />

        <label htmlFor="apellido">Apellido(s)</label>
        <input
          id="apellido"
          type="text"
          value={apellido}
          onChange={(evento) => setApellido(evento.target.value)}
          required
          minLength={2}
          maxLength={50}
        />

        <label htmlFor="correo-registro">Correo electrónico</label>
        <input
          id="correo-registro"
          type="email"
          value={correo}
          onChange={(evento) => setCorreo(evento.target.value)}
          required
          maxLength={254}
        />

       <label htmlFor="contrasena-registro">Contraseña</label>
<div
  className="campo-contrasena"
  onMouseEnter={() => setMostrarRequisitos(true)}
  onMouseLeave={() => setMostrarRequisitos(false)}
>
  <input
    id="contrasena-registro"
    type={mostrarContrasena ? 'text' : 'password'}
    value={contrasena}
    onChange={(evento) => setContrasena(evento.target.value)}
    onFocus={() => setMostrarRequisitos(true)}
    required
    minLength={8}
    pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}"
    
    aria-describedby="requisitos-contrasena"
  />

  <button
    type="button"
    className="boton-mostrar-contrasena"
    onClick={() => setMostrarContrasena(!mostrarContrasena)}
    aria-label={mostrarContrasena ? 'Ocultar contraseña' : 'Mostrar contraseña'}
    aria-pressed={mostrarContrasena}
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#777777"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {mostrarContrasena ? (
        <>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
        </>
      ) : (
        <>
          <path d="M10.6 5.1A10.8 10.8 0 0 1 12 5c6.5 0 10 7 10 7a14.4 14.4 0 0 1-3 3.8" />
          <path d="M6.2 6.2C3.5 8.1 2 12 2 12s3.5 7 10 7a10.3 10.3 0 0 0 5.8-1.8" />
          <path d="M10 10a3 3 0 0 0 4 4" />
          <path d="M3 3l18 18" />
        </>
      )}
    </svg>
  </button>
</div>
<div className="contenedor-requisitos">
{mostrarRequisitos &&
  !(
    contrasena.length >= 8 &&
    /[A-Z]/.test(contrasena) &&
    /[a-z]/.test(contrasena) &&
    /[0-9]/.test(contrasena)
  ) && (
  <div
    id="requisitos-contrasena"
    className="requisitos-contrasena"
  >
    <p>Tu contraseña debe contener:</p>

    <p className={contrasena.length >= 8 ? 'requisito-cumplido' : ''}>
      {contrasena.length >= 8 ? '✓' : '○'} Mínimo 8 caracteres
    </p>

    <p className={/[A-Z]/.test(contrasena) ? 'requisito-cumplido' : ''}>
      {/[A-Z]/.test(contrasena) ? '✓' : '○'} Una letra mayúscula
    </p>

    <p className={/[a-z]/.test(contrasena) ? 'requisito-cumplido' : ''}>
      {/[a-z]/.test(contrasena) ? '✓' : '○'} Una letra minúscula
    </p>

    <p className={/[0-9]/.test(contrasena) ? 'requisito-cumplido' : ''}>
      {/[0-9]/.test(contrasena) ? '✓' : '○'} Un número
    </p>
  </div>
)}
</div>
<label htmlFor="confirmar-contrasena">Confirmar contraseña</label>
<div className="campo-contrasena">
  <input
    id="confirmar-contrasena"
    type={mostrarConfirmacion ? 'text' : 'password'}
    value={confirmarContrasena}
onChange={(evento) => {
  setConfirmarContrasena(evento.target.value)
  setConfirmacionRevisada(false)
}}
    required
    minLength={8}
    onBlur={() => setConfirmacionRevisada(true)}
  />

  <button
    type="button"
    className="boton-mostrar-contrasena"
    onClick={() => setMostrarConfirmacion(!mostrarConfirmacion)}
    aria-label={
      mostrarConfirmacion
        ? 'Ocultar confirmación de contraseña'
        : 'Mostrar confirmación de contraseña'
    }
    aria-pressed={mostrarConfirmacion}
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#777777"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {mostrarConfirmacion ? (
        <>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
        </>
      ) : (
        <>
          <path d="M10.6 5.1A10.8 10.8 0 0 1 12 5c6.5 0 10 7 10 7a14.4 14.4 0 0 1-3 3.8" />
          <path d="M6.2 6.2C3.5 8.1 2 12 2 12s3.5 7 10 7a10.3 10.3 0 0 0 5.8-1.8" />
          <path d="M10 10a3 3 0 0 0 4 4" />
          <path d="M3 3l18 18" />
        </>
      )}
    </svg>
  </button>
</div>
{confirmacionRevisada &&
  confirmarContrasena !== '' &&
  contrasena !== confirmarContrasena && (
    <p className="mensaje-contrasena-error" role="status">
      Las contraseñas no coinciden.
    </p>
  )}
        {mensaje && <p role="status">{mensaje}</p>}

       <button type="submit" className="boton-login">
  Crear cuenta
</button>

        <p>
          ¿Ya tienes una cuenta? <a href="/">Inicia sesión</a>
        </p>
      </form>
    </main>
  )
}

export default Registro