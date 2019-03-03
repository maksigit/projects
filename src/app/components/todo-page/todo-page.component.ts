import {Component, OnInit} from '@angular/core';
import {ServService} from '../../myService/serv.service';
import {formatDate} from '@angular/common';
import {DatePipe} from '@angular/common';


@Component({
    selector: 'app-todo-page',
    templateUrl: './todo-page.component.html',
    styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

    allTodo;
    titleDate = {
        title: '',
        date: null,
        dateM: null
    };
    id;

    constructor(private api: ServService) {
    }

    ngOnInit() {
        this.get();
    }

    get() {
        this.api.getSession();
        this.api.getTodo().subscribe((date) => {
                this.allTodo = date ? date : '';
            }
        );
    }

    sendItem() {
        this.api.createItem(this.titleDate).subscribe(() => this.get());
    }

    listenInput(e) {
        this.titleDate.title = e.target.value ? e.target.value : null;
        const d = new Date();
        this.titleDate.date = ('0' + d.getDate()).slice(-2) + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' +
            d.getFullYear() + ' ' + ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2) + ':' + ('0' + d.getSeconds()).slice(-2);
    }

    remove() {
        this.getId();
        this.api.delItem(this.id).subscribe(() => this.get());

    }

    getId() {
        const allItems = document.querySelectorAll('.mat-list-item');
        for (let i = 0; i < allItems.length; i++) {
            if (allItems[i].getAttribute('aria-selected') === 'true') {
                const checkId = allItems[i].querySelector('.wrap-item');
                this.id = checkId.id;
            }
        }
    }

    parseData() {
        for (let i = 0; i < this.allTodo.length; i++) {
            for (let j = i; j < this.allTodo.length - 1; j++) {
                if ((Date.parse(this.allTodo[i].description.date)) < (Date.parse(this.allTodo[j + 1].description.date))) {

                } else {
                    const temp = this.allTodo[i];
                    this.allTodo[i] = this.allTodo[j + 1];
                    this.allTodo[j + 1] = temp;
                }
            }
        }
    }
}
