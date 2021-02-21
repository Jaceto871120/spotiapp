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
      Authorization: 'Bearer BQAXThCgp1H8uRVQ_lAWo-b7FYuMqu14gDkeIfxeAZdcGRlMcl_-bsGuDJghztUHWpouukezQbbLlUi1uSRNybnDDFvbQecZ3w30S3Wef8tAbS8UVUJfZA1RvjmaqCvK8utrN2iSxKBiJFoT8zKW-WCOpOcRU4o"'
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
