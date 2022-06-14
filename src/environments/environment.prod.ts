export const environment = {
  production: true
};

export const spotifyConfiguration = {
  clientId:'764d977d3a4c4d82b06ca24c5c3100a6',
  authEndpoint:'https://accounts.spotify.com/authorize',
  redirectUrl:'httpL//localhost:4200/login/',
  scopes:[
    "user-read-currently-playing", // musica tocando agora.
    "user-read-recently-played", // ler musicas tocadas recentemente
    "user-read-playback-state", // ler estado do player do usuario
    "user-top-read", // top artistas e musicas do usuario
    "user-modify-playback-state", // alterar do player do usuario.
    "user-library-read", // ler biblioteca dos usuarios
    "playlist-read-private", // ler playlists privads
    "playlist-read-collaborative" // ler playlists colaborativas        
  ]
}