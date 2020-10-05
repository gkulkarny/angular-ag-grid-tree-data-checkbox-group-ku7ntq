import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AgEditorComponent } from 'ag-grid-angular';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, AgEditorComponent {

  params;
  options = [
    'hello',
    'hi',
    'test'
  ]

  constructor() { }

  getValue() {
    // If I don't return something here, the grid will update its rowData with an empty value,
    // even though it's supposed to be using reactive data.
    // Problem only happens with deltaRowMode=true
    return this.params.node.data.value.value;
  }

  isPopup() {
    return true;
  }

  agInit(params) {
    this.params = params;
  }

  ngOnInit() {
  }

}