import React, { PureComponent } from "react";

export default class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { name: "demo react", time: +new Date() };
  }
  handleUpdateName() {
    // 修改不会重新渲染
    // this.state.time = (+new Date())
    // 方法1
    // console.log('修改前的值',this.state.time)
    // this.setState({time:+new Date()})
    // console.log('修改后的值',this.state.time)
    // let that = this
    // setTimeout(function(){
    //     console.log('当前state值',that.state.time)
    // })
    // 方法2
    // console.log("修改前的值", this.state.time);
    // let that = this;
    // this.setState({ time: +new Date() }, function() {
    //   console.log("当前state值", that.state.time);
    // });
    // console.log("修改后的值", this.state.time);
    // 方法2.1
    // console.log("修改前的值", this.state.time);
    // this.state.time = (+new Date())
    // console.log("修改后的值", this.state.time);
    // console.log("当前state值", this.state.time);
    // this.forceUpdate()
    // 方法3
    console.log("修改前的值", this.state.time);
    let that = this;
    this.setState(oldData => {
      return { time: oldData.time + 1000 };
    });
    console.log("修改后的值", this.state.time);
    setTimeout(function() {
      console.log("当前state值", that.state.time);
    });
  }
  render() {
    return (
      <div>
        Hello world React!{this.state.name}
        <p>组件生成时间:{this.state.time}</p>
        <button onClick={this.handleUpdateName.bind(this)}>修改值</button>
      </div>
    );
  }
}
