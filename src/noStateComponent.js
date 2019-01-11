import React from "react";

// export default function(props){
//     let lastTime = +new Date()
//     return <div>{props.name},lastTime:{lastTime}</div>
// }

export default class Index extends React.PureComponent{
    constructor(props){
        super(props)
    }
    render () {
        let lastTime = +new Date()
        return <div>{this.props.name},lastTime:{lastTime}</div>
    }
}
