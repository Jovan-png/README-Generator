const inquirer = require('inquirer')
const fs = require('fs')
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What Is The Name Of Your Project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project!'
    },
    {
        type: 'checkbox',
        name: 'Contents',
        message: 'What would you like the Table of Contents to include?',
        choices: ['Installation','Usage','Credits','License']
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Please enter a installation instructions for you README'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples for you Project'
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'Please list all collaborators on your Project!'
    },
    {
        type: 'input',
        name: 'License',
        message: 'Please enter the license for your project. Example: "MIT, apache,unilicense "'
    },
    {
        type: 'input',
        name: 'Badges',
        message: 'Please enter a description for your project!'
    },
    {
        type: 'input',
        name: 'Features',
        message: 'What Is The Name Of Your Project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project!'
    },
    {
        type: 'input',
        name: 'Title',
        message: 'What Is The Name Of Your Project?'
    },
];
inquirer.prompt(questions)
.then((data)=>{
    console.log(data)
    fs.writeFile("README.md", `
    #${data.Title}



    ##Description
    ${data.description}




    ##Table Of Contents
    ${data.Contents[0]}
    ${data.Contents[1]}
    ${data.Contents[2]}
    ${data.Contents[3]}
    
    
    ##License



    Licensed under the[${data.License}](https://choosealicense.com/licenses/${data.License}/?style=plastic&logo=appveyor) license


    `, function(err) {
    
        if (err) {
          return console.log(err);
        }
      
        console.log("Done!");
      
      });
})
