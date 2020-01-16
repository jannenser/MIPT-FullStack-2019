// import React from "react";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';
// import Forms from '../Forms'

// import setStateActionTab from "../../actions/actionTab";
// import setStateActionTask from "../../actions/actionTask";

// import { connect } from "react-redux";

// const styles = {
//     fontFamily: "sans-serif",
//     textAlign: "center",
// };
// const insideStyles = {
//     height: '50%',
//     width: '50%',
//     transform: "translate(50%, 20px)",
// };


// class Tasks extends React.Component{
//     render(){
//         return(
//             <div style={styles}>
//                 <div style={insideStyles}>
//                     <Forms setTab={this.props.setStateFunctionTab} setTask={this.props.setStateFunctionTask}/>
//                 </div>
//             </div>
//         );
//     }
// }

// function mapStateToPropsTab(state) {
//     return {
//         user: state.MealInfo.user,
//         tab: state.MealInfo.tab,
//         taskAmnt: state.MealInfo.taskAmnt,
//         event: state.MealInfo.event
//     }
// }

// function mapDispatchToPropsTab(dispatch) {
//     return {
//         setStateFunctionTab: tab => {
//             dispatch(setStateActionTab(tab))
//         }
//     }
// }

// function mapDispatchToPropsTask(dispatch) {
//     return {
//         setStateFunctionTask: event => {
//             dispatch(setStateActionTask(event))
//         }
//     }
// }

// export default connect(mapStateToPropsTab, mapDispatchToPropsTab, mapDispatchToPropsTask)(Tasks);