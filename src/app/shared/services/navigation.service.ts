import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter, map, Observable } from "rxjs";
import { Breadcrumb } from "../../core/navigation/breadcrumbs/breadcrumbs.component";
import {
  NavigationNode,
  NavigationNodeToDirectUrlMapType,
} from "../../core/navigation/navigation-node";
import { NavigationServiceInterface } from "../../core/navigation/navigation-service.interface";

@Injectable()
export class NavigationService implements NavigationServiceInterface {
  readonly navigationNodes: NavigationNode[] = [
    new NavigationNode("Kitchen", "", [
      new NavigationNode("Diets", "/diet", [
        new NavigationNode("List", "/list"),
        new NavigationNode("Details", "/details"),
        new NavigationNode("Form", "/new"),
      ]),
      new NavigationNode("Meals", "/meal", [
        new NavigationNode("List", "/list"),
        new NavigationNode("Details", "/details"),
        new NavigationNode("Form", "/form"),
      ]),
      new NavigationNode("Beverages", "/beverage", [
        new NavigationNode("List", "/list"),
        new NavigationNode("Details", "/details"),
        new NavigationNode("Form", "/form"),
      ]),
      new NavigationNode("Ingredients", "/ingredient", [
        new NavigationNode("List", "/list"),
        new NavigationNode("Details", "/details"),
        new NavigationNode("Form", "/form"),
      ]),
    ]),
    new NavigationNode("Gym", "", [
      new NavigationNode("Workouts", "/workout", [
        new NavigationNode("List", "/list"),
        new NavigationNode("Details", "/details"),
        new NavigationNode("Form", "/form"),
      ]),
      new NavigationNode("Exercises", "/exercise", [
        new NavigationNode("List", "/list"),
        new NavigationNode("Details", "/details"),
        new NavigationNode("Form", "/form"),
      ]),
    ]),
  ];

  readonly pageNotFoundNavigationNode: NavigationNode = new NavigationNode(
    "404 Page Not Found",
    "/page-not-found",
  );

  readonly homeNavigationNode: NavigationNode = new NavigationNode(
    "Home",
    "/home",
  );

  readonly navigationNodeUrls: NavigationNodeToDirectUrlMapType =
    NavigationNode.mapNavigationNodesToDirectUrls([
      ...this.navigationNodes,
      this.pageNotFoundNavigationNode,
      this.homeNavigationNode,
    ]);

  readonly breadcrumbs$: Observable<Breadcrumb[]> = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map(() => {
      const url: string = this.router.url;

      if (url.includes("details")) {
        const splitUrl: string[] = url.split("/");

        return [
          ...this.navigationNodeUrls[splitUrl.slice(0, -1).join("/")]
            .breadcrumbs,
          this.createIdBreadcrumb(url, splitUrl[splitUrl.length - 1]),
        ];
      }

      if (url.includes("edit")) {
        const splitUrl: string[] = url.split("/");

        return [
          ...this.navigationNodeUrls[splitUrl.slice(0, -1).join("/")]
            .breadcrumbs,
          this.createIdBreadcrumb(url, splitUrl[splitUrl.length - 1]),
        ];
      }

      const currentNavigationNode: NavigationNode =
        this.navigationNodeUrls[url];

      return currentNavigationNode
        ? currentNavigationNode.breadcrumbs
        : [this.pageNotFoundNavigationNode.breadcrumb];
    }),
  );

  constructor(private router: Router) {}

  protected createIdBreadcrumb(url: string, id: string): Breadcrumb {
    return {
      label: id,
      url,
    };
  }
}
