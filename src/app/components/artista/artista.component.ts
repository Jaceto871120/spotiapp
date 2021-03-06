import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  loading;
  topTracks: any [] = [];

  constructor(private router: ActivatedRoute,
              private spotityService: SpotifyService) {

                this.loading = true;
                this.router.params.subscribe( params => {
                  this.getArtista(params.id);
                  this.getTopTracks(params.id);
                });
   }

  ngOnInit(): void {
  }

  getArtista(id: string) {

    this.loading = true;

    this.spotityService.getArtista(id).subscribe( artista => {
      this.artista = artista;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotityService.getTopTracks(id).subscribe( topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }

}
