import { Component } from '@angular/core';
import translate from "translate";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'shreeComp';
  name ="";
  age: string = '';
  occ:string="";
  address:string="";
  showLetter: boolean = false;

  engName: string = '';
  engOcc: string = '';
  engAddress: string = '';
  engAge: string = '';

  async print() {
    if(this.name && this.age && this.address && this.occ){
      this.showLetter = true;
      this.engName =  await translate(this.name, {from:'Marathi', to: 'en'});
      this.engAddress =  await translate(this.address, {from:'Marathi', to: 'en'});
      this.engAge =  await translate(this.age, {from:'Marathi', to: 'en'});
      this.engOcc =  await translate(this.occ, {from:'Marathi', to: 'en'});
     }
  }

  onPrint() {
    const printContents:any = document.getElementById('letter')?.innerHTML;
     const originalContents = document.body.innerHTML;
     document.body.innerHTML = printContents;
     window.print();
     document.body.innerHTML = originalContents;
}
}
