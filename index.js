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
        name: 'Description',
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
        message: 'Please enter a installation instructions for you application.'
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
        type: 'list',
        name: 'License',
        message: 'Please select the license for your project.',
        choices: ['MIT','ISC']
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Please provide any test for your application if applicable.',
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Please enter you Github Username'
    },
    {
        type: 'input',
        name: 'Questionstwo',
        message: 'Please enter your Email Adress'
    },
];
inquirer.prompt(questions)
.then((data)=>{
    console.log(data)
    // If StateMent For License
    if(data.License === 'MIT'){
badge =  `![License](https://img.shields.io/badge/MIT-blue)`
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
    }else{
        badge = `![License](https://img.shields.io/badge/ISC-yellowgreen)`
        data.License = `ISC License

        Copyright (c) 2021
        
        Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted, provided that the above
        copyright notice and this permission notice appear in all copies.
        
        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.`

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
    ${data.Description}

${data.Contents}

## Contributing

Made By ${data.Credits}
## Installation
${data.Installation}
##Usage
${data.Usage}

## Tests
${data.Tests}
## Questions
Here's a link to my Github Profile.
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
