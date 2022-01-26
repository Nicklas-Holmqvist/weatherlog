import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Component, ErrorInfo, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {

    public state: State = {
        hasError: false
    }

    static getDerivedStateFromError(_: Error): State {
        return {
            hasError: true
        };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    handleClick = () => {
        window.location.replace('/')
    }

    public render() {
        if (this.state.hasError) {
            return (
                <Grid container direction='column' justifyContent='center' alignItems='center'>
                    <Helmet>
                        <title>404 - Error | Väderdagboken</title>
                        <meta name="error" content="Du har kommit lite fel" />
                    </Helmet>
                    <h1>Något gick fel!</h1>
                    <Button onClick={this.handleClick}>Ladda om sidan</Button>
                </Grid>
            )
        }
        return this.props.children
    }
}
export default ErrorBoundary;