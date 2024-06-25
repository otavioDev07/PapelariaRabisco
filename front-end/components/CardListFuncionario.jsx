import 'bootstrap/dist/css/bootstrap.min.css'
import CardFuncionario from "./CardFuncionario"

export default function CardList(props){
  const {funcionarios} = props

return(
  <div className="container">
    <div className="row">
      {/* ESTRUTURA DE REPETIÇÃO "MAP" */}
      {funcionarios.map((funcionario,index) => {
        return(
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            <CardFuncionario 
              first_name={funcionario.first_name}
              last_name={funcionario.last_name}
              email={funcionario.email}
              avatar={funcionario.avatar}
            />
          </div>
        )
      })}
    </div>
  </div>
)
}