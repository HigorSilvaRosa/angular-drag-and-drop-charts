import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  gridsterOptions: GridsterConfig = {
    minCols: 10,
    minRows: 10,
    resizable: {
      enabled: true
    },
    draggable: {
      enabled: true
    }

  };
  gridsterDashboard: Array<GridsterItem> = [];

  title = 'app';

  view1n1 = [250, 250];
  view2n1 = [500, 250];
  view1n2 = [250, 500];
  view2n2 = [500, 500];

  widgetsSize: number[] = [250, 300];
  dashboardMargin: number = 20;

  lineChartData = [
    {
      "name": "Higor",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        },
        {
          "name": "2012",
          "value": 7300000
        },
        {
          "name": "2013",
          "value": 8940000
        },
        {
          "name": "2014",
          "value": 7300000
        },
        {
          "name": "2015",
          "value": 8940000
        }
      ]
    },

    {
      "name": "Diogo",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": 8270000
        },
        {
          "name": "2012",
          "value": 7870000
        },
        {
          "name": "2013",
          "value": 8270000
        },
        {
          "name": "2014",
          "value": 7870000
        },
        {
          "name": "2015",
          "value": 8270000
        },
      ]
    },

    {
      "name": "Edson",
      "series": [
        {
          "name": "2010",
          "value": 5000002
        },
        {
          "name": "2011",
          "value": 5800000
        },
        {
          "name": "2012",
          "value": 5000002
        },
        {
          "name": "2013",
          "value": 5800000
        },
        {
          "name": "2014",
          "value": 5000002
        },
        {
          "name": "2015",
          "value": 5800000
        }
      ]
    }
  ];

  barVerticalData = [
    {
      "name": "Higor",
      "value": 8940000
    },
    {
      "name": "Diogo",
      "value": 5000000
    },
    {
      "name": "Edson",
      "value": 7200000
    }
  ];

  barVertical2dData = [
    {
      "name": "Higor",
      "series": [
        {
          "name": "Cerveja",
          "value": 7300000
        },
        {
          "name": "Vodka",
          "value": 8940000
        }
      ]
    },

    {
      "name": "Diogo",
      "series": [
        {
          "name": "Cerveja",
          "value": 7870000
        },
        {
          "name": "Vodka",
          "value": 8270000
        }
      ]
    },
    {
      "name": "Edson",
      "series": [
        {
          "name": "Cerveja",
          "value": 5000002
        },
        {
          "name": "Vodka",
          "value": 5800000
        }
      ]
    }
  ]

  ngOnInit() {

  }


  onDragEnd($event) {
    console.log($event);
  }

  onDrag($event) {
    console.log($event);
  }

  onOrderChange($event) {
    console.log($event);
  }

  onDragStart($event) {
    console.log($event);
  }
}
