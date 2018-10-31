import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
// import {ErrorStateMatcher} from '@angular/material/core';
// import { MatDialog, MatDialogRef } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  dem: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', dem: 'ana'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', dem: 'pedro'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', dem: 'juan'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', dem: 'maria'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', dem: 'jonathan'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', dem: 'juan pablo'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', dem: 'paola'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', dem: 'claudia'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', dem: 'fernanda'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', dem: 'diego'},
];


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  demandanteFormControl = new FormControl('', [Validators.required]);
  demandadoFormControl = new FormControl('', [Validators.required]);
  telefonoFormControl = new FormControl('', [Validators.required]);

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'dem'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // disabled = false;
  constructor() { }

  ngOnInit() {
  }

}
