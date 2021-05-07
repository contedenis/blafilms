import './styles.css'

function Layout({ children }) {
  return (
    <div className="layout">
      <div className="layout__container">{children}</div>
    </div>
  )
}

function Top({ children }) {
  return <div className="layout__top">{children}</div>
}

function Content({ children }) {
  return <div className="layout__content">{children}</div>
}

function Left({ children }) {
  return <div className="layout__left">{children}</div>
}

function Right({ children }) {
  return <div className="layout__right">{children}</div>
}

Layout.Top = Top
Layout.Content = Content
Layout.Left = Left
Layout.Right = Right

export default Layout
