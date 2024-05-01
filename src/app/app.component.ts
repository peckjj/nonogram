import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BoardComponent } from './board/board.component';
import { ContentPanelComponent } from './content-panel/content-panel.component';
import { IGrid } from '../Interfaces/IGrid';
import { CellGrid } from '../Classes/CellGrid';
import { Constants } from '../Classes/Contants';
import { CellGridSolution } from '../Classes/CellGridSolution';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BoardComponent, ContentPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nonogram';

  grid: IGrid;

  constructor() {
  this.grid = this.createGrid();
  }

  private createGrid(): IGrid {
    let solution = new CellGridSolution(Constants.DummySolution.DIAGONAL_GROW_5_5);

    solution.print();

    return solution.createGrid();
  }
}
