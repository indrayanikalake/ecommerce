import React from 'react';
import {Container, Typography, Button, Grid} from '@material-ui/core';
import useStyles from './styles';
import {Link} from 'react-router-dom';
import CartItem from './CartItem/CartItem';

const Cart = ({cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart}) => {
    const classes=useStyles();
   
    const handleEmptyCart = () => onEmptyCart();

    const EmptyCart=()=>(
        <Typography variant='h4'>You have no items in your cart
        <Link to='/' className={classes.link}>Please add some</Link>
        </Typography>
    );

    const FilledCart=()=>(
        <>
        <Grid container spacing={3} className={classes.contend}>
             {cart.line_items.map((item)=>(
                <Grid xs={12} sm={4} key={item.id}>
               <CartItem item={item} 
                onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart}/>
                </Grid>
             ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant='h4'> Subtotal:{cart.subtotal.formatted_with_symbol}</Typography> 
            <div>
                <Button className={classes.emptyButton} size='large' type='button' variant='contained'
                color='secondary' onClick={handleEmptyCart}>Empty Cart</Button>
                <Button component={Link} to='/checkout' className={classes.checkoutButton} size='large' type='button' variant='contained'
                color='primary'>Checkout</Button>
            </div>
        </div>
        </>
    )

  return (
   <Container>
    <div className={classes.toolbar} />
     <Typography className={classes.title} variant='h3' gutterBottom>Your Cart</Typography>
     {!cart.line_items? <EmptyCart /> : <FilledCart />}
   </Container>
  )
}

export default Cart
