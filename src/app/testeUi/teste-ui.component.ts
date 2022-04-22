import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-teste-ui',
  templateUrl: './teste-ui.component.html',
  styleUrls: ['./teste-ui.component.scss']
})

export class TesteUiComponent implements OnInit {

  cardsList: string[] = [
    'Card 01',
    'Card 02',
    'Card 03'
  ]

  constructor(
    private router: Router) { }

  ngOnInit() {

  }

  gotToHomePage() {
    this.router.navigate(['']);
  }

}
