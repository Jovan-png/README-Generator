const inquirer = require('inquirer')
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');
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
        type: 'confirm',
        name: 'Contents',
        message: 'Would you like to include a table of contents',
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
        type: 'choices',
        name: 'License',
        message: 'Please enter the license for your project. Example: "MIT, apache,unilicense "',
        choices: ['MIT','Apache','GPL']
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Skip This'
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Please enter you github username'
    },
    {
        type: 'input',
        name: 'Questionstwo',
        message: 'Please enter your email adress'
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
    // If StateMent For License
    if(data.License === 'MIT'){
badge =  `![coverage](https://img.shields.io/badge/coverage-80%25-yellowgreen)`
        data.License = 
        `
        MIT License

Copyright (c) 2021

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
        `
    }else if (data.License === 'Apache'){
        data.License = 
        `
        
        sdfsdfsd
        `

    }else{
        data.License = `gsdfsdf`

    }
    
    
    
    // If Statement For Table Of Contents
    if(data.Contents = true){
        data.Contents = ` 
## Tables Of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

        `

    }else{
        data.Contents = `  `
    }
    fs.writeFile("README.md", `
# ${data.Title}

${badge}

## Description
    ${data.description}




${data.Contents}


    
    




## Contributing

## Tests

## Questions
https://github.com/${data.Questions}

If you have any additional questions please reach me at
${data.Questionstwo}


## License

${data.License}


    `, function(err) {
    
        if (err) {
          return console.log(err);
        }
      
        console.log("Done!");
      
      });
})
