import React, { PureComponent } from 'react'

export default class index extends PureComponent {
  
  constructor(){
    this.state = {name:'demo react',time:new Date()}
  }
  handleUpdateName () {
    this.state.name = 'update' + (+new Date())
  }
  render() {
    return (
      <div>
        Hello world React!{this.state.name}
        <p>组件生成时间:{this.state.time}</p>
        <button onClick={this.handleUpdateName.bind(this)}>修改值</button>
      </div>
    )
  }
}
