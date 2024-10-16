# Here is my automation of contents for Social Media using React (Remotion)

- [Link to the TikTok Account 👋](https://www.tiktok.com/@topfivespotify)

## Summary

The goal of this project is to :
- Use my knowledge in coding applied to the field of music
- Create content on a daily basis for social media
- Learn how to use Remotion and how to automate actions

You can find below the differents steps to achieve this project.

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

## Step 2 : Creation of the JSON file

Once we have all the functions to gather all the informations (the function LancerJSON(idPlaylist, texteSpotify, formatDate, fichier)), they will store it into a JSON file.

<code>lancerJSON('37i9dQZEVXbLRQDuF5jeBp', "Today's Spotify Top 5", "%m-%d-%Y", 'propsUSA.json')</code>

- The first variable tells the program to scrap data from the [Top 50 - USA](https://open.spotify.com/playlist/37i9dQZEVXbLRQDuF5jeBp) with the URI given
- The second variable is the title given for this video 
- The third variable is the format given for the date displayed in the video
- The fourth variable is the name of the output for the JSON created

Thanks to these function, I can easily modify the informations to have the same in French !

<code>lancerJSON('37i9dQZEVXbIPWwFssbupI', "Top 5 Spotify du ", "%d/%m/%Y", 'propsFR.json')</code>

Here is an overview of the JSON file :

<code class="language-json">{"titleText": "Today's Spotify Top 5","dateToday": "04-14-2024",
"artist_URI": "https://i.scdn.co/image/ab6761610000e5ebad85a585103dfc2f3439119a","colorTitle": "#ffffff",
"hexa_background": "#391c2c,#915d9b,#988878",
"urlTop1": "https://i.scdn.co/image/ab67616d0000b2732e8b4358d044b75807e30bf0",
"urlTop2": "https://i.scdn.co/image/ab67616d0000b273a46b07c291e6dfdee13b3ee8",
"urlTop3": "https://i.scdn.co/image/ab67616d0000b273e67611dbbf69a90d0b6cb738",
"urlTop4": "https://i.scdn.co/image/ab67616d0000b2730a31b4026a452ae8c3f97a76",
"urlTop5": "https://i.scdn.co/image/ab67616d0000b273cc04ff3e70e146ba9abacf40",
"title1": "Hozier - Too Sweet","title2": "Future - Like That","title3": "Artemas - i like the way you ...","title4": "¥$ - CARNIVAL","title5": "Benson Boone - Beautiful Thin..."}</code>

## Step 3 : Tuning of the Remotion program

We are now going to create the template to create the video with React, using Remotion.

<img src="interface_Remotion.PNG">

This is the user interface, but all of the work is located in the .TSX file
Here is a snippet of code for the cover :

<code>export const MainCover: React.FC<{
	scale: number;
    source: string;
    topValue: number;
}> = ({scale, source, topValue}) => {
	const config = useVideoConfig();
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 25], [0, 1]);
	return (
 <Img src={source} style={{
				position: 'absolute',
				marginTop: topValue,
				marginLeft: 80,
				width: '18%',
				opacity,
				borderRadius: 50,
			}}/>
	);
};</code>

Once the template is done, we will include the values available in the JSON file to personnalise the video.

<video controls width="300">
  <source src="formatUSA.mp4" type="video/mp4">
  This browser does not support HTML video.
</video>

All of the differents .TSX files are available [here](https://github.com/wTrystan/remotion_Tiktok_Spotify) 

We are now fully ready to post the video of the day on the Tiktok account !

## Step 5 : Automation of the steps on local machine

I use a CRON to run this program every day at 7PM :

<code>@ECHO ON
 call D:/MiniConda/Scripts/activate.bat D:/MiniConda
 "D:/MiniConda/python.exe" "C:\Users\tryst\Desktop\main.py"
 cd spot
 start cmd /C npx remotion render src/index.tsx HelloWorld out/formatUSA.mp4 --props=src/propsUSA.json
 start cmd /C npx remotion render src/index.tsx HelloWorld out/formatFR.mp4 --props=src/propsFR.json
 timeout /t 90
 call "D:/MiniConda/python.exe" "C:\Users\tryst\spot\exportGDrive.py"</code>

This code will run the Python program in the first time, creating the output for the French and American video.
Then, it will launch the render of the two videos using the JSON files (propsUSA and propsFR)
The output file will be formatUSA.mp4 and formatFR.mp4
In the end, the program exportGDrive.py will take these two videos and upload them on my personal Google Drive.

## (BONUS) : Automation on AWS
