import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  valorRange = 0;

  imagem = 'https://media.istockphoto.com/photos/rear-view-of-a-mans-bald-head-picture-id147486873?'
  +'k=20&m=147486873&s=612x612&w=0&h=tK77FEHbuOq5z_BUrBnPL4iPJmA1TG8tke7VnNr5lpI=';

  mostrarPrimeiraFace = true;
  mostrarSegundaFace = false;
  mostrarTerceiraFace = false;

  valorCor = 'ffffff';

  onRangeChange(e){
    if(e.target.value >= 0 && e.target.value < 80){
      this.imagem = 'https://media.istockphoto.com/photos/rear-view-of-a-mans-bald-head-picture-id147486873?'+
      'k=20&m=147486873&s=612x612&w=0&h=tK77FEHbuOq5z_BUrBnPL4iPJmA1TG8tke7VnNr5lpI=';
    }
    else if(e.target.value >= 80 && e.target.value < 160){
      this.imagem = 'https://simg.nicepng.com/png/small/60-603127_slow-stop-and-reverse-your-hair-loss-bald.png';
    }
    else {
      this.imagem = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO5Sh9-'
      +'AWOS3fqDVBu6JMuMzgQvsXe_yMQmiwG7R0On5OA3ds3kGeoCy_S_HzBZ6X5Yw0&usqp=CAU';
    }
  }
}
