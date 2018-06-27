import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CodeSnippets } from '../list-snippets/list-snippets.component';


@Component({
  selector: 'app-view-snippets',
  templateUrl: './view-snippets.component.html'
})

export class ViewComponent {

  @Output()
  deleteSnippetEvent: EventEmitter<CodeSnippets> = new EventEmitter();

  @Output()
  updateSnippetEvent: EventEmitter<CodeSnippets> = new EventEmitter();

  @Input()
  currentSnippet: CodeSnippets = {'id': 0, 'name': '', 'language': '', 'code': '',};

  constructor() { }

  onDelete() {
    this.deleteSnippetEvent.emit(this.id);
   }

  deleteSnippets(){
    this.deleteSnippetEvent.emit(this.currentSnippet);
  }

  updateSnippets(){
    this.updateSnippetEvent.emit(this.currentSnippet);
  }
}
