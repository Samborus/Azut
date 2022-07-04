import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Weat } from '../models/weat';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.sass']
})
export class WeatherListComponent implements OnInit {
  @Input() weats: ReadonlyArray<Weat> | null | undefined = [];
  @Output() remove = new EventEmitter<string>();
  @Output() add = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(): void {
    this.add.emit('99');
  }

  onDelete(weatId: any): void {
    this.remove.emit(weatId);
  }
}
