import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    API_KEY = 'f79aeba3';
    constructor(private httpClient: HttpClient) { }

    public search(searchTerm?: string){
        return this.httpClient.get(`http://www.omdbapi.com/?apikey=${this.API_KEY}&s=${searchTerm}`);
    }

    public getMovie(imdbId?: string){
        return this.httpClient.get(`http://www.omdbapi.com/?apikey=${this.API_KEY}&i=${imdbId}`);
    }
}
