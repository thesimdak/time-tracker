
export function getReadableDurationFromMilis(durationInMillis: number): string {
    const durationInSeconds = Math.floor(durationInMillis/1000);
    let hours = Math.floor(durationInSeconds / 3600);
    let minutes = Math.floor((durationInSeconds%3600) / 60);
    let seconds = durationInSeconds - (hours*3600) - (minutes*60)
    let readableDuration = '';
    if (hours > 0) {
        readableDuration = hours + 'h ';
    }
    if (minutes > 0) {
        readableDuration = readableDuration + minutes + 'm ';
    }
    readableDuration = readableDuration + seconds + 's';    
    return readableDuration;
}