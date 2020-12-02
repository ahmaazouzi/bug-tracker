import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


// =============================================================== Remove this at some point =============================================

// ReactDOM.render(<NameForm />,
//   document.getElementById('root')
// );

// =============================================================== Remove this at some point =============================================

// class MyComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       items: []
//     };
//   }

//   componentDidMount() {
//     Promise.all([
//     fetch("https://localhost:5001/teams/1"),
//     fetch("https://localhost:5001/sprints/1")
//   ])
//       .then(res => Promise.all(res.map(r => r.json())))
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             items: (result[0]).members,
//             tickets: (result[1]).assignedTickets
//           });
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//   }

//   render() {
//     const { error, isLoaded, items, tickets } = this.state;
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <ul>
//           {items.map(item => (
//             <li key={item.id}>
//               {item.fullName}
//             </li>
//           ))}
//           {tickets.map(item => (
//             <li key={item.id}>
//               {item.summary}
//             </li>
//           ))}
//         </ul>
//       );
//     }
//   }
// }



// export default Basic;

// ReactDOM.render(<SignupForm />, document.getElementById("root"));











