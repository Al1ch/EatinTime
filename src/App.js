import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/material";
import Header from "./Components/Header/Header"
import './App.css';
import {Body} from "./Components/Body/Body";

const App = () => {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#1976d2',
            },
        },
    });


    return (
        <ThemeProvider theme={darkTheme}>
            <Header/>
            <Body></Body>
        </ThemeProvider>
    )
}
export default App;
