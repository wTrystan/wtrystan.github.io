# Here is my automation of contents for Social Media using Remotion

- [Link to the TikTok Account 👋](https://www.tiktok.com/@topfivespotify)


## Summary

The goal of this project is to :
- Use my knowledge in coding in the field of music
- Create content on a daily basis for social media
- Learn how to use Remotion and how to automate actions

You can find below the differents steps to achieve this project.

## Step 1 : Scraping and computing of the informations

In order to make my program work, I needed to gather theses variables : 
 - The date of the day,
 - The title of the top 5 song of the day and the URI of their cover,
 - The URI of the top 1 Artist Cover

We will use the API of Spotify to collect these informations.
You can find the program [main.py](https://github.com/wTrystan/remotion_Tiktok_Spotify) here.

We need to compute some variables before sending it to Remotion.

- uriHexa : We will create a palette (Library colorThief, function getPalette) using the most dominant color of the cover artist (function getColor on the URI of the artist cover)
- colorTitle : We will determine if the color of the title is black (#000000) or white (#ffffff) depending on the color of the background determined in the variable above
- titleXX : Truncate the name of the title XX if longer than 29 characters

## Step 2 : Feed the JSON to the Remotion program

Once we have all the functions to gather all the informations (the function LancerJSON(idPlaylist, texteSpotify, formatDate, fichier)), they will store it into a JSON file.

ex : lancerJSON('37i9dQZEVXbLRQDuF5jeBp', "Today's Spotify Top 5", "%m-%d-%Y", 'propsUSA.json')

The first variable tells the program to scrap data from the [Top 50 - USA](https://open.spotify.com/playlist/37i9dQZEVXbLRQDuF5jeBp)
The second variable is the title given for this video 
The third variable is the format given for the date displayed in the video
The fourth variable is the name of the output for the JSON created

Thanks to these function, I can easily modify the informations to have the same in French ! 
lancerJSON('37i9dQZEVXbIPWwFssbupI', "Top 5 Spotify du ", "%d/%m/%Y", 'propsFR.json')



## Step 3 : Post on Social Media 

## Step 4 : Automation of the steps on local machine

## (BONUS) : Automation on AWS
