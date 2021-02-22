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
      Authorization: 'Bearer QCvFo6EEmbBq6FJCl_UiKY0doyyD7kP2DQe5iZWgGRcZB7XOdnA8V8DuhvNt-HTVziGty6HlSQdoy79oP8ZcYJcqzYY8-Evu2rLYFYlNXfVVUgy6rauPPLSh7RAsMwJPTVZJU8-LDENx9lyducRRkiYtuncPEM"'
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
