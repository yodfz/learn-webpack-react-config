import React, { PureComponent } from "react";
import Content from './content.js'
import NoStateComponent from './noStateComponent'
export default class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { name: "demo react", time: +new Date(),obj:[] };
  }
  handleUpdateName() {
    let obj = this.state.obj
    obj.push(+new Date())
    this.setState({time:+new Date(),obj})
  }
  render() {
    return (
      <div>
        Hello world React!{this.state.name}
        <p>组件生成时间:{this.state.time}</p>
        <p>{this.state.obj.join('<br/>')}</p>
        <button onClick={this.handleUpdateName.bind(this)}>修改值</button>
        <Content value={'我设置了' + this.state.time} >主体Children</Content>
        <NoStateComponent name="我没有自己的状态"></NoStateComponent>
        <NoStateComponent name="我只能依靠props直接渲染"></NoStateComponent>
      </div>
    );
  }
}
