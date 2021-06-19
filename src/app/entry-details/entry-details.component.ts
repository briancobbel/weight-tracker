import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entry } from '../model/entry';
import { WeightEntriesService } from '../weight-entries.services';

@Component({
  selector: 'wt-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent implements OnInit {

  entry: Entry;

  constructor(public entriesSvc: WeightEntriesService,
    private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.currentRoute.snapshot.params.id;
    this.entriesSvc.getEntries().subscribe(entries => {
      this.entry = entries.find(e => {
        return e.id === id;
      })
    })
  }

}
