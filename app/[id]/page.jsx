"use client"
import BuscarInfo from "@/services/BuscarInfo"
import { useParams } from "next/navigation"


export default async function Handler() {
    const { id } = useParams()
    const data = await BuscarInfo({ id })

    /* Filtrando por lotes disponiveis */

    const disponiveis = data.filter((item) => item.DS_STATUS === 'DISPONÍVEL')

    return (
        <div className="p-5 w-full h-full flex flex-col items-center text-center">
            <div className="bg-white w-4/6 h4/6 rounded-md p-5">

                <h2 className="text-purple-800">
                    Tabela do bairro {data[0].DS_BAIRRO}
                </h2>
                <h4 className="text-purple-400">
                    No momento existem {disponiveis.length} lotes disponiveis
                </h4>
                {/* table */}
                <div>
                    {/* TABLE HEAD */}
                    <div className="flex flex-row p-2 items-center text-center justify-between text-zinc-950">
                        <p>N Lote</p>
                        <p>N Quadra</p>
                        <p>Valor</p>
                    </div>
                    {/* TABLE ROW */}
                    {
                        disponiveis.map((i) => (
                            <div className="  flex flex-row p-2 items-center text-center justify-between text-zinc-950">
                                <p className=" w-2/6 flex flex-row  items-center text-start justify-start text-zinc-950">{i.NR_QUADRA ? i.NR_QUADRA : "NÃO INFORMADO"}</p>
                                <p className=" w-2/6 flex flex-row  items-center text-start justify-start text-zinc-950">{i.DS_BLOCO ? i.DS_BLOCO : "NÃO INFORMADO"}</p>
                                <p>Valor</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}