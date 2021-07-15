import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  geCategory() : any {
    return this.http.get('http://localhost/backend/process.php?action=get-category');
  }

  geOrganization() : any {
    return this.http.get('http://localhost/backend/process.php?action=get-organization');
  }
}
