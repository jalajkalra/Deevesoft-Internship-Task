import React, { useEffect } from 'react';
import Navbar from '../navbar/navbar';
import { Container,Spinner } from 'react-bootstrap';
import Body from '../body/body';
import {useSelector,useDispatch} from 'react-redux';
import classes from '../main.module.css';
import { Logout } from '../../entities/action';

const HomePage = (props)=>{
    const isLoading = useSelector(state=>state.isLoading);
    const isAuth = useSelector(state=>state.isLoggedIn);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(!isAuth){
            props.history.push("/");
        }
    },[isAuth])
    return(
        <>
            {
                isLoading?
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>:
                isAuth?
                <>
                    <div 
                    className={classes.Logout}
                    onClick={()=>dispatch(Logout())}
                    ><span className={classes.Span}>Logout</span></div>
                    <Container>
                        <Navbar/>
                        <Body/>
                    </Container>
                </>:<h2>No Page Found</h2>
            }
        </>
    )
}

export default HomePage;