import Link from 'next/link'
import useSWR from 'swr'
import Layout from '../components/layout'
import WorksElement from '../components/worksElement'

export default function Works() {

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data } = useSWR('/data.json', fetcher)

  return (
    <Layout title="Works | Keito Yamada's Portfolio" isFixedFooter={false}>
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 mt-0 mb-4">
        {
          data != undefined
          ?
          data.works.map((value, index) => (
            <div key={index} className="col">
              <Link
                as={`/works/${value.url}`}
                href={{
                  pathname: `/works/[url]`
                }}
              >
                <a>
                  <WorksElement
                    index={index}
                    img={value.img}
                    title={value.title}
                    skills={value.skills}
                    date={value.date}
                    type={value.type}
                    typeStyle={value.typeStyle}
                  />
                </a>
              </Link>
            </div>
          ))
          :
          <h1>NOW LOADING...</h1>
        }
      </div>
    </Layout>
  )
}
