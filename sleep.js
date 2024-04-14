const { exec } = require('child_process');

exports.handler = async (event, context) => {
    exec('rundll32.exe powrprof.dll,SetSuspendState 0,1,0', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing sleep command: ${error}`);
            return {
                statusCode: 500,
                body: 'Error putting PC to sleep',
            };
        }
        return {
            statusCode: 200,
            body: 'PC is going to sleep...',
        };
    });
};
