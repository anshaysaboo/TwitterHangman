# Trending on Twitter Hangman

## Demo

You can try out Twitter Hangman online here: [https://twitterhangman.herokuapp.com/](https://twitterhangman.herokuapp.com/). Please allow up to one minute for the website to load as it is currently running on a Heroku free Dyno, which is put to sleep during periods of inactivity.

## User Guide

### Setup Guide

In order to build and run Twitter Hangman, you must have the latest version of Node.js and npm installed and running on your machine. For reference on how to install Node.js, refer to their [online documentation](https://nodejs.dev/learn/how-to-install-nodejs).

Next, you must install all the necessary dependencies for the project.

Open Terminal and navigate to the project root directory.
Then, run the following commands in order:

```
npm install
cd client
npm install
cd ..
```

Once you have installed the necessary dependencies, you must generate a API token for the Twitter API. In order to obtain an access token, you must gain access to the Twitter Developer Portal. You may register and access the portal on the [Twitter Developer Homepage](https://developer.twitter.com/en/apply-for-access). Once you have access to the portal, you must generate an Access Token by following the steps under “Generating access tokens” on the [Twitter Developer API documentation](https://developer.twitter.com/ja/docs/basics/authentication/guides/access-tokens).

Upon generating and saving the API Token, you must open the file `config/dev.js`. Remove the comment markings (`/* */`) and replace `INSERT_ACCESS_TOKEN_HERE` with the API Token you have just generated. Ensure that there are still quotation marks `""` around the API token.

Finally, once the token is in place, you are able to run the application. Do this by running the command `npm run dev` in the root directory.

### Game Instructions

Twitter Hangman is a normal game of Hangman, where the player must guess a word or phrase by guessing letters that are a part of that word/phrase. The player is allowed five incorrect letter guesses until they lose the game. In order to guess letters, you may enter a letter into the “Guess a letter” input. As you guess, the puzzle and hangman will update. When you have finished the game, either by completing the entire puzzle or running out of guesses, you will be brought to the ending screen, where you will see the solution to the puzzle, as well as some Tweets that are a part of the Trend that you just solved.

### Video

Check out a short overview video about our project at [https://youtu.be/6BZBVaFHxFw](https://youtu.be/6BZBVaFHxFw).
