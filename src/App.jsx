import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Registro from './pages/Registro'
import RecuperarContrasena from './pages/RecuperarContrasena'
import CrearReporte from './pages/CrearReporte'
import EstadoReporte from './pages/EstadoReporte'
import MapaReportes from './pages/MapaReportes'
import Notificaciones from './pages/Notificaciones'
import GestionReportes from './pages/GestionReportes'
import GestionReporte from './pages/GestionReporte'
import RegistrarAccion from './pages/RegistrarAccion'
import './App.css'

function App() {
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [mostrarContrasena, setMostrarContrasena] = useState(false)

  function iniciarSesion(evento) {
    evento.preventDefault()
    alert('Formulario validado. La conexión al sistema se implementará posteriormente.')
  }

  return (
    <main className="contenedor-login">
      <form className="formulario-login" onSubmit={iniciarSesion}>
        <img
          src="/logo-aseoclick.svg"
          alt="Logotipo de AseoClick"
          className="logo"
        />

        <h1>Bienvenido a AseoClick</h1>
        <p>Inicia sesión para continuar</p>

        <label htmlFor="correo">Correo electrónico</label>
        <input
          id="correo"
          type="email"
          placeholder="ejemplo@correo.com"
          value={correo}
          onChange={(evento) => setCorreo(evento.target.value)}
          required
          maxLength={254}
        />

        <label htmlFor="contrasena">Contraseña</label>
        <div className="campo-contrasena">
          <input
            id="contrasena"
            type={mostrarContrasena ? 'text' : 'password'}
            value={contrasena}
            onChange={(evento) => setContrasena(evento.target.value)}
            required
            minLength={8}
          />

          <button
            type="button"
            onClick={() => setMostrarContrasena(!mostrarContrasena)}
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

       <a href="/recuperar-contrasena">
  ¿Olvidaste tu contraseña?
</a>

        <button type="submit" className="boton-login">
          Iniciar sesión
        </button>

        <p>
         ¿No tienes una cuenta? <a href="/registro">Regístrate</a>
        </p>
      </form>
    </main>
  )
}
function Aplicacion() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/registro" element={<Registro />} />
      <Route
        path="/recuperar-contrasena"
        element={<RecuperarContrasena />}
      />
      <Route
        path="/crear-reporte"
        element={<CrearReporte />}
      />
      <Route path="/estado-reporte" element={<EstadoReporte />} />
      <Route path="/mapa-reportes" element={<MapaReportes />} />
      <Route path="/notificaciones" element={<Notificaciones />} />
      <Route path="/gestion-reportes" element={<GestionReportes />} />
      <Route path="/gestion-reporte" element={<GestionReporte />} />
      <Route path="/registrar-accion" element={<RegistrarAccion />} />
    </Routes>
  )
}
export default Aplicacion