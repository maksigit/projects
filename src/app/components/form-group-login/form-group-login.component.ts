import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ServService} from '../../myService/serv.service';

@Component({
    selector: 'app-form-group-login',
    templateUrl: './form-group-login.component.html',
    styleUrls: ['./form-group-login.component.scss']
})
export class FormGroupLoginComponent implements OnInit {

    constructor(private api: ServService) {
    }

    ngOnInit() {
    }

    formGroupLogin = new FormGroup({
        Email: new FormControl(''),
        Password: new FormControl(''),
    });

    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.formGroupLogin.value);
    }

    post() {
        this.api.postLog(this.formGroupLogin.value).subscribe((date) => {
                this.api.setSession(date);
                if (date) {
                    const todo = document.querySelector('.todo-list');
                    todo.setAttribute(
                        'style', 'display: inline-block;');

                }
            }
        );
    }
}
