import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup,} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

declare let html2canvas: any;

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
  capturedImage;

  public selected: any = 'android';
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
    this.list = this.getDevicesReq('android');
  }

  getDevices(e){
    this.selected = e.target.value; 
    this.getDevicesReq(this.selected);
  }

  getDevicesReq(e:any){
    return this.http.post('https://padel-labx.herokuapp.com/api/getAll', {"os": e}, { responseType: 'json' })
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
  
  clickme() {
    html2canvas(document.querySelector("#capture")).then(canvas => {

      debugger;

      /// document.body.appendChild(canvas);
      this.capturedImage = canvas.toDataURL();
      console.log("canvas.toDataURL() -->" + this.capturedImage);
      // this will contain something like (note the ellipses for brevity), console.log cuts it off 
      // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa0AAAB3CAYAAACwhB/KAAAXr0lEQVR4Xu2dCdiNZf7HP/ZQkpQtaUxDjYYoTSYlURMhGlmKa..."


      canvas.toBlob(function (blob) {

        //  just pass blob to something expecting a blob
        // somfunc(blob);

        // Same as canvas.toDataURL(), just longer way to do it.
        var reader = new FileReader();
        debugger;
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
          let base64data = reader.result;
          console.log("Base64--> " + base64data);
        }

      });


    });
  }

  
}
