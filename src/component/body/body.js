import React, { useState } from 'react';
import {Col,Row,Container,Form} from 'react-bootstrap';
import classes from '../main.module.css';
import fire from '../../fire';

const Body = (props)=>{
    const goals = [
        {id:"1",name:"Get leaner"},
        {id:"2",name:"Get active again"},
        {id:"3",name:"Reduce pain or injury"},
        {id:"4",name:"Improve cardio or speed"},
        {id:"5",name:"Improve sports performance"}
    ]
    const [value,updateValue] = useState('');
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(value)
        if(value){
            fire.auth().onAuthStateChanged(user=>{
                if(user){
                    fire.firestore().collection(`choices`).add({
                        choice:value,
                        userUid:user.uid
                    })
                    .then(res=>console.log("Successful Saved Your Choice"))
                }else{
                    console.log("logged out")
                }   
            })
        }
    }
    return(
        <>
            <Container fluid>
                <Row>
                    <Col md={5} xs={12}>
                        <div>
                            <h2 className={classes.Heading}>Goal</h2>
                            <p>Select Your Primary Goal. What do you want to accompish in the next few months? </p>
                        </div>
                    </Col>
                    <Col md={7} xs={12}>
                        <div className={classes.FormContainer}>
                            <Form>
                                {
                                    goals.map((goal,key)=>
                                    <Form.Check 
                                        key={key}
                                        type="radio"
                                        name="goal"
                                        onChange={(e)=>updateValue(e.target.value)}
                                        value={goal.name}
                                        label={goal.name}
                                        className={classes.Radio}
                                    />
                                    )
                                }
                                <button className={classes.Button} onClick={(event)=>handleSubmit(event)}>SUBMIT</button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Body;