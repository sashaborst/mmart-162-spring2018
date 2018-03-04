const https = require('https')
const url = 'https://github.com'
https.get(url, (response) => {
    let webpageText = ''
    response.on('data', (chunk) => {
        webpageText += chunk.toString('utf8')
    })
    response.on('end', () => {
        const links = []
        const body = webpageText.split('<body')[1]
        const dirtyLinks = body.split('href="')
        dirtyLinks.forEach(dirtyLink => {
            dirtyLink = dirtyLink.split('"')[0]
            if (dirtyLink.substring(0, 2) === '//') {
                links.push('https:' + dirtyLink)
            } else if (dirtyLink[0] === '/') {
                links.push(url + dirtyLink)
            } else if (dirtyLink.substring(0, 4) === 'http') {
                links.push(dirtyLink)
            }
        })
        console.log(links)
    })
}).on('error', (error) => {
    console.error(`Got error: ${error.message}`)
})
