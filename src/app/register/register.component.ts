import { Component, OnInit } from '@angular/core';
import {
  Http,
  Response,
  RequestOptions,
  Headers
} from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading: boolean;
  submitted = false;

  onSubmit() { this.submitted = true };

  get diagnostic() { return JSON.stringify(this.model); }


  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  makePost(): void {
    this.loading = true;
    this.http.post(
      'piecemeal-api.herokuapp.com/api/v1',
      JSON.stringify({
        body: 'bar',
        title: 'foo',
        userId: 1
      }))
      .subscribe((res: Response) => {
        this.model = res.json();
        this.loading = false;
      });
  }
}
