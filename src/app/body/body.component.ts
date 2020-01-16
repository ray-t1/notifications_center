import { Component, OnInit } from '@angular/core';
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

  public os: any = ['Android','iOS'];
  public list: any = []; 
  notificationForm = new FormGroup({
    title: new FormControl(),
    text: new FormControl(),
    image: new FormControl(),
    destination: new FormControl(),
    all_users : new FormControl(this.all),
    android_users: new FormControl(this.android),
    ios_users: new FormControl(this.ios),
    os: new FormControl()
  })

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

  getDevices(e){
    //return this.http.post('http://127.0.0.1:8000/api/getAll', {"os":e.target.value}, { responseType: 'json' }) 
    return this.http.post('https://padel-labx.herokuapp.com/api/getAll',{"os":e.target.value}, { responseType: 'json' })
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
    //return this.http.post('http://127.0.0.1:8000/api/push-test',this.notificationForm.value, {responseType:'json'})
    return this.http.post('https://padel-labx.herokuapp.com/api/push-test', this.notificationForm.value, { responseType: 'json' })
    .subscribe(responseData => {  
      this.pressed=!this.pressed;  
      console.log('Success');
    }, error => {
      this.pressed = !this.pressed;   
      console.log(error)
    });
  }
  
  isOpen = false;

  isOpenChange($event: boolean) {
    this.isOpen = $event;
  }
  
}
