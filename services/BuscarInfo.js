import axios from "axios"

export default async function BuscarInfo(props) {
    const { id } = props
    try {

        const url = `https://crmapi.capys.com.br/api/apiProduto/GetObraProdutosPorUnidade?idUnidade=${id}&idOrganizacao=DED568EE-50ED-416D-B47A-C1AD999C21F0&idSistema=3&idTipoCaso=4&idUsuarioRequisicao=23806`
        const data = await axios.get(url).then((res) => res.data)
        return data

    } catch (error) {
        console.log("Não foi possivel carregar os dados solicitados, verifique a API")

    }
}