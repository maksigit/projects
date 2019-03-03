import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';

@Injectable({
    providedIn: 'root'
})

export class ServService {
    public userToken;

    public fromSession;

    constructor(private http: HttpClient) {

    }

    postLog(body) {
        return this.http.post(environment.apiUrl + 'login', body);
    }

    postReg(body) {
        return this.http.post(environment.apiUrl + 'registration', body);
    }

    setSession (str) {
        sessionStorage.setItem('myKey', JSON.stringify(str));
    }

    getSession() {
       this.fromSession = JSON.parse(sessionStorage.getItem('myKey'));
       return this.fromSession;
    }

    getTodo () {
    const headers = new HttpHeaders().set('x-apikey', this.fromSession.token);
        return this.http.get(environment.apiUrl + 'todolist', { headers: headers });
    }

    createItem(desk) {
        const bodyItem =  {
            'userId': this.userToken,
            'title': 'lorem',
            'description': desk,
            'status': 'done',
            'selected': false
        };
        const headers = new HttpHeaders().set('x-apikey', this.fromSession.token);
        return this.http.post(environment.apiUrl + 'todolist',
            bodyItem,
            { headers: headers }
            );
    }

    delItem(id) {
        const headers = new HttpHeaders().set('x-apikey', this.fromSession.token);
        return this.http.delete(environment.apiUrl + 'todolist/' + id, { headers: headers });
    }
}

