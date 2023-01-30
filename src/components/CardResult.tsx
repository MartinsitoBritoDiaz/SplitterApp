import React from 'react'
import { Result } from './helpers/Result'
import { Button } from './helpers/Button'

export const CardResult = () => {
  return (
    <div className='card--result'>
        <div className='card--result--header'>
            <Result title={'Tip Amount'} totalResult={'$4.27'}/>

            <Result title={'Total'} totalResult={'$32.79'} />
        </div>

        <div className='card--result--footer'>
            <Button title={'Reset'} />
        </div>
    </div>
  )
}
