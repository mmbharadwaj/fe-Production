const fs = require("fs");

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function create() {
  readline.question("Enter the type of component Global(g)/Reusable(r)? ", type => {
    type = type.toLowerCase();
    if (type === "g" || type === "global") {
      readline.question('Enter component Name', name => {

        var compName = name
        let type = "js"

        let dirName = `./src/components/global/`
        let jsfileName = `${dirName}/${compName}.${type}`
        let imppath = `./components/global/${compName}`


        if (!fs.existsSync(dirName)) fs.mkdirSync(dirName, { recursive: true });

        let funcitonName = `import React from 'react'
      
export function ${compName[0].toUpperCase() + compName.slice(1, compName.length)}() {
  return (
    <>
      <h1>${compName} component works</h1>
    </>
  )
}
`

        let globalimport = `export * from "${imppath}"
`

        fs.appendFile(jsfileName, funcitonName, function (err) {
          if (err) throw err;
        }
        );

        fs.appendFile("./src/global.js", globalimport, function (err) {
          if (err) throw err;
        }
        );
        console.log(`${compName} created successfully`)
        readline.close();
      });
    } else if (type === "r" || type === "reusable") {
      readline.question('Enter component Name', name => {

        var compName = name
        let type = "js"

        let dirName = `./src/components/reusable/`
        let jsfileName = `${dirName}/${compName}.${type}`
        let imppath = `./components/reusable/${compName}`


        if (!fs.existsSync(dirName)) fs.mkdirSync(dirName, { recursive: true });

        let funcitonName = `import React from 'react'

export function ${compName[0].toUpperCase() + compName.slice(1, compName.length)}() {
return (
  <>
    <h1>${compName} component works</h1>
  </>
  )
}
`

        let globalimport = `export * from "${imppath}"
`

        fs.appendFile(jsfileName, funcitonName, function (err) {
          if (err) throw err;
        }
        );

        fs.appendFile("./src/reusable.js", globalimport, function (err) {
          if (err) throw err;
        }
        );
        console.log(`${compName} created successfully`)
        readline.close();
      });
    } else {
      console.log("Enter correct option")
      return create()
    }
  })
}

create()