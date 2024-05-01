import { Component, Input } from '@angular/core';
import { IGrid } from '../../Interfaces/IGrid';
import { CommonModule } from '@angular/common';
import { CellComponent } from '../cell/cell.component';
import { ColumnMarkersComponent } from '../column-markers/column-markers.component';
import { RowMarkersComponent } from '../row-markers/row-markers.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, CellComponent, ColumnMarkersComponent, RowMarkersComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  @Input({ required: true }) public grid!: IGrid

  countRows(): number {
    return this.grid.width;
  }

  countCols(): number {
    return this.grid.height;
  }

  getRowIndices(): any[] {
    return new Array(this.grid.height);
  }

  getColIndices(): any[] {
    return new Array(this.grid.width);
  }

  getColMarkers(col: number): number[] {
    return this.grid.getColumnMarkers(col);
  }

  getRowMarkers(row: number): number[] {
    return this.grid.getRowMarkers(row);
  }
}
