/*
var element = $('#myElement');

$.ajax({
    type: 'GET',
    url: 'http://www.nbrb.by/API/ExRates/Currencies/'
}).done(function (currencies) {

    currencies.forEach(function (currrency) {
        var span = $('<figure>');
        span.attr('data-currency', String(currrency.Cur_Abbreviation))
            .attr('data-currency-code', String(currrency.Cur_ID));
        element.append(span);
    });

    console.log(currencies);
});нарисовали оранжевые квадраты


element.on('click', 'figure:not(.loaded)', function () {
    var _this = $(this),
        currencyCode = _this.data('currency'),
        currencyID = _this.data('currencyCode'),
    fail = function () {
        _this.addClass('remove');
        _this.addClass('laded');
    };проверяем кликабельность по квдарату this это именно тот по котрому кликнули
    $.ajax({
            type: 'GET',
            url: 'http://www.nbrb.by/API/ExRates/Rates/' + currencyCode + '?ParamMode=2'
        })
        .fail(fail)
        .done(function (response) {
            var rate = response.Cur_OfficialRate;
            console.log(response);
            $.ajax({
                    type: 'GET',
                    url: 'http://www.nbrb.by/API/ExRates/Currencies/' + currencyID
                })
                .fail(fail)
                .done(function (response) {
                    var CurrencyName = response.Cur_Name_Bel;
                    var rateEL = $('<div>').text(rate),
                        nameEL = $('<div>').text(CurrencyName);
                    _this.append(nameEL, rateEL);
                    _this.addClass('loaded');

                });
        });
});
*/



