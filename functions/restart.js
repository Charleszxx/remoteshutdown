const { exec } = require('child_process');

exports.handler = async (event, context) => {
    exec('shutdown /r /t 0', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing restart command: ${error}`);
            return {
                statusCode: 500,
                body: 'Error restarting PC',
            };
        }
        return {
            statusCode: 200,
            body: 'PC is restarting...',
        };
    });
};