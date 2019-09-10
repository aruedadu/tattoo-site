describe('Protractor tattoo-site', function() {
  //var firstNumber = element(by.model('first'));
  //var secondNumber = element(by.model('second'));

  var EC = protractor.ExpectedConditions;

  //controles para la cotizacion
  var asignarCitaNavegar = element(by.id('asignar-cita-nav'));
  var consultarValorButton = element(by.id('consultar-valor-btn'));
  var fechaHoraInicialCotizacion = element(by.id('fechaInicio'));
  var duracionCotizacion = element(by.id('duracion'));
  var valorCotizacion = element(by.id('totalQuotationValue'));
  var mensajeErrorCotizacionDiv = element(by.id('mensaje-error'));
  var mensajeCotizacionExitoDiv = element(by.id('mensaje-exito'));
  //var latestResult = element(by.binding('latest'));
  //var history = element.all(by.repeater('result in memory'));

  //controles para la modificacion de citas
  var operacionesCitaNavegar = element(by.id('operaciones-cita-nav'));
  /*var mensajeErrorConsultaDiv = element(by.id('mensaje-error'));
  var mensajeExitoConsultaDiv = element(by.id('mensaje-exito'));
  var mensajeAlertaConsultaDiv = element(by.id('mensaje-alerta'));
  var consultarCitasButton = elemet(by.id('consultar-citas-btn'));
  var cedulaClienteText = element(by.id('cedulaCliente'));*/

  function consultarValor(a, b) {
    asignarCitaNavegar.click();
    fechaHoraInicialCotizacion.sendKeys(a);
    duracionCotizacion.sendKeys(b);
    consultarValorButton.click();
  }

  beforeEach(function() {
    browser.get('http://localhost:4200');
  });

  it('obtener valor cotizacion 3 horas sin recargo', function() {
    //asignarCitaNavegar.click();
    consultarValor('02/09/2019 10:00', 3);
    expect(valorCotizacion.getAttribute('value')).toEqual('450000');
  });

  it('obtener valor cotizacion 3 horas con recargo inicio previo 8pm', function() {
    //asignarCitaNavegar.click();
    consultarValor('02/09/2019 19:00', 3);
    expect(valorCotizacion.getAttribute('value')).toEqual('472500');
  });

  it('obtener valor cotizacion 3 horas con recargo inicio 8pm', function() {
    //asignarCitaNavegar.click();
    consultarValor('02/09/2019 20:00', 3);
    expect(valorCotizacion.getAttribute('value')).toEqual('495000');
  });

  it('generar cita exitosa', function() {
    //asignarCitaNavegar.click();
    consultarValor('02/09/2019 10:00', 3);
    element(by.id('consultar-artistas-btn')).click();
    element.all(by.tagName('option'))
      .then(function(options){
        options[0].click();
      });
    browser.sleep(1000);
    element(by.id('terceroNumeroId')).sendKeys('1017159532');
    element(by.id('agendar-cita-btn')).click();
    expect(mensajeCotizacionExitoDiv.getText()).toEqual('Éxito! Se ha creado de manera exitosa su cita.\nx');
  });

  it('obtener error domingo', function() {
    //asignarCitaNavegar.click();
    consultarValor('01/09/2019 10:00', 3);
    expect(mensajeErrorCotizacionDiv.getText()).toEqual('Error! Los Domingos no hay servicio!\nx');
  });

  it('obtener error hora previa apertura', function() {
    //asignarCitaNavegar.click();
    consultarValor('02/09/2019 09:00', 3);
    expect(mensajeErrorCotizacionDiv.getText()).toEqual('Error! El servicio inicia a las 10 am\nx');
  });

  it('obtener error hora previa apertura', function() {
    //asignarCitaNavegar.click();
    consultarValor('02/09/2019 23:00', 3);
    expect(mensajeErrorCotizacionDiv.getText()).toEqual('Error! No es posible agendar una cita cuya duracion supere la media noche.\nx');
  });

    function llenarFormulario(a){
      element(by.id('cedulaCliente')).sendKeys('1017159532');
    }

  function realizarConsulta(){
    elemet(by.id('consultar-citas-btn')).click();
  }

  function hacerSeleccion(){
    element.all(by.tagName('radio')).then(function(options){
      options[0].click();
    });
  }

  it('Cancelar cita asignada alejo', function(){
    operacionesCitaNavegar.click(realizarConsulta);
    llenarFormulario('1017159532');
    realizarConsulta();
    browser.sleep(1000);
    hacerSeleccion();
    element(by.id('cancelar-cita-btn')).click();
    var mensajeExitoConsultaDiv = element(by.id('mensaje-exito'));
    expect(mensajeExitoConsultaDiv.getText()).toEqual('Éxito! Su cita se ha cancelado de manera exitosa\nx');

    /*element(by.id('cedulaCliente')).sendKeys('1017159532');
    elemet(by.id('consultar-citas-btn')).click();
    browser.sleep(1000);
    element.all(by.tagName('radio')).then(function(options){
      options[0].click();
    });
    element(by.id('cancelar-cita-btn')).click();
    var mensajeExitoConsultaDiv = element(by.id('mensaje-exito'));
    expect(mensajeExitoConsultaDiv.getText()).toEqual('Éxito! Su cita se ha cancelado de manera exitosa\nx');*/
  });

  it('Consultar tercero sin citas', function(){
    operacionesCitaNavegar.click().then(function (){
      browser.driver.sleep(5000000);
      //var botonConsultar = elemet(by.id('consultar-citas-btn'));
      //browser.wait(EC.visibilityOf(elemet(by.id('consultar-citas-btn'))), 5000);
      browser.wait(function(){
        browser.sleep(1000);
      }, 5000);
      element(by.id('cedulaCliente')).sendKeys('1037604310');
      browser.sleep(10000000);
      elemet(by.id('consultar-citas-btn')).click();
      browser.sleep(1000);
      var mensajeAlertaConsultaDiv = element(by.id('mensaje-alerta'));
      expect(mensajeAlertaConsultaDiv.getText()).toEqual('Alerta! Usted no posee ninguna cita agendada.\nx');
    });
  });

  it('Consultar tercero sin citas', function(){
    operacionesCitaNavegar.click().then(function (){
      browser.driver.sleep(5000000);
      //var botonConsultar = elemet(by.id('consultar-citas-btn'));
      //browser.wait(EC.visibilityOf(elemet(by.id('consultar-citas-btn'))), 5000);
      browser.wait(function(){
        browser.sleep(1000);
      }, 5000);
      element(by.id('cedulaCliente')).sendKeys('1037604310');
      browser.sleep(10000000);
      elemet(by.id('consultar-citas-btn')).click();
      browser.sleep(1000);
      var mensajeAlertaConsultaDiv = element(by.id('mensaje-alerta'));
      expect(mensajeAlertaConsultaDiv.getText()).toEqual('Alerta! Usted no posee ninguna cita agendada.\nx');
    });
  });

  it('Consultar tercero sin citas modif', function(){
    operacionesCitaNavegar.click().then(function (){
      browser.driver.sleep(5000000);
      //var botonConsultar = elemet(by.id('consultar-citas-btn'));
      //browser.wait(EC.visibilityOf(elemet(by.id('consultar-citas-btn'))), 5000);
      browser.wait(function(){
        browser.sleep(1000);
      }, 5000);
      element(by.id('cedulaCliente')).sendKeys('1037604310');
      browser.sleep(10000000);
      elemet.all(by.tagName('button')).then(function(options){
        options[0].click();
      });
      browser.sleep(1000);
      var mensajeAlertaConsultaDiv = element(by.id('mensaje-alerta'));
      expect(mensajeAlertaConsultaDiv.getText()).toEqual('Alerta! Usted no posee ninguna cita agendada.\nx');
    });
  });

  it('Cancelar cita asignada', function(){

    operacionesCitaNavegar.click();
    element(by.id('cedulaCliente')).sendKeys('1017159532');
    elemet(by.id('consultar-citas-btn')).click();
    browser.sleep(1000);
    element.all(by.tagName('radio')).then(function(options){
      options[0].click();
    });
    element(by.id('cancelar-cita-btn')).click();
    var mensajeExitoConsultaDiv = element(by.id('mensaje-exito'));
    expect(mensajeExitoConsultaDiv.getText()).toEqual('Éxito! Su cita se ha cancelado de manera exitosa\nx');
  });


});
