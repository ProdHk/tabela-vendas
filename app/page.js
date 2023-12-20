import BuscarBairros from '@/services/BuscarBairros'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const bairros = await BuscarBairros()
  return (
    <div>
      <h2>Selecione o bairro desejado</h2>
      <div className='grid grid-rows-5 grid-flow-row'>
        {
          bairros.map((i) => (
            <Link href={`/${i.ID_PRODUTO}`}>
              {i.DS_BAIRRO}
            </Link>
          ))
        }
      </div>
    </div>
  )
}



/* 


i.ID_PRODUTO


*/