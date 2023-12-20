import axios from "axios";
import Link from "next/link";

export default async function Handler() {
    const url = "https://crmapi.capys.com.br/api/apiProduto/GetEmpreendimentos?idOrganizacao=DED568EE-50ED-416D-B47A-C1AD999C21F0&idSistema=3&idTipoCaso=4&idUsuarioRequisicao=23806"
    const data = await axios.get(url).then((res) => res.data)
    console.log(data.map((i) => (
        i.DS_CIDADE
    )))

    const municipios = data.filter((i) => i.DS_CIDADE === i.DS_CIDADE ? "work" : 'erro')

    return (
        <div className="w-screen h-screen flex flex-col text-center items-center justify-start">
            {/* Header */}
            <div className="w-full h-10 bg-purple-500 text-zinc-900"  >
                <p>
                    Selecione abaixo o municipio desejado
                </p>
            </div>
            <div className="w-3/6 h-4/6 flex flex-col justify-between text-center items-center">

                {municipios.map((i) => (
                    <Link
                        className="bg-blue-500 text-zinc-900 p-2"
                        href={`/${i.ID_PRODUTO}`}
                        key={i.DS_CIDADE}

                    >
                        {i.DS_CIDADE}
                    </Link>
                ))}



            </div>
            {/* Section */}
        </div>
    )
}


/* 


https://crmapi.capys.com.br/api/apiProduto/GetEmpreendimentosResumoPorEquipe?idOrganizacao=DED568EE-50ED-416D-B47A-C1AD999C21F0&idSistema=3&idTipoCaso=4&idUsuarioRequisicao=23806

*/