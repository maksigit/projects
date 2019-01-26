import { Component, OnInit } from '@angular/core';
import {ServService} from '../../myService/serv.service';


@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

    allTodo;
    title = '';
    id;

  constructor(private api: ServService) {
    console.log('this TODO =>', this);
  }

  ngOnInit() {
      this.get();
  }

  get() {
      this.api.getSession();
      this.api.getTodo().subscribe((date) => {
          this.allTodo = date ? date : '';
          console.log('Eto moy TODOOOOOO =>', date);
      }
          );
  }

  sendItem() {
      this.api.createItem(this.title).subscribe(() => this.get());
  }

  listenInput(e) {
    console.log(e.target.value);
    this.title = e.target.value ? e.target.value : null;
  }

  remove () {
      this.getId();
      this.api.delItem(this.id).subscribe(() => this.get());

  }

  getId() {
      const allItems = document.querySelectorAll('.mat-list-item');
      console.log(allItems);
      for (let i = 0; i < allItems.length; i++) {
          if (allItems[i].getAttribute('aria-selected') === 'true') {
            console.log('bingo');
            const checkId = allItems[i].querySelector('.wrap-item');
            this.id = checkId.id;
              console.log('NEXTchild =>', checkId.id);
          }
      }
  }
}
