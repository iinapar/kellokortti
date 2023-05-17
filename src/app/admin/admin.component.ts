import { Component } from '@angular/core';
import { worker } from '../worker';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  workers: worker[] = [];
  addWorker = false;
  tunnus = '';
  name = '';
  lastname = '';
  kirjautumiset = false;

  constructor(private workerService: WorkerService) {}

  ngOnInit(): void {
    this.getWorkers();
  }

  getWorkers(): void {
    this.workerService.getWorkers().subscribe((workers) => (this.workers = workers));
  }

  showKirjautumiset() {
    this.kirjautumiset = !this.kirjautumiset;
  }

  addW() {
    this.addWorker = !this.addWorker;
  }

  onSubmit(f: any) {
    this.workerService
      .addWorker({
        id: 3,
        tunnus: f.tunnus,
        etunimi: f.name,
        sukunimi: f.lastname,
        kirjautumiset: [
          {
            sisaan: '',
            ulos: '',
            taukoAlku: '',
            taukoLoppu: '',
          },
        ],
      })
      .subscribe((worker) => {
        this.workers.push(worker);
      });

    this.addWorker = !this.addWorker;
  }

  delete(worker: worker): void {
    this.workers = this.workers.filter((h) => h !== worker);
    this.workerService.deleteHero(worker.tunnus).subscribe();
  }
}
