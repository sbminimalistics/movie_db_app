import { Component, OnInit, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';
import { Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
    @Output()
    initSearch = new EventEmitter();

    //_searchPhrase = '';
    /*
    get searchPhrase(): string {
      return this._searchPhrase;
    }
    set searchPhrase(value: string) {
      this._searchPhrase = value;
      console.log(`searchPhrase: ${value}`);
      //this.filteredProducts = this.listFilter ? this.performFilter(this.searchPhrase) : this.products;
    }
    */
    public search(phrase){
        console.log(`search phrase: ${phrase} inside SearchBarComponent`);
        this.initSearch.emit(phrase);
    }

    constructor() { }

    ngOnInit() {
    }

}
