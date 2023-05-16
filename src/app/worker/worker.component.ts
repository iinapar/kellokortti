import { Component, Input } from '@angular/core';
import { WorkerService } from '../worker.service';
import { ActivatedRoute } from '@angular/router';
import { worker } from '../worker';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss'],
})
export class WorkerComponent {
  @Input() worker?: worker;
  constructor(private route: ActivatedRoute, private workerService: WorkerService) {}

  ngOnInit(): void {
    this.getWorker();
  }

  getWorker(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.workerService.getWorker(id).subscribe((worker) => (this.worker = worker));
  }
}
