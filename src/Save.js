import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useFormik } from 'formik';
import { Form,Button } from 'react-bootstrap';
import Fetch from './Fetch';

const Save = (props) =>{


    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
        },
        onSubmit:textValues=>{
           axios({
            method: 'post',
            url: 'http://localhost:8081/user/save',
            data: textValues
           
        }).then(
          console.log(textValues)
        );
        
      },
        validate:values=>{
            let errors={};
            if(!values.name)
            errors.name="Name Required!";
            if(!values.email)
            errors.email="Email Required";
            if(!values.password)
            errors.password="Password Required";

            return errors;
        }
    });
    console.log(formik.errors.name);
    return (
        <div className="app border m-5 col-4">
            <h3>Formik </h3>
            <hr/>
            <Form onSubmit={formik.handleSubmit}>
               <Form.Group controlId="formBasicEmail">
                        <Form.Control onChange={formik.handleChange} type="text" placeholder="Enter username" name="name" value={formik.values.name} onBlur={formik.handleBlur}/>
                        {formik.touched.name && formik.errors.name?<div className="text-danger">{formik.errors.name}</div>:null}
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control onChange={formik.handleChange} type="email" placeholder="Enter email" name="email" value={formik.values.email} onBlur={formik.handleBlur}/>
                        {formik.touched.email && formik.errors.email?<div className="text-danger">{formik.errors.email}</div>:null}
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control onChange={formik.handleChange} type="password" placeholder="Password" name="password" value={formik.values.password} onBlur={formik.handleBlur}/>
                        {formik.touched.password && formik.errors.password?<div className="text-danger">{formik.errors.password}</div>:null}
                    </Form.Group>
                    <Button variant="primary"  type="submit" >
                        Submit
                    </Button>
                </Form>
                </div>

    );

}

export default Save;

