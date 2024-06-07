export default function CardProduto(props) {
    return (
        <div className="card my-3">
            <div className="card-header">
                <h5 className="card-title">{props.nome}</h5>
            </div>
            <img src={props.imageSrc} className="card-img-top"/>
            <div className="card-body">
                <p className="card-text">{props.desc}</p>
                <p>{props.qtd} unidade (s) em estoque</p>
            </div>
            <div className="card-footer">
                <h6 className="card-subtitle mb-2 text-body-secondary">R$ {props.valor}</h6>
            </div>
        </div>
    )
}

CardProduto.defaultProps = {
    nome:'Produto',
    desc:'Descrição do produto',
    valor:'**,**',
    qtd:'0',
    imageSrc:'produtos/imagempadrao.jpeg'
}