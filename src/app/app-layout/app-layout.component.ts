import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';


@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css'],
})
export class AppLayoutComponent implements OnInit, OnDestroy {
  private mainPath = '';
  navigationList: Routes | undefined = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    const navigationRoute = this.router.config.find(r => r.path === this.mainPath);
    this.navigationList = navigationRoute?.children;
  }

  ngOnInit(): void {
    const firstActiveItem = this.route.snapshot.data.activeMenuItem;
    if (firstActiveItem) {
      this.router.navigate([firstActiveItem], { relativeTo: this.route });
    }
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

}
