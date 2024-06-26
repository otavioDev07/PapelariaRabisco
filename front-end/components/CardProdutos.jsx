export default function CardProdutos(props) {
    // Converte a prop preco para um número
    const preco = +props.preco
    return (
        <div className="card my-3">
            <div className="card-header">
                <h5 className="card-title">{props.nome}</h5>
            </div>
            <img src={`produtos/${props.nome}.png`} onError={(e) => {
                e.target.src = 'produtos/imagempadrao.png'
            }} className="card-img-top"/>
            <div className="card-body">
                <p className="card-text">{props.desc}</p>
                <button type="button" class="btn btn-outline-info">R$ {props.valor}</button>
            </div>
            <div className="card-footer">
                <h6 className="card-subtitle mb-2 text-body-secondary">{props.qtd} unidade (s) em estoque</h6>
            </div>
        </div>
    )
}

CardProdutos.defaultProps = {
    nome:'Produto',
    desc:'Descrição do produto',
    valor:0,
    qtd:0
}
