import React, { Component } from 'react';
import emartLogo from './images/emart-logo.png';
import homeplusLogo from './images/homeplus-logo.png';
import lottemartLogo from './images/lottemart-logo.png';

class ProductListForm extends Component {
  static defaultProps = {
    info: {
      type: '마트종류',
      name: '상품명',
      price: '가격',
      id:0
    }
  }

  render() {
    const {
      type, name, price, id
    } = this.props.info;

    let logo = emartLogo;
    if(type === '이마트')
      logo = emartLogo;
    else if(type === '롯데마트')
      logo = lottemartLogo;
    else if(type === '홈플러스')
      logo = homeplusLogo;

    return (
      <React.Fragment>
        <tr>
          <td>
            <span className="type_logo">
              <img src={logo} alt={type}/>
            </span>
          </td>
          <td>
            <span className="title">{name}</span>
          </td>
          <td>
            <p className="price">{price}원</p>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default ProductListForm;