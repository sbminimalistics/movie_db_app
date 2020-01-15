import { Component, OnInit, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';
import { Output } from '@angular/core';
import { Store, select} from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as SearchActions from '../store/actions/search.actions';
import { Search } from '../store/reducers/search.reducer';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
    @Output()
    initSearch = new EventEmitter();

    count$: Observable<number>;

    public search(phrase){
        this.initSearch.emit(phrase);
        console.log(`typeof SearchActions.populateHistory: ${typeof SearchActions.populateHistory}`);
        this.store.dispatch(SearchActions.populateHistory({searchPhrase: phrase}));
        this.store.dispatch(SearchActions.countSearches());
    }

    constructor(private store: Store<{ search: Search }>) {
        this.count$ = store.pipe(
            select('search')).pipe(select('searchHistory'),
            map(state => state.length)
        );
    }

    ngOnInit() {
    }

}
