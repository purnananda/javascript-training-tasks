let myLogger = {
    logInfo:  (message) => {
        console.log('INFO | ', message);
    },
    logError:  (message) => {
        console.log('ERROR | ', message);
    }
}

const sayHello = (name) => {
    console.log("Hello ", name);
} 

// Export default
export default myLogger;

// Named Export
export {myLogger}

// Named Alias Export
export {myLogger as Logger, sayHello}

