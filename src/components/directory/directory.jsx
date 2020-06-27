import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.jsx';
import './directory.scss'

class DirectoryMenu extends Component {
    constructor(){
        super();
        this.state = {
            sections: [
                {
                    title: 'hats',
                    subtitle: 'Shop Now'

                },
                {
                    title: 'scarves',
                    subtitle: 'Shop Now'

                },
                {
                    title: 'gloves',
                    subtitle: 'Shop Now'

                },
                {
                    title: 'sunglasses',
                    subtitle: 'Shop Now'

                },
                {
                    title: 'jewelry',
                    subtitle: 'Shop Now'

                },
            ]
        }
    }
    render(){
        return (
            <div
                className="directory-menu">
                {
                    this.state.sections.map((item, idx) => <MenuItem key={idx} section={item} /> )
                }
=            </div>
        )
    }
}

export default DirectoryMenu;