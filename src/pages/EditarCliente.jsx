import { obtenerCliente } from '../data/clientes'

export async function loader({params}){
    const cliente = await obtenerCliente(params.clienteId)
    if (Object.values(cliente).length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'No hay Resultados'
        })
    }
    return cliente
 }

const EditarCliente = () => {
  return (
    <div>
      editar
    </div>
  )
}

export default EditarCliente
