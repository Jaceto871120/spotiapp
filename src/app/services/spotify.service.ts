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
      Authorization: 'Bearer BQCXbzOofJxZUA5_OOfVBa04ASjpAd3l2SO2NgGjByu8o9EeJPpB1-FPkdjjsqHjQfiW3s1fH86k1vMnScRwI4CH0cBgYZsHr-2IbzAPieytC5_WIl7lNi9YCrNkJCsrToiVIK8Zgx3i8kSVlUGIM2RrIj6V8rc"'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
                .pipe(map( (data: any) => data.albums.items));
  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist`)
                .pipe(map((data: any) => data.artists.items));
  }
  getArtista(id: string) {

    return this.getQuery(`artists/${id}`);
                // .pipe(map((data: any) => data.artists.items));
  }
  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?market=co`)
                .pipe(map((data: any) => data.tracks));
  }
}
