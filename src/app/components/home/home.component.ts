import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error = false;
  mensajeError;

  constructor( private spotifyService: SpotifyService) {

    this.loading = true;

    this.spotifyService.getNewReleases().subscribe((data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, (error) => {
      this.loading = false;
      this.error = true;
      this.mensajeError = error.error.error.message;
    });
  }

  ngOnInit(): void {
  }

}
