// function to generate markdown for README
function generateMarkdown(data, readMe) {
  return `
  # **${data.title}**

  ![license](https://img.shields.io/badge/license-${data.license}-BLU)
  

  # Table of Contents
  - [description](#description)
  - [installation](#installation)
  - [contribution](#contribution)
  - [test](#test)
  - [license](#license)
  
## Description
  ${data.description}
  
## Installation 
\`\`\`bash
  ${data.installation}
\`\`\`
  
## Contributors
  ${data.contribution}

## Test
\`\`\`bash
  ${data.test}
\`\`\`

## Repository
  ${data.repo}

## Usage
\`\`\`bash
  ${data.usage}
\`\`\`

## License
${data.license}
 

## questions
[https://github.com/${data.username}](https://github.com/${data.username})
  
`;
}

module.exports = generateMarkdown;
