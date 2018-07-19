import React,{Component} from 'react';
import { withAuth } from '@okta/okta-react';

class PLP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewType:'grid',       
            productsList: {},  
            showError: false,
            total:0,
            userRole:""
        }
      }


    render() {
        return (
            <div className="component-wrapper">
                <h1>Product Listing Page.</h1>
            </div>
        );
    }
}

export default withAuth(PLP);