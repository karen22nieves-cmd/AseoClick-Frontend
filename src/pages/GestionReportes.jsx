import { Link } from 'react-router-dom'

const reportes = [
  {
    id: '001',
    ubicacion: 'Cra 0 # 00-00',
    fecha: '16/08/2026',
    estado: 'En proceso'
  },
  {
    id: '002',
    ubicacion: 'Calle 10 # 15-20',
    fecha: '17/08/2026',
    estado: 'Resuelto'
  },
  {
    id: '003',
    ubicacion: 'Carrera 20 # 30-40',
    fecha: '18/08/2026',
    estado: 'En proceso'
  }
]

function GestionReportes() {
  return (
    <main className="contenedor-login">
      <section className="formulario-login formulario-reporte">
        <img
          src="/logo-aseoclick.svg"
          alt="Logotipo de AseoClick"
          className="logo"
        />

        <h1>Gestión de reportes</h1>
        <p>Consulta los reportes registrados</p>

        {reportes.map((reporte) => (
          <div className="tarjeta-reporte" key={reporte.id}>
            <h2>Reporte {reporte.id}</h2>

            <p>
              <strong>Ubicación:</strong> {reporte.ubicacion}
            </p>

            <p>
              <strong>Fecha:</strong> {reporte.fecha}
            </p>

            <p>
              <strong>Estado:</strong>{' '}
              <span
                className={
                  reporte.estado === 'En proceso'
                    ? 'estado-en-proceso'
                    : ''
                }
              >
                {reporte.estado}
              </span>
            </p>

            <Link to={`/estado-reporte?id=${reporte.id}`}>
              Ver seguimiento
            </Link>
          </div>
        ))}

        <p>
          <Link to="/mapa-reportes">Volver al mapa de reportes</Link>
        </p>
      </section>
    </main>
  )
}

export default GestionReportes