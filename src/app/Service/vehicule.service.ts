import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicule } from '../Model/vehicule';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  constructor(private http:HttpClient){}
  Url1= 'http://localhost:8081/api/vehicule/findVehiculeReparationPayer';
  Url2= 'http://localhost:8081/api/vehicule/findVoitureTerminee';
  Url3= 'http://localhost:8081/api/vehicule/updateStatusVehicule';
  Url4= 'http://localhost:8081/api/vehicule/findVoitureBondeSortieValider';
  url5= 'http://localhost:8081/api/vehicule/findVehiculeRecuperer';

  getVehiculeReparationPayer()
  {
    return this.http.get<Vehicule[]>(this.Url1);
  }
  getVehiculeTerminee()
  {
    return this.http.get<Vehicule[]>(this.Url2);
  }
  updateStatusVehicule(_id:any){
    const val =this.http.post<Vehicule>(`${this.Url3}/${_id}`,null);
    return val;
  }
  getVoitureBondeSortieValider(){
    return this.http.get<Vehicule[]>(this.Url4);
  }
  getListesVehiculeRecuperer(utilisateurId: any){
    const repons =this.http.get<Vehicule[]>(`${this.url5}/${utilisateurId}`);
    return repons;
  }
}
