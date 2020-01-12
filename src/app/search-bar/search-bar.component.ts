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

    public search(phrase){
        this.initSearch.emit(phrase);
    }

    constructor() { }

    ngOnInit() {
    }

}
