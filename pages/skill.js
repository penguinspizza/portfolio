import Layout from '../components/layout'
import SkillElement from '../components/skillElement'

export default function Skill() {
  const skills = [
    {
      title: "Python",
      per: 90,
      description: "基本情報技術者試験のソフトウェア開発でPythonを選択・合格しました。機械学習でよく使っています。"
    }, {
      title: "JavaScript",
      per: 80,
      description: "React・Next.jsをよく使います。TypeScriptも習得してみたいです。"
    }, {
      title: "HTML・CSS",
      per: 35,
      description: "Bootstrapをよく使います。"
    }, {
      title: "Java",
      per: 50,
      description: "オブジェクト指向について学ぶ際に使用しました。今後もアプリケーション開発に使用していく予定です。"
    }, {
      title: "Linux・シェル",
      per: 65,
      description: "Dockerを用いてアプリケーション開発環境の構築などをしています。"
    }, {
      title: "マイコン・ハードウェア",
      per: 55,
      description: "ArduinoやRaspberry Piを使用して電子工作をしています。"
    }
  ]

  return (
    <Layout title="Skill | Keito Yamada&#39;s Portfolio" isFixedFooter={false}>
      {skills.map((value, index) => (
        <SkillElement key={index} title={value.title} per={value.per} description={value.description} />
      ))}
    </Layout>
  )
}
