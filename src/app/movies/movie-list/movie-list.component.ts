import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})

export class MovieListComponent implements OnInit {
    data;
    searchPhrase = '';
    constructor (private apiService: ApiService,
                private route: ActivatedRoute) { }
    ngOnInit() {
        this.searchPhrase = this.route.snapshot.paramMap.get('searchPhrase');

        this.apiService.search(this.searchPhrase)
        // Subscribe to begin listening for async result
        .subscribe((data)=>{
                console.log();
                this.data = data['Search'];
            }
        );

    }

}
