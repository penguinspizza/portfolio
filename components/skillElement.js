export default function SkillElement(props) {
  return (
    <div className="card mt-3 mb-3">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <div className="progress mb-2">
          <div className="progress-bar" role="progressbar" style={{ width: props.per + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  )
}
