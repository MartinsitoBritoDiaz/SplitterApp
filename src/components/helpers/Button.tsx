export const Button = ({title, onClick, style}: any) => {
  return (
    <button className={style} name={title} onClick={onClick}>{title}</button>
  )
}
