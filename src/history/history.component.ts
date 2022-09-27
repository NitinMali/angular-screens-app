import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  displayList: Boolean = true;
  selectedItem: any | undefined;

  constructor() {}

  ngOnInit(): void {}

  onSelect(item: any): void {
    this.selectedItem = item;
    console.log(item);
  }

  onDone($event: any) {
    console.log('done with: ', $event);
    this.selectedItem = undefined;
  }

  toDoList: Array<any> = [
    { description: 'Go to work', isComplete: false },
    { description: 'Watch Modern Family', isComplete: true },
    { description: 'Pet the cat', isComplete: true },
    { description: 'Go to bed early', isComplete: false },
    { description: 'Go to work', isComplete: false },
    { description: 'Watch Modern Family', isComplete: true },
    { description: 'Pet the cat', isComplete: true },
    { description: 'Go to bed early', isComplete: false },
  ];

  tiles: Array<any> = [
    { text: 'One', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 1, rows: 1, color: '#DDBDF1' },
    { text: 'One', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 1, rows: 1, color: '#DDBDF1' },
  ];
}
