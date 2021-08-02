import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarea-individual',
  templateUrl: './tarea-individual.component.html',
  styleUrls: ['./tarea-individual.component.css']
})
export class TareaIndividualComponent implements OnInit {

  @Input()
  tareaInfo: any;

  constructor() { }

  ngOnInit(): void {
  }

}
