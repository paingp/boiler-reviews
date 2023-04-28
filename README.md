# boiler-reviews
This repository contains all the code that was used to develop the boiler-reviews project. The purpose of the boiler-reviews project is to centralize the functionality of reviewing instructors, courses, and departments in one platform. There are older projects that each have one or two of the functionalities listed above, but not all in one platform.

## Technology
* Majority of the code was written in Javascript
* MySQL was used as the preferred database of choice.

## How we get our Data
The data pertaining to course information, instructors, and departments was acquired by querrying two foreign api endpoints. The queried endpoints belong to two similar projects which are: the <a href="https://www.boilergrades.com/" target="_blank">boiler grades</a> project and the <a href="https://www.purdue.io/" target="_blank">purdue.io</a> project. The course data at Purdue remains fairly constant over time but in the case that there are changes to course data, the two apis that we use account for those changes. A call to either api will usually return raw data that looks like this:

```
[null,"Hwang, Inseok","Hutton, Rodney E.","Shepherd, Amber M.","Lee, Sula","Jacobs, Mitchell B.","Reichelt, Shelley A.","Broden, Thomas F.","Harris, Isaac","Plante, Robert D.","Jewell, Joseph S.","Baker, Erica A.","Pruitt, Robert E.","Miller, Jordyn B.","Faezipour, Miad","Pushkar, Yulia N.","Whalen, Verity H.","Karageorge, Kaleigh A.","Pinal, Rodolfo","Stanford-Beale, David A.","Facchini, Leonardo","Hopkins, Denver R.","Chong, Ken Y.","Stein, Zoe A.","Metcalf, Michelle F.","Ju, Yongwook","Gallagher, Gillian P.","Chun, Hwayoung","Headworth, Spencer J.","Shin, Young Tae","Kladivko, Eileen J.","Guo, Siqi","Street, Julia M.","Carr, Melodie J.","Kluender, Keith R.","Hearit, Lauren B.","Zheng, Wei","Cambron, David M.","Iseley, David T.","Fish, Megan L.","Roberts, Carson B.","Flynn, Robert W.","Luo, Xuyi","Salazar, Kara A.","Low-Nam, Shalini T.","Hsieh, Daniel","Hoffmann, Christoph M.","Ortiz, Vanessa V.","Newton, Kathryne A.","Sharma, Bhisham N.","Sivasubramaniam, Badhu Prashanthika","Jouin, Gwenael B.","Prechtel, Austin R.","Dillman, Brian G.","Ott, Carol A.","Schaber, James A.","Li, Husheng","Karle, Brian A.","Berger, Elizabeth A.","Nicholson, Jansen W.","Lamer, Maryann D.","Ma, Zhongjie","Zhou, Qi","Huggett, Christopher","Jensen, Clare L.","Meenan, Jordan R.","Kaufman, Chelsea N.","Anderson, Alexandra M.","Kashyap, Pratik","Lei, Hao-Ran","Marsh, Dawn G.","Zhang, Ruqi","Jean, Muni","Revankar, Shripad T.","Townsend, Jonathan R.","Adams, Thomas E.","Catlin, David W.","Bucher, Meredith A.","Liu, Pi Ju","Quellhorst, Hannah E.","Tan, Lin","Varma, Pranav P.","Karki, Tirtha","Leighton, Mary T.","Connolly, Gavin"]
```
 The data is then refined depending on the use case.
 
 ## Miscellaneous
 To run our server locally, you will have to clone the repository to your machine. Navigate into the client directory and then run this command in your terminal:
 `npm install && npm start` 
 Then navigate to the server directory and run this:
 `node server.js`
 
 ## Contact us
 If you have any issues, update the __issues__ tab in github or contact one of the devs of the project 
