import logo from './logo.svg';
import './App.css';
import {Grid} from '@material-ui/core';
import Header from './Contents/Header';
import Content from './Contents/Content';

function App() {
  return (
    <Grid
      container
      direction="column">
        <Grid item>
          <Header/>
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Content/>
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
    </Grid>
  );
}

export default App;