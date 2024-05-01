import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-column-markers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './column-markers.component.html',
  styleUrl: './column-markers.component.css'
})
export class ColumnMarkersComponent {
  @Input({required: true}) values!: number[];
}
