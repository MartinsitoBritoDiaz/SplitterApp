export const Result = ({title, totalResult}: any) => {
  return (
    <div className='result'>
        <div className='result--description'>
            <h3>{title}</h3>
            <p>/ person</p>
        </div>
        <div className='result--price'>
            <p>{totalResult}</p>
        </div>
    </div>
  )
}
