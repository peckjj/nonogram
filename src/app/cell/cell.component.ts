import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ICell } from '../../Interfaces/ICell';
import { Constants } from '../../Classes/Contants';

@Component({
  selector: 'app-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.css'
})
export class CellComponent {
  @Input( {required: true} ) cell!: ICell;

  getBackgroundColor() {
    return this.cell.isOn ? `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`//Constants.BoardConsts.ON_BACKGROUND 
      : Constants.BoardConsts.OFF_BACKGROUND;
  }
}
