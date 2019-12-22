import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { NgForm, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {
  click = 'No se ha enviado el formulario';
  allowNew = false;
  inputText = 'Quasimoto';
  pressed = false;

  userDevices = [];
  notificationForm = new FormGroup({
    title: new FormControl(),
    text: new FormControl(),
    image: new FormControl(),
    destination: new FormControl(),
  })

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

  // getDevices(){
  //   this.http.get('http://localhost:4200/api/getAll')
  //   .
  // }

  onFormSubmit() {
    this.http.post('http://localhost:4200/api/push-test', this.notificationForm.value, { responseType: 'json' })
    .subscribe(responseData => {  
      console.log(' Success');
    }, error => {
      console.log(error)
    });
  }
  
  onUpdateText(event: Event) {
    console.log(event);
    this.inputText = (<HTMLInputElement>event.target).value;
  }
}
