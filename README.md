# Spotify Weekly Wrapped!

## Inspiration
Keeping in contact with friends is hard during the pandemic. You run out of things to say and sometimes don't feel like you are doing anything new to feel excited about, but we're always listening to music! The Spotify Weekly Wrapped will serve as a way to feel connected with your friends over the shared experience of listening to music.

## What it does
The app lets users create a group with their friends. Each week (or multiple weeks depending on their chosen frequency), the app runs analytics on the group's music using Spotify's API. The app gives a fun storyboard similar to the end of the year Spotify wrap which shows the collective indicated mood over the past week and similar listening habits. The app will additionally prompt users to share one positive thing which happened over the past week, any thoughts on their mind and other questions they include.

## How we built it
###Front-end
_Language_: HTML/CSS
Iterated over multiple styles of design to come up with one that is fun and mood-lifting!

###Back-end
_Language_: Javascript, Python
Coded the user authentication using Firebase and Spotify OAuth

## Challenges we ran into
We tried to code out the backend using Django and the frontend with React (both of which we have never used before), but ultimately they were too complex to learn within the timeframe given and we stuck to using Python's Spotify Library (spotipy) to have something to show in the end.

## Accomplishments that we're proud of
- Our app looks beautiful!
- The authentication works for Firebase and Spotify
- We stuck through the full 24 hours!
- Successfully ran analytics on Spotify data

## What we learned
- How to use the Spotify API
- How to connect Firebase
- Beginning to learn using React and Django (even though we haven't fully implemented it YET)

## What's next for Spotify Weekly Wrapped
- Smarter analytics (can we predict the group's points of connection and suggest music or other media that will help them connect more, can we predict which group members might need more support and nudge other group members to reach out?)
- Data ethic (how can we implement a temporary database so we don't store the user's data which will increase sign up attrition and lead to questions of privacy)
