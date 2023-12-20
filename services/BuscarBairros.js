import axios from "axios"

export default async function BuscarBairros() {
    const url = "https://crmapi.capys.com.br/api/apiProduto/GetEmpreendimentos?idOrganizacao=DED568EE-50ED-416D-B47A-C1AD999C21F0&idSistema=3&idTipoCaso=4&idUsuarioRequisicao=23806"
    try {
        const bairros = await axios.get(url).then((res) => res.data)
        console.log("Bairros carregados")
        return bairros
    } catch (error) {
        console.log("Os bairros não foram carregados, verifique a api", error)

    }

}