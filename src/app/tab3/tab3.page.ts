import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  valorRange = 0;

  imagem = 'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/55893/angry-face-emoji-clipart-md.png';

  mostrarPrimeiraFace = true;
  mostrarSegundaFace = false;
  mostrarTerceiraFace = false;

  valorCor = 'ffffff';

  onRangeChange(e){
    if(e.target.value >= 0 && e.target.value < 80){
      this.imagem = 'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/55893/angry-face-emoji-clipart-md.png';
    }
    else if(e.target.value >= 80 && e.target.value < 160){
      this.imagem = 'https://www.pngkit.com/png/full/57-576420_poker-face-meme-png-meme-faces-poker-face.png';
    }
    else {
      this.imagem = 'https://www.freeiconspng.com/uploads/happy-png-14.png';
    }
  }
}
