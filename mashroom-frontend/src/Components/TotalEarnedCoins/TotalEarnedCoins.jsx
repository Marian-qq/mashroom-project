import React from 'react'
import { store } from '../../Store/store'
import { observer } from 'mobx-react'

const TotalEarnedCoins = observer(() => {
  return (
    <div style={{fontSize:"36px", backgroundColor:"yellow"}}>
        Total coins: {store.totalEarnedCoins}
    </div>
  )
})

export default TotalEarnedCoins
