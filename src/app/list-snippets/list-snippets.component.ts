import { Component, ViewEncapsulation } from '@angular/core';

export interface CodeSnippets{
  id: number;
  name: string;
  language: string;
  code: string;
}

@Component({
  selector: 'app-snippet-list',
  templateUrl: 'list-snippets.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ListSnippetsComponent {

  listOfSnippets: CodeSnippets[] = [];
  selectedSnippet: CodeSnippets;
  showAdd = false;
  showUpdate = false;

  constructor() {
    this.listOfSnippets.push({'id': 1232, 'name': 'D', 'language': 'JavaScript', 'code': 'function(){}',);
    this.listOfSnippets.push({'id': 1233, 'name': 'E', 'language': 'Java', 'code': 'function(){}',);
    this.listOfSnippets.push({'id': 1234, 'name': 'F', 'language': 'C++', 'code': 'function(){}',);
   }

  ngOnInit() { }

  addSnippetEventHandler(event: CodeSnippets){
    this.listOfSnippets.push(event);
  }

  showSnippet(snippet: CodeSnippets){
    this.showAdd = false;
    this.showUpdate = true;
    console.log('SSS');
    console.log(snippet.name);
    this.selectedSnippet = snippet;
  }

  showAddToggle(){
    this.showAdd = !this.showAdd;
  }

  deleteSnippetEventHandler(event: CodeSnippets){
    console.log('Delete Handler');
    this.listOfSnippets.splice(this.listOfSnippets.indexOf(event), 1);
  }
}
