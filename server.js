const { exec } = require('child_process');

exports.handler = async (event, context) => {
    exec('shutdown /s /t 0', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing shutdown command: ${error}`);
            return {
                statusCode: 500,
                body: 'Error shutting down PC',
            };
        }
        return {
            statusCode: 200,
            body: 'PC is shutting down...',
        };
    });
};
