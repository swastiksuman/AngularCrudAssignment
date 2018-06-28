import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CodeSnippets } from '../list-snippets/list-snippets.component';


@Component({
  selector: 'app-view-snippets',
  templateUrl: './view-snippets.component.html'
})

export class ViewComponent implements OnInit{

  @Output()
  deleteSnippetEvent: EventEmitter<CodeSnippets> = new EventEmitter();

  @Output()
  updateSnippetEvent: EventEmitter<CodeSnippets> = new EventEmitter();

  @Input()
  currentSnippet: CodeSnippets;

  updateSnippet: CodeSnippets = {'id': 0, 'name': '', 'language': '', 'code': '',};

  constructor() { }

  ngOnInit(){
    this.updateSnippet.id = this.currentSnippet.id;
    this.updateSnippet.name = this.currentSnippet.name;
    this.updateSnippet.language = this.currentSnippet.language;
    this.updateSnippet.code = this.currentSnippet.code;
  }

  onDelete() {
    this.deleteSnippetEvent.emit(this.id);
   }

  deleteSnippets(){
    this.deleteSnippetEvent.emit(this.updateSnippet);
  }

  updateSnippets(){
    this.updateSnippetEvent.emit(this.updateSnippet);
  }
}
