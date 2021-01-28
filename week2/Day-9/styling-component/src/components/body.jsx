import React from 'react'


// state dan props
// export default class Body extends React.Component {
//     render() {
//         return(
//             <div>
//                 <div>
//                     <label>Header</label>
//                     <input value={this.props.dataState.header} onChange={this.props.changeHeader} />
//                 </div>
//                 <div>
//                     <label>footer</label>
//                     <input value={this.props.dataState.footer} onChange={this.props.changeFooter}/>
//                 </div>
//             </div>
//         )
//     }
// }

const Body = () => {
    return <p style={{fontSize: 100}}>Ini Content</p>
}

export default Body;