import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
state = {
  loadingText: false,
  isFavorite: false,
}

componentDidMount() {
  this.markAsFav();
}

  // função que checa se a música é marcada como favorita, para que essa informação seja mostrada mesmo depois de sair da pg
  markAsFav = () => {
    const { favList, trackId } = this.props;
    if (favList.some((song) => song.trackId === trackId)) {
      this.setState({ isFavorite: true });
    }
  }

  // função para adicionar a musica aos favoritos
  addSongToFavorites = async () => {
    const { song } = this.props;
    this.setState({ loadingText: true });
    await addSong(song);
    this.setState({ loadingText: false });
  }

   // função para remover a musica dos favoritos
   removeSongFromFavorites = async () => {
     this.setState({ loadingText: true });
     await removeSong(this.props);
     this.setState({ loadingText: false });
   }

  handleCheckbox = ({ target: { checked } }) => {
    if (checked === true) {
      this.setState({ isFavorite: true });
      this.addSongToFavorites();
    } else {
      this.setState({ isFavorite: false });
      this.removeSongFromFavorites();
    }
  }

  render() {
    const { song: { trackName, previewUrl, trackId } } = this.props;
    const { loadingText, isFavorite } = this.state;
    if (loadingText) return <Loading />;
    return (
      <div className="songPreview">
        {/* <img alt="album cover" src={ artworkUrl100 } /> */}
        <h4>{trackName}</h4>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
        <div className="saveToFavs">
          {' '}
          <label htmlFor="favoriteInput">
            Save to your favorites:
            <input
              id="favoriteInput"
              data-testid={ `checkbox-music-${trackId}` }
              type="checkbox"
              onChange={ this.handleCheckbox }
              checked={ isFavorite }
            />
          </label>
        </div>
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  song: PropTypes.shape({
    artistName: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    kind: PropTypes.string.isRequired,
  }).isRequired,
  trackId: PropTypes.string.isRequired,
  favList: PropTypes.shape({
    some: PropTypes.func.isRequired,
  }).isRequired,
};

export default MusicCard;
