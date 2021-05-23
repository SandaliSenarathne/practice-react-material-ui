import React, { useDebugValue } from 'react';
import EmployeeForm from './EmployeeForm';

//Icons
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PageHeader from '../../Components/PageHeader';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    pageContent:{
        margin:theme.spacing(5),
        padding:theme.spacing(3),
    }
}))

function Employees(props) {

    const classes = useStyles();

    return (
        <React.Fragment>
            <PageHeader
                title="New Employee"
                subtitle="Form design with validation"
                icon={<PeopleAltIcon fontSize='large'/>}/>
            <Paper className={classes.pageContent}>
                <EmployeeForm/>
            </Paper>
        </React.Fragment>
    );
}

export default Employees;