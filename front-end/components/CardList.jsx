import CardProdutos from "./CardProdutos"

export default function CardList(props){
    const {produtos} = props
return(
  <div className="container">
    <div className="row">
      {/* ESTRUTURA DE REPETIÇÃO "MAP" */}
      {produtos.map((produto,index) => {
        return(
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            <CardProdutos 
              nome={produto[1]}
              desc={produto[2]}
              valor={produto[3]}
              qtd={produto[4]}
            />
          </div>
        )
      })}
    </div>
  </div>
)
}