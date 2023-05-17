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
  tunnus = '';
  name = '';
  lastname = '';
  kirjautumiset = false;
  id = 3;
  editId = 0;
  addnew = false;
  saveedited = false;
  editKirjautumiset = {};

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

      this.addnew = false;
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
      this.saveedited = false;
    }
  }

  delete(worker: worker): void {
    this.workers = this.workers.filter((h) => h !== worker);
    this.workerService.deleteHero(worker.id).subscribe();
  }

  update(w: worker) {
    this.tunnus = w.tunnus;
    this.name = w.etunimi;
    this.lastname = w.sukunimi;
    this.saveedited = !this.saveedited;
    this.addnew = false;
    this.editId = w.id;
    this.editKirjautumiset = w.kirjautumiset;
  }

  addW() {
    this.addnew = !this.addnew;
    this.saveedited = false;
    this.tunnus = '';
    this.name = '';
    this.lastname = '';
  }
}
