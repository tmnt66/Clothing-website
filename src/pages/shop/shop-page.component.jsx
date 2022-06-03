import React from "react";
import {Component} from 'react'
import CollectionPreview from "../../components/preview.collection.component/preview-collection";
import SHOP_DATA from "./shop.data";


class ShopPage extends Component {
    constructor() {
        super()
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {

        const {collections} = this.state
        // collections.map(({id ,title,val,items})=>(
        //   console.log(...title)
        // ))
      
        return ( 
            <div className="shop-page">
                {
                   collections.map(({id ,...others})=>(
                       <CollectionPreview key = {id} {...others}  />
                   ))
                }
            </div>
        )
    }
}

export default ShopPage