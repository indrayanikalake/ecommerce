import React from 'react';
import { Button, Grid, Typography} from '@material-ui/core';
import {useForm, FormProvider} from 'react-hook-form';
import FormInput from './CustomTextField';
import {Link} from 'react-router-dom';


const AddressForm = ({next}) => {
   const methods = useForm();

  return (
   <>
   <Typography variant='h6' gutterBottom>Your Shipping Address:</Typography>
    <FormProvider {...methods}>
       <form onSubmit={methods.handleSubmit((data) => next({ ...data }))}>
         <Grid container spacing={3}>
            <FormInput required name='firstName' label='first name'/>
            <FormInput required name='lastName' label='last name'/>
            <FormInput required name='Address1' label='Address1'/>
            <FormInput required name='city' label='city' />
            <FormInput required name='email' label='email'/>
            <FormInput required name='ZIP' label='ZIP'/>
           
         </Grid>
         <br />
         <div style={{display:'flex', justifyContent:'space-between'}}>
             <Button component={Link} to='/cart' variant='outlined'>Back To Cart</Button>
             <Button type='submit' variant='contained'color='primary'>Next</Button>
         </div>
       </form>
    </FormProvider>
   </>
  )
}

export default AddressForm