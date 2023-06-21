
const Cliente = ({cliente}) => {

    const {nombre, empresa, email, telefono, id} = cliente

  return (
    <tr>
        <td className="p-5">{nombre}</td>
    </tr>
  )
}

export default Cliente
