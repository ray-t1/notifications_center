import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { NgForm, FormControl, FormGroup,} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {
  click = 'No se ha enviado el formulario';
  allowNew = false;
  pressed = false;
  all = false;
  android = false;
  ios= false;

  public list: any = []; 
  notificationForm = new FormGroup({
    title: new FormControl(),
    text: new FormControl(),
    image: new FormControl(),
    destination: new FormControl(),
    all_users : new FormControl(this.all),
    android_users: new FormControl(this.android),
    ios_users: new FormControl(this.ios)
  })

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getDevices();
  }

  getDevices(){
    return this.http.get('http://127.0.0.1:8000/api/getAll') 
    //this.http.get('https://padel-labx.herokuapp.com/api/getAll')
                .subscribe(data => {
                  (this.list = data)
                  console.log(this.list)
                }, 
                error => {
                  console.log(error)
                });
  }

  onFormSubmit() {
    console.log(this.notificationForm.value)
    this.http.post('http://127.0.0.1:8000/api/push-test',this.notificationForm.value, {responseType:'json'})
    //this.http.post('https://padel-labx.herokuapp.com/api/push-test', this.notificationForm.value, { responseType: 'json' })
    .subscribe(responseData => {  
      this.pressed=!this.pressed;  
      console.log('Success');
    }, error => {
      this.pressed = !this.pressed;   
      console.log(error)
    });
  }
    
}
