import Layout from '../components/layout'
import Link from 'next/link'

export default function Index() {
  return (
    <div>
      <Layout title="Home | Keito Yamada&#39;s Portfolio" isFixedFooter={true}>
        <div>
          <h1 className='text-center m-4'>Keito Yamada&#39;s Portfolio</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4 m-4">
            <div className='col text-center'>
              <Link href="/about">
                <button type="button" className="btn btn-outline-primary btn-lg">
                  <h2>私について</h2>
                  <hr></hr>
                  <h5>About</h5>
                </button>
              </Link>
            </div>
            <div className='col text-center'>
              <Link href="/works">
                <button type="button" className="btn btn-outline-primary btn-lg">
                  <h2>作品一覧</h2>
                  <hr></hr>
                  <h5>Works</h5>
                </button>
              </Link>
            </div>
            <div className='col text-center'>
              <Link href="/skill">
                <button type="button" className="btn btn-outline-primary btn-lg">
                  <h2>スキル</h2>
                  <hr></hr>
                  <h5>Skill</h5>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
