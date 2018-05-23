let fs = require('fs');

let datas = JSON.parse(fs.readFileSync('package.json', 'utf8'));

function filter(elem) {
    let demoFile = {};

    demoFile.name = elem.name;
    demoFile.version = elem.version;
    demoFile.description = elem.description;

    fs.writeFile('demo.json', JSON.stringify(demoFile, null, 4), () => console.log("demo.json file created successfully"));
}


filter(datas);
