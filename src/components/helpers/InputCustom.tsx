export const InputCustom = ({title, value, onChange}: any) => {
  return (
    <input inputMode="decimal"  pattern="[0-9]*" className="tip--input" min={0} max={100} placeholder="Custom" value={value ?? ''} onChange={onChange} name={title}/>
  )
}
