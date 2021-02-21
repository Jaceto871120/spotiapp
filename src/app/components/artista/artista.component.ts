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

  constructor(private router: ActivatedRoute,
              private spotityService: SpotifyService) {

                this.loading = true;
                this.router.params.subscribe( params => {
                  this.getArtista(params.id);
                });
   }

  ngOnInit(): void {
  }

  getArtista(id: string) {

    this.loading = true;

    this.spotityService.getArtista(id).subscribe( artista => {
      console.log(artista);
      this.artista = artista;
      this.loading = false;
    });
  }

}
