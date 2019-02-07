import {Component, OnInit} from '@angular/core';
import {ServService} from '../../myService/serv.service';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'app-form-group-login',
    templateUrl: './form-group-login.component.html',
    styleUrls: ['./form-group-login.component.scss']
})
export class FormGroupLoginComponent implements OnInit {
    public newForm: FormGroup = new FormBuilder().group(
        {
            Email: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.email,
            ]),
            Password: new FormControl('',
                Validators.required),
        }
    );
    constructor(private api: ServService) {
    }

    ngOnInit() {
    }

    // formGroupLogin = new FormGroup({
    //     Email: new FormControl(''),
    //     Password: new FormControl(''),
    // });

    // onSubmit() {
    //     // TODO: Use EventEmitter with form value
    //     console.warn(this.formGroupLogin.value);
    // }

    post() {
        console.log('from login =>', this.newForm.value);
        this.api.postLog(this.newForm.value).subscribe((date) => {
                if (date) {
                    this.api.setSession(date);
                    const todo = document.querySelector('.todo-list');
                    todo.setAttribute(
                        'style', 'display: inline-block;');
                } else {
                    console.log('GDE TOKEN?????');
                }
            }
        );
    }
}
