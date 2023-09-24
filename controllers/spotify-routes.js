
const getSongs = (req, res) => {
    res.json({name:'Shadow Moses', artist: 'Bring Me The Horizon'});
  }

const getArtistName = (req, res) => {
    res.send('Skrillex');
}

module.exports = {
    getSongs,
    getArtistName
};