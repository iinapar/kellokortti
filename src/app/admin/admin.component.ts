import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  workers = [
    { etunimi: 'Marja', sukunimi: 'Sirpaleena' },
    { etunimi: 'Esko', sukunimi: 'Markkanen' },
    { etunimi: 'Markku', sukunimi: 'Petteri' },
  ];

  constructor() {}

  ngOnInit(): void {
    // this.getWorkers();
  }

  // getWorkers(): void {
  //   this.workerService.getWorkers().subscribe((workers) => (this.workers = workers));
  // }
  //  add(name: string): void {
  //   name = name.trim();
  //   if (!name) {
  //     return;
  //   }
  //   this.workerService.addWorker({ name }).subscribe((worker) => {
  //     this.workers.push(worker);
  //   });
  // }

  // delete(worker: Worker): void {
  //   this.workers = this.workers.filter((h) => h !== worker);
  //   this.workerService.deleteHero(worker.id).subscribe();
  // }
}
