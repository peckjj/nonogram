import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-row-markers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './row-markers.component.html',
  styleUrl: './row-markers.component.css'
})
export class RowMarkersComponent {
  @Input({required: true}) values!: number[];
}
