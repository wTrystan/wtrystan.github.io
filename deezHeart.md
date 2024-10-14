# Here is how I created my first Android Application

- [Link to the GitHub repository 👋](https://github.com/wTrystan/deezHeart)

## Summary

In 2019, I needed a challenge for the summer.

I wanted to develop an Android application, but I didn't knew what to do.

After a while, I decided to solve one of my mains issues.
Since I love doing sport, I like to have heavy musics during my set. But I also like to have calm music while I am tidying my apartment.

👋 In 2019, the functionnality Flow from Deezer did not existed yet !! 👋

The goal of this application is to :
- Add 10 musics from my 'Loved Tracks' according to chosen parameters
	- Sport / Zen / Party / Chose of the BPM
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

