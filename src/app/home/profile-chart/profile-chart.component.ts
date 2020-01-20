import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { CommonService } from '../../services/common.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import 'chart.piecelabel.js';
@Component({
  selector: 'app-profile-chart',
  templateUrl: './profile-chart.component.html',
  styleUrls: ['./profile-chart.component.scss']
})
export class ProfileChartComponent implements OnInit {
  pieChartLabels: any = [];
  pieChartData: any = [];
  pieChartColors: any = [];
  pieOptions: any = {};
  userDetails:any = {};
  public pieChartType:string = 'pie'; // points chart type
  @ViewChild('pointsModal') pointsModal; // point modal reference
  constructor(
    public cService: CommonService,
    public usersService: UsersService, 
    private modalService: NgbModal, 
    private activeRoute: ActivatedRoute,
    translate: TranslateService) {
    this.cService.activelang.subscribe((lang) => {

      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(lang);
    });
  }

  ngOnInit() {
    this.pieChartLabels = [];
    this.pieChartData = [];
    this.pieChartColors = [
      {
        backgroundColor: ['#26bfb5', '#5bc78c', '#fc9772', '#ff4a5f', '#adc72a'],
      }
    ];
    this.activeRoute.params.subscribe((params) => {
      this.usersService.userDetailsByCPP(params.userCPP).subscribe((response: any) => {
        this.userDetails  = response.data;
        this.usersService.getUserPoints(btoa(response.data.id))
          .subscribe((responseData: any) => {
            if (responseData.data) {
              this.pieOptions = {
                pieceLabel: {
                  render: function (args) {
                    const label = args.label,
                      value = args.value;
                    return value+' points';
                  },
                  fontColor: '#FFFFFF',
                  fontSize: 13,
                  fontStyle: 'bold'
                },
                legend: { position: 'right' },
                elements: {
                  arc: {
                    borderWidth: 0,
                    weight: 0.5
                  }
                }
              };
              responseData.data.forEach(element => {
                this.pieChartLabels.push(element.point_name);
                this.pieChartData.push(element.total_point);

              });
              // this.modalService.open(pointModal, { size: 'lg', centered: true, windowClass: 'DefaultModal' });
            }
          });
      })

    });
  }

}
