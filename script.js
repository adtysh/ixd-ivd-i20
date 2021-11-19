function loadHighCharts() {
  var colors = Highcharts.getOptions().colors;
  Highcharts.chart('container', {
    chart: {
      type: 'streamgraph',
      marginBottom: 30,
      zoomType: 'x',
    },

    // Make sure connected countries have similar colors
    colors: [
      colors[0],
      colors[1],
      colors[2],
      colors[3],
      colors[4],
      // East Germany, West Germany and Germany
      Highcharts.color(colors[5]).brighten(0.2).get(),
      Highcharts.color(colors[5]).brighten(0.1).get(),

      colors[5],
      colors[6],
      colors[7],
      colors[8],
      colors[9],
      colors[0],
      colors[1],
      colors[3],
      // Soviet Union, Russia
      Highcharts.color(colors[2]).brighten(-0.1).get(),
      Highcharts.color(colors[2]).brighten(-0.2).get(),
      Highcharts.color(colors[2]).brighten(-0.3).get(),
    ],

    title: {
      floating: true,
      align: 'left',
      text: 'Space Exploration Budget Dataset',
    },
    subtitle: {
      floating: true,
      align: 'left',
      y: 30,
      text: 'Funding by destination',
    },

    xAxis: {
      maxPadding: 0,
      type: 'category',
      crosshair: true,
      categories: [
        '1988',
        '1989',
        '1990',
        '1991',
        '1992',
        '1993',
        '1994',
        '1995',
        '1996',
        '1997',
        '1998',
        '1999',
        '2000',
        '2001',
        '2002',
        '2003',
        '2004',
        '2005',
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022',
      ],
      labels: {
        align: 'left',
        reserveSpace: false,
        rotation: 270,
      },
      lineWidth: 0,
      margin: 20,
      tickWidth: 0,
    },

    yAxis: {
      visible: false,
      startOnTick: false,
      endOnTick: false,
    },

    legend: {
      enabled: false,
    },

    plotOptions: {
      series: {
        label: {
          minFontSize: 5,
          maxFontSize: 15,
          style: {
            color: 'rgba(255,255,255,0.75)',
          },
        },
      },
    },

    // Data parsed with olympic-medals.node.js
    series: [
      {
        name: 'Mercury',
        data: [
          0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.8, 15.3,
          79.4, 145.3, 126.6, 59.7, 10.5, 10.9, 12.0, 14.2, 19.7, 18.9, 26.7,
          40.6, 19.0, 13.7, 6.6, 7.4, 0.0, 0.0, 0.0, 0.0, 0.0,
        ],
      },
      {
        name: 'Outer Planets',
        data: [
          190.0, 270.7, 208.5, 450.1, 593.1, 571.9, 814.2, 765.4, 650.5, 455.7,
          166.4, 158.7, 121.1, 245.9, 159.2, 155.5, 117.4, 114.6, 161.4, 216.0,
          217.5, 441.9, 427.5, 335.7, 164.9, 195.9, 186.0, 247.8, 339.7, 455.6,
          691.8, 827.4, 665.8, 490.9, 526.7,
        ],
      },
      {
        name: 'Moon',
        data: [
          0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 64.1, 35.8, 8.0, 3.6, 0.0,
          0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.5, 133.8, 268.8, 261.2, 274.7, 197.4,
          90.3, 30.1, 0.0, 0.0, 0.0, 0.0, 191.9, 300.0, 443.5, 497.2,
        ],
      },
      {
        name: 'Small bodies',
        data: [
          0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 168.8, 119.1, 150.1, 185.9, 220.2,
          104.8, 154.6, 239.1, 254.4, 363.5, 410.9, 433.8, 201.3, 124.6, 53.0,
          50.3, 49.6, 47.6, 168.2, 185.0, 249.2, 281.9, 189.6, 183.2, 197.1,
          411.0, 477.0, 342.2, 243.7,
        ],
      },
      {
        name: 'Mars',
        data: [
          136.7, 282.4, 377.1, 435.2, 249.8, 53.0, 176.4, 351.4, 358.0, 268.7,
          286.8, 311.6, 404.1, 686.2, 681.7, 730.6, 841.4, 805.7, 878.7, 811.4,
          875.3, 438.0, 523.6, 647.3, 754.9, 564.1, 552.2, 523.5, 657.7, 724.8,
          783.1, 750.5, 579.2, 592.9, 929.8,
        ],
      },
      {
        name: 'Venus',
        data: [
          183.7, 149, 102.1, 103.6, 102.6, 13.4, 21.8, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
      },
    ],

    exporting: {
      sourceWidth: 1000,
      sourceHeight: 600,
    },
  });
}

document.addEventListener('DOMContentLoaded', loadHighCharts);
