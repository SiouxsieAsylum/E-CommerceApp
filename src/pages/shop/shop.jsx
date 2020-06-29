import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import SHOP_DATA from '../../test/shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.jsx'
import './shop.scss';

class Shop extends Component {
    constructor(props){
        super(props);
        this.state = {
            collections: SHOP_DATA,
        }
    }

    componentDidMount(){
        const pathname = this.props.location.pathname;
        const match = this.props.match.url;
        this.setState({routeName: pathname.replace(match, '')})
    }

    componentWillUpdate(){
        
    }

    render(){
        
        // you can destructure state to make it more easily accessible
        const { collections } = this.state;
        return(
        <div className="shop-page">
            {collections.map(({id, ...collectionProps}) => (
                <CollectionPreview
                    key={id}
                    {...collectionProps}
                    />
                ))
            }
        </div>
        )
    }
}

export default withRouter(Shop);