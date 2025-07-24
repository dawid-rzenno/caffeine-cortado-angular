import { RouterStateSnapshot, TitleStrategy } from "@angular/router";
import { inject, Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Injectable({ providedIn: 'root' })
export class AppTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);

    if (title !== undefined) {
      this.title.setTitle(`Cortado | ${title}`);
    }
  }
}
