import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BoardComponent } from './board/board.component';
import { ContentPanelComponent } from './content-panel/content-panel.component';
import { IGrid } from '../Interfaces/IGrid';
import { Constants } from '../Classes/Contants';
import { CellGridSolution } from '../Classes/CellGridSolution';
import { Utils } from '../Classes/Utils';

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

  setInterval(() => this.grid = this.createGrid(), 1000);
  }

  private createGrid(): IGrid {
    // let solution = new CellGridSolution(Constants.DummySolution.DISPERSED_5_5);
    let solution = Utils.RandomSolution(.5, 20, 20);

    solution.print();

    return solution.createGrid();
  }
}
