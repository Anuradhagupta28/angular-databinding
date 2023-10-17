import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  items = ['Task 1', 'Task 2', 'Task 3'];
  newItem: string = '';
  editingItem: any;
  editedItem: any; // Added editedItem property for editing

  constructor() { }

  addItem() {
    if (this.newItem.trim() !== '') {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }

  saveItem(item: string) {
    if (this.editedItem.trim() !== '') {
      const index = this.items.indexOf(item);
      this.items[index] = this.editedItem;
      this.editingItem = null;
      this.editedItem = '';
    }
  }

  editItem(item: string) {
    this.editingItem = item;
    this.editedItem = item;
  }

  removeItem(item: string) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}
