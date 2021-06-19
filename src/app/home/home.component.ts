import { Component, OnInit } from '@angular/core';
import { Entry } from '../model/entry';
import { WeightEntriesService } from '../weight-entries.services';

@Component({
  selector: 'wt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public entriesSvc: WeightEntriesService) { }

  showBodyFat = true;
  entries: Entry[];

  ngOnInit() {
    this.updateData();

  }

  toggleBodyFat() {
    this.showBodyFat = !this.showBodyFat;
  }

  updateData() {
    this.entriesSvc.getEntries().subscribe(entries => {
      this.entries = entries;
    })
  }

  createNewEntry(entry: Entry) {
    this.entriesSvc.addEntry(entry).subscribe(() => {
      this.updateData();
    })
  }

}
