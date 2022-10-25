import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api'; 
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  providers: [MessageService],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items!: MenuItem[];
  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.items = [
      {label: 'Cursos', icon: 'pi pi-refresh', command: () => {
          this.update();
      }},
      {label: 'Delete', icon: 'pi pi-times', command: () => {
          this.delete();
      }},
      {label: 'Cerrar sesión', icon: 'pi pi-info', url: 'http://angular.io'},
      {separator:true},
      {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
  ];
  }
  save(severity: string) {
    this.messageService.add({severity: severity, summary:'Success', detail:'Data Saved'});
}

update() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
}

delete() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Deleted'});
}
}
