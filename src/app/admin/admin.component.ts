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
  id = 3;
  editId = 0;
  addnew = true;
  saveedited = false;
  editKirjautumiset = {};

  constructor(private workerService: WorkerService) {}

  ngOnInit(): void {
    this.getWorkers();
  }

  getWorkers(): void {
    this.workerService
      .getWorkers()
      .subscribe((workers) => (this.workers = workers));
  }

  showKirjautumiset() {
    this.kirjautumiset = !this.kirjautumiset;
  }

  addW() {
    this.addWorker = !this.addWorker;
    this.addnew = true;
  }

  onSubmit(f: any) {
    if (this.addnew === true) {
      this.id = this.id + 1;
      this.workerService
        .addWorker({
          id: this.id,
          tunnus: f.tunnus,
          etunimi: f.name,
          sukunimi: f.lastname,
          kirjautumiset: [
            {
              pvm: '',
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

    if (this.saveedited === true) {
      this.workerService
        .updateWorker({
          id: this.editId,
          tunnus: f.tunnus,
          etunimi: f.name,
          sukunimi: f.lastname,
          kirjautumiset: this.editKirjautumiset,
        })
        .subscribe(() => this.getWorkers());
      this.tunnus = '';
      this.saveedited = false;
      this.name = '';
      this.lastname = '';
      this.addWorker = false;
    }
  }

  delete(worker: worker): void {
    this.workers = this.workers.filter((h) => h !== worker);
    this.workerService.deleteHero(worker.tunnus).subscribe();
  }

  update(w: worker) {
    this.tunnus = w.tunnus;
    this.name = w.etunimi;
    this.lastname = w.sukunimi;
    this.addnew = !this.addnew;
    this.saveedited = !this.saveedited;
    this.addWorker = !this.addWorker;
    this.editId = w.id;
    this.editKirjautumiset = w.kirjautumiset;
  }
}
