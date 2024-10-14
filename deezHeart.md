# Here is how I created my first Android Application

- [Link to the GitHub repository 👋](https://github.com/wTrystan/deezHeart)

## Summary

In 2019, I needed a challenge for the summer.

I wanted to develop an Android application, but I didn't knew what to do.

After a while, I decided to solve one of my mains issues.
Since I love doing sport, I like to listen to heavy musics during my set. But I also like to have calm music while I am tidying my apartment.

👋 In 2019, the functionnality Flow from Deezer did not existed yet !! 👋

The goal of this application is to :
- Add to my queue 10 musics from my 'Loved Tracks' according to chosen parameters
	- Sport / Zen / Party / Choice of the BPM
- Develop a music player in the application
- Make it accessible for Spotify and Deezer

Here is how it looks like :

<img src=https://github.com/wTrystan/wtrystan.github.io/blob/a62cd88ad3f934e2df174920966f25d820f841c5/img_android/summary.png>

- First of all, you have a waiting screen miming a heartbeat.
- You have access to the Main Page, where you have the title, the logo and the choose of the media : Spotify and Deezer
- You can choose the type of Playlist (Sport / Zen / Party) or the BPM with the cursor below
- Once you have clicked on the Heart button, you have a LoadingScreen updating the current state of the program (0/10 titles found)
- Now, you have the Media Player where the Title/Artist/BPM/Cover is display, a reactive slider and remaining duration of the song
- You can have access to the current queue, wth a column for the title, the artist and the BPM


## Usage of the API to gather the elements needed

### Gathering of the musics

I had to create the dictionnary ListeplaylistID which contains the URL to all the playlist liked by the user.
We will also add the URL of the TOP 50 World.

Now, we are going through all the musics into the differents playlsts, and stored them into ListeMusic :

<code>https://api.spotify.com/v1/playlists/" + ListeplaylistID.get(j) + "/tracks?market=FR&fields=items(track(id,name))&limit=100&offset=1 </code>

### Parameters for the choice of the music
Spotify gives metadata with the music, like a float value between 0 and 1 for the energy, the danceabilty or the valence.
Thanks to these informations, I am able to specify which vibe do I look for :

- Sport : If energy >= 0.8 then add to the queue
- Zen : If energy <= 0.4 then add to the queue
- Party : If dance > 0.7, energy >= 0.6 and valence >= 0.5 then add to the queue
- BPM : If the BPM is between BPMmin and BPMmax

### Final program

<img src=https://github.com/wTrystan/wtrystan.github.io/blob/89c9803eee35cf3c008cf51586fee72888f2b5eb/img_android/spotify_Connect.PNG>


