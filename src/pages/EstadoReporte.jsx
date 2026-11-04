import { Link, useSearchParams } from 'react-router-dom'

function EstadoReporte() {
  const [parametros] = useSearchParams()

  const idSolicitado = parametros.get('id')

  const idReporte = ['001', '002', '003'].includes(idSolicitado)
    ? idSolicitado
    : '001'
    const reportes = {
  '001': {
    ubicacion: 'Cra 0 # 00-00',
    fecha: '16/08/2026',
    estado: 'En proceso',
    prioridad: 'Media'
  },
  '002': {
    ubicacion: 'Calle 10 # 15-20',
    fecha: '17/08/2026',
    estado: 'Resuelto',
    prioridad: 'Baja'
  },
  '003': {
    ubicacion: 'Carrera 20 # 30-40',
    fecha: '18/08/2026',
    estado: 'En proceso',
    prioridad: 'Alta'
  }
}

const reporte = reportes[idReporte]
const estaClasificado = reporte.estado === 'En proceso' || reporte.estado === 'Resuelto'

const estaResuelto = reporte.estado === 'Resuelto'
  return (
    <main className="contenedor-login">
      <section className="formulario-login formulario-reporte">

        <img
          src="/logo-aseoclick.svg"
          alt="Logotipo de AseoClick"
          className="logo"
        />

        <h1>Estado del reporte</h1>
        <p>Consulta el seguimiento de tu reporte</p>

        <div className="tarjeta-reporte">
          <h2>Reporte {idReporte}</h2>
          <p><strong>Ubicación:</strong> {reporte.ubicacion}</p>
          <p><strong>Fecha:</strong> {reporte.fecha}</p>
          
  <p>
  <strong>Estado:</strong>{' '}
  <span className={reporte.estado === 'En proceso' ? 'estado-en-proceso' : ''}>
    {reporte.estado}
  </span>
</p>
        </div>

        <h2 className="titulo-seccion">Seguimiento</h2>

        <div className="seguimiento-reporte">
  <p>Reporte recibido</p>

  <p>
  <span className={estaClasificado ? 'chulito-verde' : 'circulo-pendiente'}>
    {estaClasificado ? '✓' : '○'}
  </span>
  Reporte clasificado
</p>

<p>
  <span className={estaResuelto ? 'chulito-verde' : 'circulo-pendiente'}>
    {estaResuelto ? '✓' : '○'}
  </span>
  Reporte resuelto
</p>
</div>

        <h2 className="titulo-seccion">Retroalimentación</h2>

        <div className="tarjeta-reporte">
          <p>
            El reporte fue asignado a la empresa de aseo y
            se encuentra en proceso de atención.
          </p>
        </div>

        <p>
          <Link to="/crear-reporte">Volver a crear reporte</Link>
        </p>

      </section>
    </main>
  )
}

export default EstadoReporte