import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-test-ui',
  templateUrl: './test-ui.component.html',
  styleUrls: ['./test-ui.component.scss']
})

export class TestUiComponent implements OnInit {

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
