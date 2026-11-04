import { useState } from 'react'
import { Link } from 'react-router-dom'

const reportes = [
  {
    id: '001',
    ubicacion: 'Cra 0 # 00-00',
    estado: 'En proceso',
    prioridad: 'Media',
    posicion: { top: '25%', left: '30%' }
  },
  {
    id: '002',
    ubicacion: 'Calle 10 # 15-20',
    estado: 'Resuelto',
    prioridad: 'Baja',
    posicion: { top: '65%', left: '65%' }
  },
  {
    id: '003',
    ubicacion: 'Carrera 20 # 30-40',
    estado: 'En proceso',
    prioridad: 'Alta',
    posicion: { top: '40%', left: '75%' }
  }
]

function MapaReportes() {
  const [reporteSeleccionado, setReporteSeleccionado] = useState(reportes[2])

  return (
    <main className="contenedor-login">
      <section className="formulario-login formulario-reporte">

        <img
          src="/logo-aseoclick.svg"
          alt="Logotipo de AseoClick"
          className="logo"
        />

        <h1>Mapa de reportes</h1>
        <p>Consulta los reportes en tu zona</p>

        <div
          className="mapa-simulado"
          aria-label="Mapa ilustrativo de reportes de demostración"
        >
          {reportes.map((reporte) => (
            <button
              key={reporte.id}
              type="button"
              className={`marcador-mapa marcador-${reporte.estado
                .toLowerCase()
                .replace(' ', '-')}`}
              style={reporte.posicion}
              onClick={() => setReporteSeleccionado(reporte)}
              aria-label={`Ver reporte ${reporte.id}, estado ${reporte.estado}`}
            >
              📍
            </button>
          ))}
        </div>

        <div className="tarjeta-reporte">
          <h2>Reporte {reporteSeleccionado.id}</h2>
          <p>
            <strong>Ubicación:</strong> {reporteSeleccionado.ubicacion}
          </p>
          <p>
            <strong>Estado:</strong> {reporteSeleccionado.estado}
          </p>
          <p>
            <strong>Prioridad:</strong> {reporteSeleccionado.prioridad}
          </p>
        </div>

        <h2 className="titulo-seccion">Estado de los reportes</h2>

       <div className="leyenda-mapa">
  <p>🔵 En proceso</p>
  <p>✅ Resuelto</p>
  <p>⚫ Pendiente</p>
</div>

        <p>
         <Link to={`/estado-reporte?id=${reporteSeleccionado.id}`}>
  Consultar estado del reporte
</Link>
        </p>

        <p>
          <Link to="/crear-reporte">Crear nuevo reporte</Link>
        </p>

      </section>
    </main>
  )
}

export default MapaReportes