import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderComponent, NgIf, NgFor],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  public listTitle:string = "";
  public listDescription:string = "";
  public listSituation:string = "";

  public list:any[] = []

  public getData() {
    this.addData(this.listTitle, this.listDescription, this.listSituation)
  }

  private addData( title: string,  description: string, situation: string) {
    this.list.push({
      title,
      description,
      situation
    })
  }

  public removeData(object: any) {
    let objectToRemove = this.list.indexOf(object)

    this.list.splice(objectToRemove, 1)
  }
}
