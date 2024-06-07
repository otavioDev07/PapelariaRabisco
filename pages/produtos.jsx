import Headerb from '../components/Headerb'
import PageTitle from '../components/PageTitle'
import CardProduto from '@/components/CardProduto'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Produtos() {
    return (
        <>
            <Headerb />
            <PageTitle text="Conheça nossos produtos!" color="success" />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <CardProduto />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <CardProduto />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <CardProduto />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <CardProduto />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <CardProduto />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <CardProduto />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <CardProduto />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <CardProduto />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <CardProduto />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <CardProduto />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <CardProduto />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <CardProduto />
                    </div>
                </div>
            </div>
        </>
    )
}
