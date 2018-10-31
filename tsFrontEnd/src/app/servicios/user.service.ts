import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../modulos/user';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import { Registro } from 'src/app/components/registro/registro.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceCrudService {

  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get<User[]>(`/users`);
}

getById(id: number) {
    return this.http.get(`/users/` + id);
}

register(user: User) {
    return this.http.post(`/users/register`, user);
}

update(user: User) {
    return this.http.put(`/users/` + user.id, user);
}

delete(id: number) {
    return this.http.delete(`/users/` + id);
}
}
