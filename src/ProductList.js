import React, { Component } from 'react';
import ProductListForm from './ProductListForm';

class ProductList extends Component {
    static defaultProps = {
    data: []
    }

    render() {
    const { data } = this.props;
    const list = data.map(
        info => (<ProductListForm key={info.id} info={info}/>)
    );

    return (
        <React.Fragment>
        {list}
        </React.Fragment>
    );
}
}

export default ProductList;