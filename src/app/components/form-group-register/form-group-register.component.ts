import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {ServService} from '../../myService/serv.service';
import {Router} from '@angular/router';


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

    constructor(private api: ServService, private router: Router) {
    }

    ngOnInit() {
    }

    post() {
        this.api.postReg(this.newForm.value).subscribe(() => {
            const inSession = this.api.getSession();
            if (inSession) {
                this.api.setSession({token: ''});
            }
            this.router.navigate(['/login-page']);
        });
    }

}
