import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '@models/pexel-response';
import { Observable } from 'rxjs';
import { PexelResponse } from '../models/pexel-response';

const KEY = '563492ad6f9170000100000148122e9aa7104325b13f539921660c2a';
const BASE_URL = 'https://api.pexels.com/v1';
const headers = new HttpHeaders({ Authorization: KEY });

@Injectable({
  providedIn: 'root',
})
export class PexelService {
  constructor(private readonly _http: HttpClient) {}

  getCuratedPhotos(
    page: number = 1,
    per_page: number = 30
  ): Observable<PexelResponse> {
    const url = `${BASE_URL}/curated`;

    let params = new HttpParams();
    params = params.append('page', `${page}`);
    params = params.append('per_page', `${per_page}`);
    return this._http
      .get<PexelResponse>(url, { headers, params })
      .pipe();
  }

  getSearchPage(
    query: string,
    page: number = 1,
    per_page: number = 30
  ): Observable<PexelResponse> {
    const url = `${BASE_URL}/search`;

    let params = new HttpParams();
    params = params.append('query', query);
    params = params.append('page', `${page}`);
    params = params.append('per_page', `${per_page}`);
    return this._http
      .get<PexelResponse>(url, { headers, params })
      .pipe();
  }

  async download(photo: Photo) {
    const a = document.createElement('a');
    a.href = await this._toDataURL(photo.src.original);
    a.download = '';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  private _toDataURL(url: string) {
    return fetch(url)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        return URL.createObjectURL(blob);
      });
  }
}
