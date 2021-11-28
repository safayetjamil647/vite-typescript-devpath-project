import React from 'react'
import Card from '../../component/ui-component/Card/Card'
import Tab from '../../component/ui-component/Tab/Tab'
import Tabs from '../../component/ui-component/Tab/Tabs'
function Generate() {
  return (
    <div>
      <h1>This is Generate page.</h1>
      <Card message={'Js'} />
      <Tabs>
      <Tab title="Lemon">Lemon is yellow</Tab>
      <Tab title="Strawberry">Strawberry is red</Tab>
      <Tab title="Pear">Pear is green</Tab>
    </Tabs>
    </div>
  )
}

export default Generate