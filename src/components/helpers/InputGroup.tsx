export const InputGroup = ({title, style, placeholder, value, onChange}: any) => {
  return (
    <div className='input--group'>
        <label>{title}</label>
        <div className={`input ${style}`}>
            <input type="number" placeholder={placeholder} value={value ?? ''} onChange={onChange} /*name={title}*/ pattern="[0-9]*" inputMode='decimal'/>
        </div>   
    </div>
  )
}
