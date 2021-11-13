import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage{

  constructor(public modal: ModalController) { };

  fecharModal(){
    this.modal.dismiss();
  }
}
