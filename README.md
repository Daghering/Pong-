# Pong Game Starter

A starter project for a basic pong game using SVGs.


## Technologies Used

HTML, CSS, and Javascript. 
 
## Personal Learnings

I learned an incredible amount of javascript in very little time and can now 

understand the syntax much better. I know how things work a little better and have 

more confidence when using methods. 

This project was very challenging and satisfying and helped me grow as a developer.

For my stretch goals I made the ball colour change on impact with the top and bottom

border and the paddles. I also made it so the ball stays the same colour until it 

hits one of those surfaces again. Having the game not auto start was important to me 

so I added spacebar to start and pause the game. I made the "r" key a reset function 

that refreshes quickly to begin a new game. Finally, I added in a victory song and 

message for the winner.

CONTROLS: 

Player 1 Movement - (A,Z)
          
Player 2 Movement - (Up and Down arrows)

Start/Pause - (SpaceBar)

Restart - (R)



### Author

Jawes Dagher -github.com/Daghering


## Setup

Ensure you have [Node.js](https://nodejs.org/en/) installed first.

**Install dependencies:**

`$ npm install`

**Run locally with the Parcel dev server:**

`$ npm start`

Once you run the start command you can access your project at http://localhost:3000.

Read more about the [Parcel web application bundler here](https://parceljs.org/).

## Deploy

The deployment workflow for this project will be a bit different from what you've used when deploying simple static websites.

To deploy your finished Pong project as a GitHub page, you must first **update the `predeploy` script in the `package.json` file with the name of your repo.**

For example, if your repo URL is:

https://github.com/bob/pong-project

Update the `predeploy` script as follows:

```json
"predeploy": "rm -rf dist && parcel build index.html --public-url /pong-project",
```

Once you have done this, you can run:

`$ npm run deploy`

Now check out your deployed site 🙂


### Awknowledgments

Red Academy

Friends and Family

Javascript(The real hero)

