import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQB2CMgWpRVDRPwIrmeqv3qemjiwCzRkyN23wKhRaKgR_oY7QVnmVKmS9okanC2eEf8tamBj9G7dD_2U0s0piUZSU6AoUyfLQnZREUP7rEm5ZGZPHy6Bs_oUKZMQIF81UHKYwSDpNu7yZDVehNcVzT5MHaorTyw"'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
