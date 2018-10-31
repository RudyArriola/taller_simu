import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
// import {ErrorStateMatcher} from '@angular/material/core';
// import { MatDialog, MatDialogRef } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  dem: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Jose', weight: 'Juez 1', symbol: 'Acciones Mineras', dem: 'ana'},
  {position: 2, name: 'Alejandro', weight: 'Juez 2', symbol: 'Actos Municipales', dem: 'pedro'},
  {position: 3, name: 'Julio', weight: 'Juez 1', symbol: 'Actos Municipales', dem: 'juan'},
  {position: 4, name: 'Boris', weight: 'Juez 1', symbol: 'Impugnacion por actos administrativos', dem: 'maria'},
  {position: 5, name: 'Yony', weight: 'Juez 2', symbol: 'Impugnacion de Resoluciones emitidas por el SENASIG', dem: 'jonathan'},
  {position: 6, name: 'Marcelo', weight: 'Juez 2', symbol: 'Actos Municipales', dem: 'juan pablo'},
  {position: 7, name: 'Carla', weight: 'Juez 3', symbol: 'Impugnacion por actos administrativos', dem: 'paola'},
  {position: 8, name: 'Casimiro', weight: 'Juez 3', symbol: 'Actos Municipales', dem: 'claudia'},
  {position: 9, name: 'Federico', weight: 'Juez 2', symbol: 'Impugnacion de Resoluciones emitidas por el SENASIG', dem: 'fernanda'},
  {position: 10, name: 'Constancio', weight: 'Juez 1', symbol: 'Impugnacion por actos administrativos', dem: 'diego'},
];

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'dem'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  demandanteFormControl = new FormControl('', [Validators.required]);
  demandadoFormControl = new FormControl('', [Validators.required]);
  telefonoFormControl = new FormControl('', [Validators.required]);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // disabled = false;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
