import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../../api.service';

@Component({
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})

export class MovieComponent implements OnInit {
    movie;
    errorMessage;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private apiService: ApiService) {
    }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.getMovie(id.toString());
        }
    }

    getMovie(id: string) {
        this.apiService.getMovie(id).subscribe((data)=>{
            console.log(`service return movie id: ${id} data: ${JSON.stringify(data)}`);
            this.movie = data;
        });
    }

}
