# Team Profile Generator

## Description 

![generator preview gif](/assets/walkthrough-gif.gif)

This is a command-line application that generates a webpage to display a team roster. The user will be prompted to enter information about the members of a team, including name, email address, and ID. Additional information will be requested for managers, engineers, and interns. The user can input information for as many team members as desired, and upon exiting, an HTML page will be generated to display the information. 

## Development

The application was developed using JavaScript and uses Node to run. It uses concepts of object-oriented programming; specifically, the use of classes to create different employee roles. Classes are constructed in seperate JavaScript files. An "employee" class is extended for the role of manager, engineer, and intern. Each class has its own seperate HTML output, which is then pieced together in the output file. Bootstrap and CSS have been used to style the HTML. 

## How to Use

First, the user must use 

`npm i`

To install any dependencies. Then, the user can use

`npm test`

In order to test for class functionality. The application is run from the command line, and the completed HTML will be output to the 'dist' folder. 

[A video demonstrating how to use the application can be found here](https://youtu.be/epLZWqf-VNk)
