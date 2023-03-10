const imgLogo: any = {
    path: '/assets/logo.svg',
    alt: 'Logo'
}

export const Header = () => {
  return (
    <div className="header">
        <img className="logo" src={imgLogo.path} alt={imgLogo.alt} />
    </div>
  )
}
