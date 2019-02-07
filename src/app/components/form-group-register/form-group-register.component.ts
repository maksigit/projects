import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { ServService } from '../../myService/serv.service';


@Component({
  selector: 'app-form-group-register',
  templateUrl: './form-group-register.component.html',
  styleUrls: ['./form-group-register.component.scss']
})
export class FormGroupRegisterComponent implements OnInit {

    public content;

    public newForm: FormGroup = new FormBuilder().group(
        {
            Name: new FormControl('', [
                Validators.required,
                Validators.minLength(3)]),
            SurName: new FormControl('', [
                Validators.required,
                Validators.minLength(3)]),
            Email: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.email,
            ]),
            Phone: new FormControl('380', [
                Validators.required,
                Validators.minLength(12),
                Validators.maxLength(12),
                Validators.pattern('[0-9]+'),
                ]),
            Password: new FormControl('',
                Validators.required),
        }
    );

  constructor(private api: ServService) { }

  ngOnInit() {
  }

    // formGroupRegister = new FormGroup({
    //     Name: new FormControl(''),
    //     SurName: new FormControl(''),
    //     Email: new FormControl(''),
    //     Phone: new FormControl(''),
    //     Password: new FormControl(''),
    // });

    // onSubmit() {
    //     // TODO: Use EventEmitter with form value
    //     console.warn(this.formGroupRegister.value);
    // }

    // get(){
    //     this.api.get().subscribe((data) => this.content = data)
    // }
    post() {
        console.log('bodyREG=>', this.newForm.value);
        this.api.postReg(this.newForm.value).subscribe((date) => {console.log('REG=>', date);
        this.api.userToken = date;
        this.api.getUserToken();
        this.api.setSession(date);
        });
    }

}
