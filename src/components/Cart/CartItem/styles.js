import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cart: {
    margin:'0.5rem 0.5rem',
    borderBottom:'2px solid black'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));