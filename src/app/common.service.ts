import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http: HttpClient) { }
  userAdded = new Subject<void>();
  createUser(obj: any) : Observable<any> {
    console.log(obj);
    return this._http.post("http://localhost:3000/users", obj)
  }
 
  getLatestUser() {
    return this._http.get("http://localhost:3000/users")
  }

  updateUser() {}

  deleteUser(user: { id: string; }) {
    return this._http.delete("http://localhost:3000/users/" + user.id)
  }


  informChild() {
    this.userAdded.next();
  }
}
