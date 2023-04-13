export default function WorksElement(props) {
  return (
    <div className="card h-100">
      <div className="h-100 d-flex align-items-center">
        <img src={props.img} className="card-img-top" alt={props.img} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <div className="card-text">
          {props.skills.map((value, index) => (
            <div key={index} className="d-inline">&nbsp;<span className="badge rounded-pill bg-primary">{value}</span></div>
          ))}
        </div>
      </div>
      <div className="card-footer text-muted d-flex justify-content-between">{props.date}<span className={props.typeStyle}>{props.type}</span></div>
    </div>
  )
}
