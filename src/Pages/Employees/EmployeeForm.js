import { FormControl, FormControlLabel, FormLabel, Grid, Radio, TextField } from '@material-ui/core';
import React,{useState, useEffect} from 'react';
import Checkbox from '../../Components/Controls/Checkbox';
import Input from '../../Components/Controls/Input';
import RadioGroup from '../../Components/Controls/RadioGroup';
import Select from '../../Components/Controls/Select';
import {useForm, Form } from '../../Components/useForm';

const initialValues = {
    id:0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'male',
    departmentId:'',
    hireDate:new Date(),
    isPermanent:false,
}

const genderItems = [
    {id:'male', title:'Male'},
    {id:'female', title:'Female'},
    {id:'other', title:'Other'},
]
const departmetIDs = [
    {id:'1', title:'IT'},
    {id:'2', title:'Finance'},
    {id:'3', title:'HR'},
]

function EmployeeForm(props) {

    const {values, setValues, handleInputChange} = useForm(initialValues);
    
    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                    <Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Select
                        name="departmentId"
                        label="Department ID"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={departmetIDs}
                    />
                    <Checkbox
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />

                </Grid>
            </Grid>
        </Form>
    );
}

export default EmployeeForm;