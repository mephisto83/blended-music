export default class CommandLineArgs {
    static args() {
        var result = {};
        for (let j = 0; j < process.argv.length; j++) {
            console.log(j + ' -> ' + (process.argv[j]));
            var temp = process.argv[j].split(':');
            result[temp[0]] = temp[1] || 1;
        }

        return result;
    }
}