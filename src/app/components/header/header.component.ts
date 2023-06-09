import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Hamoye';
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
  }

}
