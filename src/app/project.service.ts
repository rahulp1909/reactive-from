import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  geCategory() {
    return this.http.get<any>('http://localhost/backend/process.php?action=get-category');
  }

  geOrganization() : any {
    return this.http.get<any>('http://localhost/backend/process.php?action=get-organization');
  }

  createProject(project_name: string, project_image: any){
    console.log('hii create project');
    const formData = new FormData();
    formData.append('project_name', project_name);
    
    console.log(project_image);

    for(let i=0; i < project_image.length; i++) {
      formData.append('project_image[]', project_image[i]);
    }
  
    return this.http.post<any>('http://localhost/backend/process.php?action=post-image', formData).subscribe(
      (result) => {
        console.log(result);
      }
    );
  }
}
