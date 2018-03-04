const https = require('https')
const url = 'https://github.com'
https.get(url, (response) => {
    let webpageText = ''
    response.on('data', (chunk) => {
        webpageText += chunk.toString('utf8')
    })
    response.on('end', () => {
        console.log(webpageText)
        /*
        Write some code that
        (a) finds all of the words from inside the <h1> tag of a webpage, and
        (b) converts those words into an array.
        So, if a webpage has the following tags:
        ------------------------------------------------------------------------
        <body>
            ...
            <h1>Welcome to Node.js!</h1>
            ......
            <h1>Working with npm</h1>
            ....
            <h1>Installing MongoDB</h1>
            ...
        </body>
        ------------------------------------------------------------------------
        Your array should look like this:
        ['Welcome', 'to', 'Node.js!', 'Working', 'with', 'npm', 'Installing', 'MongoDB']
        */

        // YOUR CODE HERE:




    })
}).on('error', (error) => {
    console.error(`Got error: ${error.message}`)
})
