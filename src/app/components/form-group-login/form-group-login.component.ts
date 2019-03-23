import {Component, OnInit} from '@angular/core';
import {ServService} from '../../myService/serv.service';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

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
    constructor(private api: ServService, private router: Router) {
    }

    ngOnInit() {
    }

    post() {
        this.api.postLog(this.newForm.value).subscribe((date) => {
                if (date) {
                    this.api.setSession(date);
                    const todo = document.querySelector('.todo-list');
                    todo.setAttribute(
                        'style', 'display: inline-block;');
                    this.router.navigate(['/todo-page']);
                } else {
                }
            }
        );
    }
}
