$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: 'Dec',
            last: 103252,
            current: 82520
        }, {
            period: 'Jan',
            last: 103303,
            current: 132035
        }, {
            period: 'Feb',
            last: 144551,
            current: 125432
        }, {
            period: 'Mar',
            last: 144681,
            current: 127941
        }, {
            period: 'Apr',
            last: 144705,
            current: 134338
        }, {
            period: 'May',
            last: 166234,
            current: 139764
        }, {
            period: 'Jun',
            last: 216105,
            current: 337476
        }, {
            period: 'Jul',
            last: 216105,
            current: 337476
        }, {
            period: 'Aug',
            last: 216105,
            current: 337476
        }],
        xkey: 'period',
        ykeys: ['Last Financial Year', 'Current Financial Year'],
        labels: ['Last Financial Year', 'Current Financial Year'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Team A Income ($)",
            value: 37482
        }, {
            label: "Team B Income ($)",
            value: 110374
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
    
});
