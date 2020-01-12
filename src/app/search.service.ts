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
        console.log(`search init with phrase: ${phrase}`);
        return this.searchPhrase = phrase;
    }
}
