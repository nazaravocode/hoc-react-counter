import React, {Component} from 'react';

function propsLogger ( Component) {
     return class extends React.Component {
        constructor(props) {
            super(props);
            this.props = props;
        }
         componentWillReceiveProps(aaa) {
             console.log('this.props', this.props);
             console.log('next.props', aaa);
         }

         render() {
             return <Component {...this.props} />;
         }

     }
}
export default propsLogger;