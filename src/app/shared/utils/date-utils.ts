
export const months: object = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December',
}

export interface Month {
    id: number, 
    name: string 
}

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

export function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

export function getTimePeriod(startDateTime: Date, endDateTime: Date) {
    let hoursStart = startDateTime.getHours() < 10 ? '0' + startDateTime.getHours() : startDateTime.getHours();
    let minutesStart = startDateTime.getMinutes() < 10 ? '0' + startDateTime.getMinutes() : startDateTime.getMinutes();
    
    let hoursEnd = endDateTime.getHours() < 10 ? '0' + endDateTime.getHours() : endDateTime.getHours();
    let minutesEnd = endDateTime.getMinutes() < 10 ? '0' + endDateTime.getMinutes() : endDateTime.getMinutes();
    
    let a = endDateTime.getTime();
    let b = startDateTime.getTime();
    
    return hoursStart + ':' + minutesStart + '-' + hoursEnd + ':' 
    + minutesEnd + ' (' + getReadableDurationFromMilis(endDateTime.getTime() - startDateTime.getTime()) + ')'; 
  }

export function getReadableDate(date: Date) {
    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    return day + '.' + month + '.'; 
  }
