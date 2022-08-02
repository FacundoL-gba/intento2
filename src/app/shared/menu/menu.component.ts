import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];

  constructor() { 
    this.items = [
      {
        label:'Primer Año',
        icon:'pi pi-play',
        items:[
            {
                label:'Teoria',
                icon:'pi pi-angle-right',
            },
            {
              separator:true
            },
            {
                label:'Danzas',
                icon:'pi pi-angle-right'
            },
            {
              separator:true
            },
            {
              label: 'Trabajos',
              icon: 'pi pi-pencil'
            }
        ]
    },
    {
        label:'Diploma Elemental',
        icon:'pi pi-play',
        items:[
          {
            label:'Teoria',
            icon:'pi pi-angle-right',
        },
        {
          separator:true
        },
        {
            label:'Danzas',
            icon:'pi pi-angle-right'
        },
        {
          separator:true
        },
        {
          label: 'Trabajos',
          icon: 'pi pi-pencil'
        }
        ]
    },
    {
        label:'Diploma Superior',
        icon:'pi pi-play',
        items:[
          {
            label:'Teoria',
            icon:'pi pi-angle-right',
        },
        {
          separator:true
        },
        {
            label:'Danzas',
            icon:'pi pi-angle-right'
        },
        {
          separator:true
        },
        {
          label: 'Trabajos',
          icon: 'pi pi-pencil'
        }
        ]
    }
    ];
  }

  ngOnInit(): void {
  }

}
