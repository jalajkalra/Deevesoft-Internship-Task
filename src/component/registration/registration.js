import React, { useState,useEffect }  from 'react';
import {Form,Button} from 'react-bootstrap';
import classes from '../login/authentication.module.css';
import {Formik} from 'formik';
import * as Yup from 'yup';
import fire from '../../fire';
import auth from '../../assets/auth.png';
import { Link } from 'react-router-dom';
import {loginSuccess,loginInit,loginFail} from '../../entities/action';
import {useDispatch,useSelector} from 'react-redux';

const validationSchema=Yup.object().shape({
    email:Yup.string()
    .max(255,"Must Be Shorter Than 255")
    .email("Must Be a Valid Email Request")
    .required("Must Be An Email"),
    password:Yup.string()
    .min(8,"Must Be Greater Than 8 Character")
    .required("Must Be An Password")
})

function Registration(props) { 
    const dispatch = useDispatch();
    const [message,updateMessage] = useState('');
    const isAuth = useSelector(state=>state.isLoggedIn)
    useEffect(()=>{
        if(isAuth){
            props.history.push("/home");
        }
    },[isAuth])
    return (
    <>
    <div className={classes.Background}>
        <div className={classes.Box}>
                <center>
                    <img src={auth} className={classes.Img} alt="Auth"/>
                    <h2>Sign Up</h2>
                </center> 
                    <Formik 
                    initialValues={{ email: '', password: '' }} 
                    validationSchema={validationSchema}
                    onSubmit={
                        async(values,{setSubmitting,resetForm})=>{
                            setSubmitting(true);
                            try{
                            dispatch(loginInit());
                            const res = await fire.auth().createUserWithEmailAndPassword(values.email,values.password);
                            await dispatch(loginSuccess(res));
                            props.history.push('/home');
                            }catch(err){
                                dispatch(loginFail())
                                updateMessage("Email Already In Use");
                                setTimeout(()=>{updateMessage('')},3000);
                            }
                        }
                    }>
                        {({values,errors,touched,handleChange,handleBlur,handleSubmit,isSubmitting})=>(
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                    name="email"
                                    type="email" 
                                    placeholder="Enter email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className={touched.email && errors.name ? "has-error":null}/> 
                                    <Form.Text className="text-muted">
                                    {errors.email && touched.email && errors.email}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                    name="password"
                                    type="password" 
                                    placeholder="Password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className={touched.email && errors.name ? "has-error":null} />
                                    <Form.Text className="text-muted">
                                    {errors.password && touched.password && errors.password}
                                    </Form.Text>
                                </Form.Group>
                                <center> 
                                <Button 
                                size="lg" 
                                variant="primary" 
                                type="submit" 
                                style={{margin:'5% 0',borderRadius:'1.57rem'}}
                                disabled={isSubmitting}
                                >
                                Register
                                </Button>
                                <Button 
                                size="lg" 
                                variant="danger"  
                                style={{margin:'5% 2%',borderRadius:'1.57rem'}}
                                onClick={()=>props.history.push('/')}
                                >
                                Cancel
                                </Button>
                                <br/>
                                <Link to="/">Already have an account? login here</Link>
                                </center>
                                {
                                    message?<div className={classes.Error}>{message}</div>:null
                                }
                            </Form>
                        )}
                    </Formik>
        </div>
    </div>  
    </> 
      
  );
}

export default Registration;