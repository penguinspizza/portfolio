import Layout from '../components/layout'

export default function About() {
  return (
    <div>
      <Layout title="About | Keito Yamada&#39;s Portfolio" isFixedFooter={false}>
        <div className="card mt-3 mb-3">
          <div className="card-body">
            <h2 className="card-title">山田 啓徒</h2>
            <h5 className="card-subtitle mb-2 text-muted">Yamada Keito</h5>
            <p className="card-text">名古屋文理大学 情報メディア学部 情報メディア学科 4年</p>
          </div>
        </div>
        <div className="card mt-3 mb-3">
          <div className="card-header">所属</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">アプリ開発プロジェクト</li>
            <li className="list-group-item">資格取得クラブ</li>
          </ul>
        </div>
        <div className="card mt-3 mb-3">
          <div className="card-header">趣味</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">サイクリング（ロードバイク）</li>
            <li className="list-group-item">旅行・ドライブ</li>
            <li className="list-group-item">アプリケーション開発・プログラミング・電子工作</li>
          </ul>
        </div>
        <div className="card mt-3 mb-3">
          <div className="card-header">資格</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">ITパスポート試験 <span className="badge bg-secondary">2019年8月取得</span></li>
            <li className="list-group-item">準中型第一種自動車免許 <span className="badge bg-secondary">2020年3月取得</span></li>
            <li className="list-group-item">基本情報技術者試験 <span className="badge bg-secondary">2021年4月取得</span></li>
            <li className="list-group-item">色彩検定3級 <span className="badge bg-secondary">2021年7月取得</span></li>
            <li className='list-group-item'>応用情報技術者試験 <span className="badge bg-secondary">2021年12月取得</span></li>
            <li className='list-group-item'>情報処理安全確保支援士試験 <span className="badge bg-secondary">2022年12月取得</span></li>
            <li className='list-group-item text-muted'>ネットワークスペシャリスト試験 <span className="badge bg-danger">現在取得に向けて勉強中</span></li>
          </ul>
        </div>
      </Layout>
    </div>
  )
}
