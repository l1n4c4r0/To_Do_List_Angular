import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  //ToDo: eliminar esta lista al momento de integrar la API//
  filter: "all" | "active" | "done" = "all"

  allItems = [
    {description: "dormir", done:true},
    {description: "ir a mercar", done:false},
    {description: "lavar la ropa", done:false},
    {description: "ir al doctor", done:false},
    {description: "ir al odontologo", done:false},

  ]

  get items() {
    if (this.filter === "all"){
      return this.allItems
    }
    return this.allItems.filter((item)=>{
      this.filter ==="done" ? item.done :!item.done
    })
  }


  addItem(description:string){
    this.allItems.unshift({
      description,
      done:false
    })
  }

  removeItem(item:Item){
    this.allItems.splice(this.allItems.indexOf(item),1)
  }

}
