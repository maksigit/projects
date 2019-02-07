import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: "root"
})

export class ServService {
    public userToken;

    public SERV = 'https://lectorium.herokuapp.com/api/' ;
    public fromSession;

    constructor(private http: HttpClient) {

    }

    postLog(body) {
        return this.http.post(this.SERV + 'login', body);
    }

    postReg(body) {
        return this.http.post(this.SERV + 'registration', body);
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
        return this.http.get(this.SERV + 'todolist', { headers: headers });
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
        return this.http.post(this.SERV + 'todolist',
            bodyItem,
            { headers: headers }
            );
    }

    delItem(id) {
        const headers = new HttpHeaders().set('x-apikey', this.fromSession.token);
        return this.http.delete(this.SERV + 'todolist/' + id, { headers: headers });
    }
}

