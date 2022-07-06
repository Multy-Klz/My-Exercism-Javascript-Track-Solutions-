// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.



/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  let newPlaylist = new Set();
  playlist.forEach(element => {
    newPlaylist.add(element);
  });

  return [...newPlaylist];
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  let resp = playlist.find(element => element === track);

  return resp !== undefined? true : false;
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  let newPlaylist = new Set();
  
  playlist.forEach(element => {
      newPlaylist.add(element);
    });


  if (hasTrack(playlist, track) === false) {
    newPlaylist.add(track);
  }

  return [...newPlaylist];
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
    let newPlaylist = new Set();
  
  playlist.forEach(element => {
      newPlaylist.add(element);
    });

  newPlaylist.keys()

  if (hasTrack(playlist, track) === true) {
    newPlaylist.delete(track);
  }

  return [...newPlaylist];
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  let newPlaylist = new Set();

  function playlistSeparator(string) {
    return string.split(' - ');
  }


  let separatedPlaylist = [];

  playlist.forEach(element => {
    let separated = element.split(" - ");
  
    newPlaylist.add(separated[1])
  });

console.log(separatedPlaylist, newPlaylist);
  return [...newPlaylist];
}
