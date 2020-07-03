import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

declare const $: any;
declare function initPlugings();

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  public data: any[];

  constructor(private service: ServiceService) {
    // $(document).ready(() => {
    //   $('#myInput').on('keyup', function() {
    //     let value = $(this).val().toLowerCase();
    //     $('#myTable tr').filter(function() {
    //       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    //     });
    //   });
    // });

    $(document).ready(() => {
      $('#example').dataTable({
        ordering: false,
        pageLength: 5,
        select: false
      });
    });
  }

  ngOnInit(): void {
    this.data = this.service.getData();
    // console.log(this.data);l
    initPlugings();
  }

}
