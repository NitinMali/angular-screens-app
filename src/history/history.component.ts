import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  
  displayList: Boolean = true;
  selectedItem: any | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(item: any): void {
    this.selectedItem = item;
  }

  onDone($event: any) {
    console.log("done with: ", $event);
    this.selectedItem = undefined;
  }

  toDoList: Array<any> = 
  [ {description: "Go to work", isComplete: false},
    {description: "Watch Modern Family", isComplete: true},
    {description: "Pet the cat", isComplete: true},
    {description: "Go to bed early", isComplete: false}];

}