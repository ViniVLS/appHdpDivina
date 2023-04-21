import { Component, OnInit } from '@angular/core';
import { RepasseService } from '../repasse.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {

  repasseitem = [];
  nrrepasse: string;
  show  = true;

  constructor(private repasseService: RepasseService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const repasse = this.route.snapshot.params['codigo'];
    this.nrrepasse = repasse;
    this.consultaIten(repasse);
    }

consultaIten(repasse: string) {
  this.repasseService.getRepasseItem(repasse)
  .then(dados => {
    this.repasseitem = dados;
    this.show = false;
  })
  .catch(erro => {
    this.show = false;
    console.log(erro);
  });
}

}
