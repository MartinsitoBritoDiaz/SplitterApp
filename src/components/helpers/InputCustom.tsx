export const InputCustom = ({title, value, onChange, onClick}: any) => {
  return (
    <input className="tip--input" min={0} max={100} placeholder="Custom" onClick={onClick} value={value} onChange={onChange} name={title}/>
  )
}
