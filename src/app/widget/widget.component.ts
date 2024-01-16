import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { Task } from '../task.model';
import { WidgetDataService } from './widget-data.service';
import { WidgetErrorComponent } from './widget-error/widget-error.component';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatDividerModule, MatButtonModule, WidgetErrorComponent],
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  tasks$!: Observable<Task[]>;
  error: Error | null = null;

  constructor(private widgetData: WidgetDataService) { }

  ngOnInit(): void {
    this.tasks$ = this.widgetData.load();
  }

  addTask() {
    // unreliable method
    // ({} as any).someMethod(); saple of an error we propergated
    //handling the error using the try catch block
    // try / catch construct only works with synchronous code
    //the trcatch block alone doesnt make it to the global error handler
    try {
      //trying with an asynchronous code such as set timeout
      setTimeout(() => {
        this.widgetData.addTaskSync({ id: 0, title: 'New Task' });
      })
      // this.widgetData.addTaskSync({ id: 0, title: 'New Task' });
    } catch (error) {
      if (error instanceof Error) {
        this.error = error;
        throw error;  // with this line of code this trycatch is passed onto the global error handler
      }
    }

  }
}
