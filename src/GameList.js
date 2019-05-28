import React, { Component } from 'react';
import axios from 'axios';
import Game from './Game';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//import games from './games.json'

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      index: '',
      selectVal: 'All',
    }
  }
  componentWillMount = () => {
    axios.get('api.json')
      .then((result) => {
        this.setState({ games: result.data })
      })
  }

  del = (game) => {
    const { games } = this.state;
    for (let i = 0; i < games.length; i += 1) {
      if (games[i].name === game) {
        games.splice(i, 1);
      }
    }
    this.setState({ games });
  }

  handleChange = (e) => {
    this.setState({ selectVal: e.target.value })
  }

  render() {
    const { games, selectVal } = this.state

    return (
      <div>
        <div>
          <FormControl className='formControl'>
            <InputLabel htmlFor="theme">Theme</InputLabel>
            <Select
              value={this.state.selectVal}
              onChange={this.handleChange}
            >
              <MenuItem value="All">
                <em>All</em>
              </MenuItem>
              {games
                .map(game => game.theme)
                .filter((item, index, arr) => arr
                  .indexOf(item) === index)
                .map(theme => <MenuItem value={theme}>{theme}</MenuItem>)}
            </Select>
          </FormControl>
        </div>

        <Grid container spacing={4}>
          <div className="row total">
            {
              games.filter(game => selectVal === 'All' ? game.theme : game.theme === selectVal).map((game, index) => (
                <Game
                  game={game}
                  index={index}
                  key={game.id}
                  del={this.del}
                />
              ))}
          </div>
        </Grid>
      </div>
    );
  }
}

export default GameList;