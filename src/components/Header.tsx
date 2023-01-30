const imgLogo: any = {
    path: 'src/assets/logo.svg',
    alt: 'Logo'
}

export const Header = () => {
  return (
    <div className="header">
        <img className="logo" src={imgLogo.path} alt={imgLogo.alt} />
    </div>
  )
}
