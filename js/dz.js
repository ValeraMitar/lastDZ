var element = $('#moneyList'),
    enterMoney = $('#enterAmount'),
    outMoney = $('#amountYou');


$.ajax({
    type: 'GET',
    url: 'http://www.nbrb.by/API/ExRates/Currencies/'
}).done(function (currencies) {
    currencies.forEach(function (currrency) {
        var option = $('<option>');
        option.attr('value', String(currrency.Cur_Abbreviation))
            .attr('data-currency-code', String(currrency.Cur_ID));
        option.text(String(currrency.Cur_Name));
        element.append(option);
    });
    correct();
});

element.change('option', correct);


function correct() {
    var currencyCode = $(this).val(),
        outmoney;
    console.log(currencyCode);
    $.ajax({
            type: 'GET',
            url: 'http://www.nbrb.by/API/ExRates/Rates/' + currencyCode + '?ParamMode=2'
        })
        .done(function (response) {
            var rate = response.Cur_OfficialRate,
                scale = response.Cur_Scale;
            console.log(response);
            outmoney = (enterMoney.val() * scale / rate).toFixed(2);
            outMoney.text(`${outmoney} ${currencyCode}`);
            enterMoney.on('input', function () {
                outmoney = (enterMoney.val() * scale / rate).toFixed(2);
                outMoney.text(`${outmoney} ${currencyCode}`);
            });
        });
}

