import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  contact: Contact[] = []

  base_url = "http://localhost:3000/contact"

  getData(){
    return this.http.get(this.base_url)
  }

  getDatabyID(id: number){
    return this.http.get(this.base_url + `/${id}`)
  }

  postData(contact:Contact){
    this.http.post(this.base_url,contact).subscribe()
  }

  deleteDatabyID(id: number){
    return this.http.delete(this.base_url + `/${id}`)
  }

  updateDatabyID(id: number, value:Contact){
    return this.http.put(this.base_url+'/'+id, value).subscribe()
  }
}
