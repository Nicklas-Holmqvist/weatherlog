import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    diagramContainer: {
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        display: 'flex',
        height: '5rem',
        width: '25rem',
        alignItems: 'end',
        justifyContent: 'space-between',
        paddingBottom: '0.5rem'
    },
    diagram: {
        width: '80rem'
    }
}));