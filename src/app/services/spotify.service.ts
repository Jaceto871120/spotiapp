import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDB2riM_-DWN6pQxk5hCSCAIq4iFW5h2uekEW4wui1vhDa3zQYHN79vB_P_CVh0pYR_HzIXXJNc_ZUvlyOiDkkXW0oxlEhi62yXNGy40cPwP9groWVWy1lVSe1OcLD11daT9EY2WOqK-iki2REjw4e1qpLTz2A"'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
                .pipe(map( (data: any) => data.albums.items));
  }

  getArtista(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist`)
                .pipe(map((data: any) => data.artists.items));
  }
}
