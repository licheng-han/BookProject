import React from 'react';
import Loadable from 'react-loadable';

// eslint-disable-next-line no-unused-vars
const Loading = (props) => (
    <div>
        Loading...
    </div>
);


const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading:Loading,
});

export default class App extends React.Component {
    render() {
        return <LoadableComponent/>;
    }
}