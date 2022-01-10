import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        height: '80vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content:{
        width:'25rem',
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        margin: '2rem 0rem 1rem 0rem'
    },
}));