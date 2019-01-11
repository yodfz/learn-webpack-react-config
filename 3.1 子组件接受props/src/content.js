import React, { PureComponent } from "react";

export default class index extends PureComponent {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div style={{'background':'#fefefe'}}>
        {this.props.value||'暂无数据'}，children:{this.props.children}
      </div>
    );
  }
}
