import React from 'react';
import './collection-preview.scss';

const CollectionPreview = ({title, items}) => (
    <div class='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className="preview-container">
            {
                items
                    .filter((item, idx) => idx < 4)
                    .map((item, idx) => (<h1 key="item.id">{item.name}</h1>))
            }
        </div>
    </div>
)

export default CollectionPreview;