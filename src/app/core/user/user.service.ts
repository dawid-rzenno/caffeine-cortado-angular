import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ItemServiceAbstract } from "../../shared/abstracts/item-service.abstract";
import { environment } from "../../../environments/environment";
import { User, UserPatch } from "./user";

const DefaultUser: User = {
  id: 0,
  name: "John Doe",
  email: "john.doe@example.com",
};

@Injectable({
  providedIn: "root",
})
export class UserService extends ItemServiceAbstract<User, UserPatch> {
  protected endpointUrl: string = `${environment.apiUrl}/user`;

  user$: BehaviorSubject<User> = new BehaviorSubject<User>(DefaultUser);
}
