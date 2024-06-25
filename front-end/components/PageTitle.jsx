import 'bootstrap/dist/css/bootstrap.min.css'

export default function PageTitle(props){
    const className = `display-${props.size} text-${props.color} text-center`
    return(
        <h1 className={className}>{props.text}</h1>
    )
}

PageTitle.defaultProps = {
    size:'5',
    color:'dark'
}