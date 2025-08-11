export interface BlogPost {
    created_time?: number,
    modified_time?: number,
    title?: string,
    views?: number,
    author?: string,
    content?: string,
    published?: number,
    cover_url?: string,
    id: number,
}

export function timeStampToString(UNIX_timestamp: number, include_hour: boolean): string {
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let time = date + ' ' + month + ' ' + year;
    if (include_hour) {
	let hour = a.getHours();
	let min = a.getMinutes();
	let sec = a.getSeconds();
	time += ' ' + hour + ':' + min + ':' + sec ;
    }
    return time;
}

export function postIdToUrl(id: number): string {
    return '/article/' + id;
}
