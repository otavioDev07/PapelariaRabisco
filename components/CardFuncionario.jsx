export default function CardFuncionario(props) {
    return (
        <div className="card my-3">
            <img src={`${props.avatar}`} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{props.first_name} {props.last_name}</h5>
                    <a href="#" className="btn btn-primary">{props.email}</a>
                </div>
        </div>
    )
}

CardFuncionario.defaultProps = {
    first_name:'first_name',
    last_name:'last_name',
    email:'email',
    avatar:'funcionarios/fotopadrao.jpg'
}