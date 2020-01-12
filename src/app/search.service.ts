import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
    searchPhrase = '';
    constructor() { }

    onSearch() {
      return this.searchPhrase;
    }

    public search(phrase?: string){
        return this.searchPhrase = phrase;
    }
}
