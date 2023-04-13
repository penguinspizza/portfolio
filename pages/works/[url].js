import useSWR from 'swr'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'

export default function Url() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data } = useSWR('/data.json', fetcher)

  const asPath = useRouter().asPath

  let worksIndex = 0

  if (data != undefined) {
    for (let i = 0; i < data.works.length; i++) {
      const regExpWorksUrl = new RegExp(data.works[i].url + "$")
      console.log(regExpWorksUrl.test(asPath))
      if (regExpWorksUrl.test(asPath)) {
        worksIndex = i
        break
      }
    }
  }

  return (
    <div>
      {
        data != undefined
          ?
          <Layout title={data.works[worksIndex].title + " | I am Yamada Keito."}>
            <div className="card border-0 d-inline-flex">
              <div className="card-body">
                <h1 className="card-title">{data.works[worksIndex].title}</h1>
                <div className="card-text">
                  {data.works[worksIndex].skills.map((value, index) => (
                    <div key={index} className="d-inline">&nbsp;<span className="badge rounded-pill bg-primary">{value}</span></div>
                  ))}
                </div>
              </div>
              <div className="card-footer text-muted d-flex justify-content-between bg-white">{data.works[worksIndex].date}<span className={data.works[worksIndex].typeStyle}>{data.works[worksIndex].type}</span></div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 g-4 mt-0 mb-4">
              <div className='col'>
                <img src={data.works[worksIndex].img} className="card-img-top" alt={data.works[worksIndex].img} />
              </div>
              <div className='col'>
                <p>{data.works[worksIndex].description}</p>
                {data.works[worksIndex].links.map((value, index) => (
                  <div key={index}>
                    <a href={value.url} className="link-primary" target="_blank">{value.text}</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 mt-0 mb-4">
              {data.works[worksIndex].gallery.map((value, index) => (
                <div key={index} className="col">
                  <img src={value} className="img-fluid" />
                </div>
              ))}
            </div>
          </Layout>
          :
          <Layout title={"NOW LOADING... | I am Yamada Keito."}>
            <h1>NOW LOADING...</h1>
          </Layout>
      }
    </div>
  )
}
