const fs = require("fs");

class Reader{

    static readFile(filePath){
        if(!fs.existsSync(filePath))
            return "The file does not exists.";
        const rawData = fs.readFileSync(filePath);
        return JSON.parse(rawData);
    }

}

module.exports = Reader;