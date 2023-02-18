const userId = document.getElementById("phone");
const amount = 5000000;
const description = "Подписка на ежемесячный доступ к сайту telegram bot";
const publicId = "test_api_00000000000000000000001";
const invoiceId = "1234567";
const mail = document.getElementById("mail");
function pay() {
  mail.style.border = "1px solid #d9d9d9";
  var widget = new cp.CloudPayments();

  var data = {};
  data.CloudPayments = {
    recurrent: {
      interval: "Month",
      period: 1,
    },
  }; //создание ежемесячной подписки

  widget.charge(
    {
      // options
      publicId: publicId, //id из личного кабинета
      description: description, //назначение
      amount: amount, //сумма
      currency: "UZS", //валюта
      invoiceId: invoiceId, //номер заказа  (необязательно)
      accountId: mail.value, //идентификатор плательщика (обязательно для создания подписки)
      data: data,
    },
    function (options) {
      // success
      //действие при успешной оплате
    },
    function (reason, options) {
      // fail
      //действие при неуспешной оплате
    }
  );
}
function invalidInput(e) {
  e.preventDefault();
  mail.style.border = "1px solid red";
}
