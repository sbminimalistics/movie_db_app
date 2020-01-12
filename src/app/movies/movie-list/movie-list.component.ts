import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
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
                private route: ActivatedRoute,
                private router: Router) { }
    ngOnInit() {
        this.searchPhrase = this.route.snapshot.paramMap.get('searchPhrase');
        this.searchUsingApiService(this.searchPhrase);

        /*
        router.events subscription covers the case when searching for a phrase
        from within the same route movies/:searchPhrase
        */
        this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(
            (val) => {
                this.route.params.subscribe((params) => {
                    if (params['searchPhrase']) {
                        this.searchUsingApiService(params['searchPhrase']);
                    }
                });
            }
        );
    }

    searchUsingApiService(phrase) {
        this.searchPhrase = phrase;
        this.apiService.search(phrase)
        // Subscribe to begin listening for async result
        .subscribe((data)=>{
                this.data = data['Search'];
            }
        );
    }
}
