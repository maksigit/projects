import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServService } from '../../myService/serv.service'


@Component({
  selector: 'app-form-group-register',
  templateUrl: './form-group-register.component.html',
  styleUrls: ['./form-group-register.component.scss']
})
export class FormGroupRegisterComponent implements OnInit {

    public content;

  constructor(private api: ServService) { }

  ngOnInit() {
  }

    formGroupRegister = new FormGroup({
        Name: new FormControl(''),
        SurName: new FormControl(''),
        Email: new FormControl(''),
        Phone: new FormControl(''),
        Password: new FormControl(''),
    });

    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.formGroupRegister.value);
    }

    // get(){
    //     this.api.get().subscribe((data) => this.content = data)
    // }
    post() {
        console.log('bodyREG=>', this.formGroupRegister.value);
        this.api.postReg(this.formGroupRegister.value).subscribe((date) => {console.log('REG=>', date);
        this.api.userToken = date;
        this.api.getUserToken();
        this.api.setSession(date);
        });
    }

}
