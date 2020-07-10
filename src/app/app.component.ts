import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'plotly-spike';

  trace1 = {
    x: [
      1995,
      1996,
      1997,
      1998,
      1999,
      2000,
      2001,
      2002,
      2003,
      2004,
      2005,
      2006,
      2007,
      2008,
      2009,
      2010,
      2011,
      2012,
    ],
    y: [
      219,
      146,
      112,
      127,
      124,
      180,
      236,
      207,
      236,
      263,
      350,
      430,
      474,
      526,
      488,
      537,
      500,
      439,
    ],
    name: 'Location 1',
    marker: { color: 'rgb(55, 83, 109)' },
    type: 'bar',
  };

  trace2 = {
    x: [
      1995,
      1996,
      1997,
      1998,
      1999,
      2000,
      2001,
      2002,
      2003,
      2004,
      2005,
      2006,
      2007,
      2008,
      2009,
      2010,
      2011,
      2012,
    ],
    y: [
      16,
      13,
      10,
      11,
      28,
      37,
      43,
      55,
      56,
      88,
      105,
      156,
      270,
      299,
      340,
      403,
      549,
      499,
    ],
    name: 'Location 2',
    marker: { color: 'rgb(26, 118, 255)' },
    type: 'bar',
  };

  public graph = {
    data: [this.trace1, this.trace2],
    layout: {
      title: 'Grouped Bar Chart',
      xaxis: {
        tickfont: {
          size: 14,
          color: 'rgb(107, 107, 107)',
        },
      },
      yaxis: {
        title: 'Value (millions)',
        titlefont: {
          size: 16,
          color: 'rgb(107, 107, 107)',
        },
        tickfont: {
          size: 14,
          color: 'rgb(107, 107, 107)',
        },
      },
      legend: {
        x: 0,
        y: 5.0,
        bgcolor: 'rgba(255, 255, 255, 0)',
        bordercolor: 'rgba(255, 255, 255, 0)',
      },
      barmode: 'group',
      bargap: 0.15,
      bargroupgap: 0.1,
    },
  };

  // ========================

  line1 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    y: [10, 15, null, 17, 14, 12, 10, null, 15, 12, null, 18, 16],
    mode: 'lines+markers',
    connectgaps: true,
  };

  line2 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    y: [16, null, 13, 10, 8, null, 11, 2, 18, 4, null, 18, 16],
    mode: 'lines',
    connectgaps: true,
  };

  public lineGraph = {
    config: {
      displayModeBar: false,
    },
    data: [this.line1, this.line2],
    layout: {
      title: 'Line Chart w/ Connected Gaps (displayModeBar: false)',
      showlegend: false,
      yaxis: {
        visible: true,
        fixedrange: true,
        tick0: 0,
        dtick: 2,
      },
    },
  };
}
