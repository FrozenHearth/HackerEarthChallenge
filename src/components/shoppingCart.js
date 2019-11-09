import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Icon from '@material-ui/core/Icon';
import CloseIcon from '@material-ui/icons/Close';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import '../styles/shoppingCart.css';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: '',
      items: [
        {
          id: 9090,
          name: 'Item1',
          price: 200,
          discount: 10,
          type: 'fiction',
          img_url:
            'https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg'
        },
        {
          id: 9091,
          name: 'Item2',
          price: 250,
          discount: 15,
          type: 'literature',
          img_url:
            'https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg'
        },
        {
          id: 9092,
          name: 'Item3',
          price: 320,
          discount: 5,
          type: 'literature',
          img_url:
            'https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg'
        },
        {
          id: 9093,
          name: 'Item4',
          price: 290,
          discount: 0,
          type: 'thriller',
          img_url:
            'https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg'
        },
        {
          id: 9094,
          name: 'Item5',
          price: 500,
          discount: 25,
          type: 'thriller',
          img_url:
            'https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg'
        },
        {
          id: 9095,
          name: 'Item6',
          price: 150,
          discount: 5,
          type: 'literature',
          img_url:
            'https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg'
        },
        {
          id: 9096,
          name: 'Item7',
          price: 700,
          discount: 22,
          type: 'literature',
          img_url:
            'https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg'
        },
        {
          id: 9097,
          name: 'Item8',
          price: 350,
          discount: 18,
          type: 'fiction',
          img_url:
            'https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg'
        }
      ]
    };
  }
  render() {
    const items = this.state.items;
    return (
      // <Container style={{ margin: '5em 0 0 5em' }} maxWidth="md">
      <>
        <Paper>
          <Table
            style={{ width: '60%', margin: '5em 0 0 5em' }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell> Items ({items.length})</TableCell>
                <TableCell align="center">Qty</TableCell>
                <TableCell align="center">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.items.map(item => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="shopping-cart-item">
                      <img src={item.img_url} alt="" />
                      <p className="item-name">{item.name}</p>
                      <Icon className="delete-item-icon">
                        <CloseIcon />
                      </Icon>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div className="qty-container">
                      <span
                        style={{
                          marginRight: '1em',
                          cursor: 'pointer',
                          fontSize: '1.5rem'
                        }}
                      >
                        {' '}
                        -{' '}
                      </span>
                      <input
                        name="qty"
                        value={this.state.qty}
                        placeholder="0"
                        className="qty-input"
                        type="text"
                      />
                      <span
                        style={{
                          marginLeft: '1em',
                          cursor: 'pointer',
                          fontSize: '1.5rem'
                        }}
                      >
                        {' '}
                        +{' '}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <span>$ {item.price}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps)(ShoppingCart);
