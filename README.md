# README for Grey's Anatomy Quiz

![mockup screenshot](https://github.com/CaoiveMcTigue/greys-anatomy-quiz/blob/master/documents/images/screenshot-mockup.png?raw=true)

## Introduction
The sole purpose for this website was following a brief layout for my second milestone project, it was required I create an interacting webpage.

Being a big Grey's Anatomy fan. I decided to base a fun and inactive quiz around the tv show.

While doing this, I also wanted to display my new found JavaScript skills. The quiz is a fun way to test the users knowledge of the tv show Grey's Anatomy but the page and layout and is kept simply and clear for easy use to anyone.

## Features

When you load this Grey's Anatomy Quiz, you are met with the homepage. As mentioned above it is a simple and clear layout.

The Home page displays:

A navagation bar on top of the page containing four links and a logo.
* The Home link which redirects you to the homepage.
* The Quiz link which takes you to the start of the quiz ready to be played.
* The Leaderboard link that redirects you to the score board.
* The Fun Facts links to a page which has some facts about the tv show Grey's Anatomy giving the user some more information and a chance to learn more about the show.
* In the middle of these four buttons is a logo for the tv show Grey's Anatomy which is also a button which will redirect you to the Home page also.

There is then some text beneath it. 

Then there is two buttons:
1. Play : which links to the quiz page to begin the game.
2. High Scores: which links to the leaderboard page to see the scores.

At the end of the page there is a footer displayed with two icons:
1. Instagram icon: links to my [instagram](https://www.instagram.com/keystrokescode/) page.
1. GitHub icon: links to my [GitHub](https://github.com/CaoiveMcTigue) page.

The quiz page is the main feature of this webpage. 

* You start at question one as expected, and move through ten questions. 
* The layout of these quiz questions are random so you will never have the same layout of questions. 
* In the top left hand corner of the quiz page a progress bar is displayed with the question you are on. e.g. Question 4 of 10.
* In the top right hand corner of the quiz page your score is displayed which increases by 100 points with every correct answer.

When you have the ten questions answered, you are redirected to a score page. Features here include:
* The same navagation bar as the homepage.
* A input text box to type your name to be displayed with users score.
* Underneath this is a save button, a try again button and a go home button.
* The Try Again button redirects you to the beginning of the quiz.
* The Go Home button redirects you to the home page again.
* The footer with the social media icons is displayed at the end of this page also.

I did not include this page in my nav bar as you have to complete the quiz for it to be of any use to the user.

The leaderboard page is a very simple HTML page which features:
* The navagation bar displayed in the other HTML pages.
* The heading "Leaderboard".
* Underneath the users name and score will display after the quiz is complete. 
* Then a Go Home button is displayed to redirect the user to the homepage.
* The footer with the social media icons is displayed at the end of this page also.

The Fun Facts page is the last page in this website. The features here include:
* The navagation bar displayed in the other HTML pages.
* The heading "Did You Know?".
* The facts are then displayed for reading.
* The footer with the social media icons is displayed at the end of this page also.

## Testing

When testing I used a number of different website and approches.

I validated all my HTML code [here](https://validator.w3.org/nu/#textarea). No errors or warnings were detected.

Index HTML page:

![screenshot-index-validation](https://github.com/CaoiveMcTigue/greys-anatomy-quiz/blob/master/documents/images/screenshot-index.png?raw=true)

Game HTML page:
![screenshot-game-validation](https://github.com/CaoiveMcTigue/greys-anatomy-quiz/blob/master/documents/images/screenshot-game.png?raw=true)

Highscore HTML page:
![screenshot-highscore-validation](https://github.com/CaoiveMcTigue/greys-anatomy-quiz/blob/master/documents/images/screenshot-highscore.png?raw=true)

Leaderboard HTML page:
![screenshot-leaderboard-validation](https://github.com/CaoiveMcTigue/greys-anatomy-quiz/blob/master/documents/images/screenshot-leaderboard.png?raw=true)

Funfacts HTML page:
![screenshot-funfacts-validation](https://github.com/CaoiveMcTigue/greys-anatomy-quiz/blob/master/documents/images/screenshot-funfacts.png?raw=true)

I used a CSS validator to test my CSS code,which can be found [here](https://jigsaw.w3.org/css-validator/#validate_by_input). This also returned with no errors or warning. 

Style CSS page:
![css-testing](https://github.com/CaoiveMcTigue/greys-anatomy-quiz/blob/master/documents/images/screenshot-css-style.png?raw=true)

Game CSS page:
![css-game-testing](https://raw.githubusercontent.com/CaoiveMcTigue/greys-anatomy-quiz/master/documents/images/screenshot-css-game.png)

I then tested all my JavaScript code using this [website](https://jshint.com/). This did return some warnings but I managed to clear alot of them and have explained what i did to achieve this below.

JavaScript Game page:
![javascript-game-screenshot](https://github.com/CaoiveMcTigue/greys-anatomy-quiz/blob/master/documents/images/screenshot-js-game.png?raw=true)

JavaScript Highscore page:
![javascript-highscore-screenshot](https://github.com/CaoiveMcTigue/greys-anatomy-quiz/blob/master/documents/images/screenshot-js-highscore.png?raw=true)

JavaScript Leaderboard page:
![javascript-leaderboard-screenshot](https://github.com/CaoiveMcTigue/greys-anatomy-quiz/blob/master/documents/images/screenshot-js-leaderboard.png?raw=true)

When testing my javascript code, I got a lot of ES6 warning. When I looked into this I found on [stack overflow](https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const) to insert a commented out line of code on the top of all javascript pages within my website. This line of code is as follows: jshint esversion: 6 and is now inserted on all javascript pages this solved most warning being flag within jshint.

However, on the game.js page, there was three undefines variables flagged they appeared like so:
* 114. startGame
* 179. startGame
* 118. getNewQuestion
* 121. getNewQuestion
* 169. getNewQuestion
* 162. incrementScore
* 174. incrementScore

When I looked into these, after searching on google and other websites, the only solution I could come up with was the fact that the curly brace was opened on the line indicated and had a number of different functions and variable etc. within the curly brace before it was closed and sometime jshint will flag this warning because of this.

I also tested my page by playing the quiz a number of times myself to ensure different things were working correctly and there was no unexpected result to pressing a button or redirecting the page through a link, for example.

While doing this I ensured:
* All links and buttons were working correctly
* The progress bar was filling up while I moved through the questions.
* The question counter (question 4 of 10) was counting up correctly while I moved through the questions
* I ensured the question turned green when correct.
* I ensured the question turned red when incorrect.
* I ensured the score added 100 point when correct and remained unchanged when incorrect.
* I ensured when the tenth question was reached and answered you were redirected to the highscore page, where you have the option to save your score with your name.

Everything was working as expected, to my delight.


## Technology
* I used HTML as my main language in this website and is used on all pages.
* I used CSS to style the website.
* I used JavaScript to create responsive code and linked it to the bottom of the HTML files it was needed in.
* I used GitHub to store my code and used Git push command to do so.
* Gitpod was used all the time for writing the code.
* Gitpages was used to deploy my site
* Google fonts was used to import fonts that look good and paired well together.
* Font Awesome was used to bring in icons which matched well with the page content.
* Linear-gradient, i used a converter online here and applied it to all my buttons in CSS. I think this looks really awesome and I will be using this again in future websites.


## Deployment

Follow these steps to deploy the website:
1. Go to the GitHub [repo](https://github.com/CaoiveMcTigue/greys-anatomy-quiz)
2. Click on setting tab
3. Click the pages tab on the left.
4. Under source heading select branch: Master and root folder
5. Then click save.
6. Refresh page and a green box with the url to the live site should then be display.
7. The live site is ready, click the url link.

The Grey's Anatomy Quiz, live site can be found [here](https://caoivemctigue.github.io/greys-anatomy-quiz/).


## Credits
I watched a number of YouTube videos for ideas and code examples to credit this website these include:

### Javascript YouTube Videos:
* [Web dev simplified](https://www.youtube.com/watch?v=riDzcEQbX6k&t=494s)
* [CodingNepal](https://www.youtube.com/watch?v=pQr4O1OITJo)
* [Brian Design](https://www.youtube.com/watch?v=f4fB9Xg2JEY)
* [Coding Destination](https://www.youtube.com/watch?v=H1DUszPZakQ)

### Design YouTube Videos:
* [LearnCode.academy](https://www.youtube.com/watch?v=7cwRaTqR4k0)
* [LearnCode.Academy](https://www.youtube.com/watch?v=fgOO9YUFlGI)
* [Kevin Powell](https://www.youtube.com/watch?v=33IinMVJf-M)

Images displayed in the website can be found on google images and linked here:
* [Logo in nav bar](https://www.google.ie/search?q=grey%27s+anatomy+logo&tbm=isch&ved=2ahUKEwiF2MbH17LxAhWMQcAKHQRQB0AQ2-cCegQIABAA&oq=grey%27s+anatomy+logo&gs_lcp=CgNpbWcQAzIECCMQJzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoECAAQQ1CYswVYp74FYN_DBWgAcAB4AIABcogB9AKSAQM0LjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=bb7VYMXtG4yDgQaEoJ2ABA&bih=821&biw=1440&hl=en-GB#imgrc=-im-iYy94S0oMM)
* [Hero Image](https://www.google.ie/search?q=grey%27s+anatomy&hl=en-GB&tbm=isch&sxsrf=ALeKk01hbFc2s6-OXCqVHThFEAfLPRTYlw%3A1623783166641&source=hp&biw=1440&bih=821&ei=_vbIYNuZJYnWgQb7l7vwCw&oq=grey%27s&gs_lcp=CgNpbWcQAxgAMgUIABCxAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoECCMQJzoGCAAQCBAeOgYIABAKEBhQ_RNYulZgk2loBHAAeACAATuIAfYDkgECMTCYAQCgAQGqAQtnd3Mtd2l6LWltZw&sclient=img#imgrc=JJFX8ShL93utUM )

To design the page I used :
* [Google Fonts](https://fonts.googleapis.com/css2?family=Raleway:wght@100&family=Roboto:wght@300&display=swap)
* [Font Awesome](https://fontawesome.com/kits)
* [Linear-gradient](https://cssgradient.io/)
* [Favicon-generator](https://favicon.io/favicon-generator/)

When researching:
* [JavaScript Information](https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/8757244#overview)
* [W3schools](https://www.w3schools.com/)
* [Slack](https://slack.com/intl/en-ie/)
* [Stackoverflow](https://stackoverflow.com/questions/16679146/force-footer-on-bottom-on-pages-with-little-content/50659635#50659635)
* [Course Notes](https://learn.codeinstitute.net/dashboard)
* [Tutor Support](https://learn.codeinstitute.net/ci_support/diplomainsoftwaredevelopmentecommerce/support)

Also I would like to give credit to my mentor "Daisy", for the great advise and encouragement along the way.

JavaScript was a struggle for me at the start, completing this milestone project helped to put what I learned into action and lead me to have a much better understanding of Javascript in the long run.
