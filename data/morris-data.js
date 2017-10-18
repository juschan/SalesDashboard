$(function() {

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
            y: 'Dec',
            a: 103252,
            b: 82520
        }, {
            y: 'Jan',
            a: 103303,
            b: 132035
        }, {
            y: 'Feb',
            a: 144551,
            b: 125432
        }, {
            y: 'Mar',
            a: 144681,
            b: 127941
        }, {
            y: 'Apr',
            a: 144705,
            b: 134338
        }, {
            y: 'May',
            a: 166109,
            b: 137025
        }, {
            y: 'Jun',
            a: 166109,
            b: 139764
        }, {
            y: 'Jul',
            a: 216105,
            b: 337476
        }, {
            y: 'Aug',
            a: 162077,
            b: 147856
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Last Financial Year', 'Current Financial Year'],
        hideHover: 'auto',
        resize: true
    });
    
});
