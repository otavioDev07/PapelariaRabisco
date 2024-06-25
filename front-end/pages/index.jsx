import Headerb from '@/components/Headerb'
import PageTitle from '@/components/PageTitle'
import Carrossel from '@/components/Carrossel'

export default function home(){
    return (
        <>
            <Headerb />
            <PageTitle text="Seja bem vindo a Papelaria Rabisco." color="success" />
            <Carrossel />
        </>
    )
}