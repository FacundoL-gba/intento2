import { Component, Input, OnInit } from '@angular/core';
import { stringLength } from '@firebase/util';

@Component({
  selector: 'app-mostrar-mas-menos',
  templateUrl: './mostrar-mas-menos.component.html',
  styleUrls: ['./mostrar-mas-menos.component.css']
})
export class MostrarMasMenosComponent implements OnInit {
  //@Input() text: string;
  //@Input() wordLimit: number; 

  showMore: boolean; 
  constructor() { 
    this.showMore = false;
  }

  ngOnInit(): void {
  }

}
