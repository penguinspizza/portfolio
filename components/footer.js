export default function Footer(props) {
  return (
    <footer id="footer" className={props.isFixed ? "footer mt-auto py-3 bg-light fixed-bottom" : "footer mt-auto py-3 bg-light"}>
      <div className="container">
        <span className="text-muted">&copy; Yamada Keito</span>
      </div>
    </footer>
  )
}
