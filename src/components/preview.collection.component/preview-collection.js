import React from "react";
import './collection-preview.styles.scss'
import CollectionItem from '../collection-items/collection-items.components'
const CollectionPreview = ({title,items})=>(
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
           { console.log(items)}
            {items
            .filter((items,idx)=>idx<4)
            .map(({id,...others})=>(
                <CollectionItem key ={id} {...others}/>
            ))}
        </div>
    </div>

)

export default CollectionPreview