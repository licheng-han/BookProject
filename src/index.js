import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import TodoList from "./test/listTodo";
// import OuterClickExample from './onfonce/onfonce'
import * as serviceWorker from './serviceWorker';
// import BlurExample from './onfonce/fonces'
const BlurExample = React.lazy(()=> import('./onfonce/fonces'));
ReactDOM.render(
  <React.StrictMode>
    {/*<TodoList />*/}
    {/*<OuterClickExample />*/}

      <Suspense fallback={<div>Loading...</div>}>
    <BlurExample/>
      </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
