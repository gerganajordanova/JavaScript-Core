function extractTheLinks(input) {
    let regex = /www\.[A-Za-z0-9\-]+\.[a-z]+(?:\.[a-z]+)*/g;
    let links=[];
    let match;
    for (let sentence of input) {
        while (match=regex.exec(sentence)){
            links.push(match[0])
        }
    }
    return links.join('\n');
}