import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const styles = {
  media: {
    maxheight: `5vh`,
  },
};


function Game(props) {

  const { game, del } = props;
  return (
    <Card className="col-xs-12 col-md-4 col-lg-3">
      <div className="carte">
      <CardActionArea >
        <img src={game.pochette} alt={game.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5" style={{ fontSize: '1em' }}> {game.name} </Typography>
          <Typography component="p" style={{ maxheight: '100px' }} > {game.description} </Typography>
        </CardContent>
      </CardActionArea>
      <div className="promo">
        <Button size="small" color="primary">
          <Link to={{ pathname: `/promo/${game.name}/${game.id}`, state: { game } }}>
            Promo
          </Link>
        </Button>
      </div >
      <Button size="small" color="primary" onClick={() => del(game.name)}> Supprimer </Button>
      </div>
    </Card>
  );
}

Game.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Game);