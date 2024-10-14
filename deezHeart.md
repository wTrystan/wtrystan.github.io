# Here is how I created my first Android Application

- [Link to the GitHub repository 👋](https://github.com/wTrystan/deezHeart)

## Summary

In 2019, I needed a challenge for the summer.

I wanted to develop an Android application, but I didn't knew what to do.

After a while, I decided to solve one of my mains issues.
Since I love doing sport, I like to have heavy musics during my set. But I also like to have calm music while I am tidying my apartment.

👋 In 2019, the functionnality Flow from Deezer did not existed yet !! 👋

The goal of this application :
- Add 10 musics from my 'Loved Tracks' according to chosen parameters
	- Sport / Zen / Party / Chose of the BPM
- Develop a music player in the application
 - Make it accessible for Spotify and Deezer

Here is how it looks like :

<img src=https://github.com/wTrystan/wtrystan.github.io/blob/a62cd88ad3f934e2df174920966f25d820f841c5/img_android/summary.png>


## Step 1 : Scraping and computing of the informations

In order to make my program work, I needed to gather theses variables : 
 - The date of the day,
 - The title of the top 5 song of the day and the URI of their cover,
 - The URI of the cover from the Top 1 Artist

We will use the API of Spotify to collect these informations.
You can find the program [main.py](https://github.com/wTrystan/remotion_Tiktok_Spotify) here.

We need to compute some variables before sending it to Remotion.

- uriHexa : We will create a palette (Library colorThief, function getPalette) using the most dominant color of the cover artist (function getColor on the URI of the artist cover)
- colorTitle : We will determine if the color of the title is black (#000000) or white (#ffffff) depending on the color of the background determined in the variable above
- titleXX : Truncate the name of the title XX if longer than 29 characters
