import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: "root"
})

export class ServService {
    public userToken;


    public fromSession;

    constructor(private http: HttpClient) {

    }

    postLog(body) {
        return this.http.post('https://lectorium.herokuapp.com/api/login', body);
    }

    postReg(body) {
        return this.http.post('https://lectorium.herokuapp.com/api/registration', body);
    }

    getUserToken () {
        console.log('ETO ZAPISAN TOKEN =>', this.userToken);
    }

    setSession (str) {
        sessionStorage.setItem('myKey', JSON.stringify(str));
    }

    getSession() {
       this.fromSession = JSON.parse(sessionStorage.getItem('myKey'));
        console.log('FROMSESSION =>', this.fromSession);
    }

    getTodo () {
    const headers = new HttpHeaders().set('x-apikey', this.fromSession.token);
        console.log('HEADERS =>', headers);
        return this.http.get('https://lectorium.herokuapp.com/api/todolist', { headers: headers });
    }

    createItem(desk) {
        const bodyItem =  {
            "userId": this.userToken,
            "title": "lorem",
            "description": desk,
            "status": "done",
            "selected": false
        };
        const headers = new HttpHeaders().set('x-apikey', this.fromSession.token);
        return this.http.post('https://lectorium.herokuapp.com/api/todolist',
            bodyItem,
            { headers: headers }
            );
    }

    delItem(id) {
        const headers = new HttpHeaders().set('x-apikey', this.fromSession.token);
        return this.http.delete('https://lectorium.herokuapp.com/api/todolist/' + id, { headers: headers });
    }
}

