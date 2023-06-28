import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow:'1',
    backgroundColor:'rgb(240, 233, 240)',
    padding: theme.spacing(3,15),
  },
  root: {
    flexGrow: 1,
  },
}));
