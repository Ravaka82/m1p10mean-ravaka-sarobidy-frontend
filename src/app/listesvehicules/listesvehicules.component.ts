import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicule } from '../Model/vehicule';
import { DepotVoitureService } from '../Service/depot-voiture.service';

@Component({
  selector: 'app-listesvehicules',
  templateUrl: './listesvehicules.component.html',
  styleUrls: ['./listesvehicules.component.css']
})
export class ListesvehiculesComponent implements OnInit{
  Vehicule: Vehicule = new Vehicule();
  listeVehicule!: Vehicule[];
  pages: number = 1;
  totallength: any;
  config: any;
  constructor(private depotservice: DepotVoitureService ,private router: Router,private route: ActivatedRoute){ 
    route.queryParams.subscribe(
      params=>this.config.currentPage = params['page'] ? params['page']:1
    )
  }
  pageChange(newPage: number){
    this.router.navigate([''],{queryParams: {page: newPage}});
  }
  ngOnInit(): void {

    this.listesVehiculesValide();
    
  }
  listesVehiculesValide(){
      this.Vehicule.utilisateurId=localStorage.getItem('idUser');
      this.depotservice.getListeVoituresValide(this.Vehicule.utilisateurId)
      .subscribe(
        data => {
          this.listeVehicule=data;
          this.totallength= this.listeVehicule.length;
          console.log(data);
        }) 
  }
  getlien(val: string){
    var t=val.split("\\");
    //console.log(t[2]);
    return t[2];
  }

}
