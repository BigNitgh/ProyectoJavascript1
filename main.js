let lavaplatos = 500;
let olla = 250;
let licuadora = 300;
let lavadora = 1500;
let money = 3000;
let impuestos = 1.3;

let nombre = prompt("Como se llama el cliente?");
let saldo = alert(`${nombre} tu saldo es de ${money}$`);
alert(`¿Que articulo desea llevar estimado cliente ${nombre}?`);
let articulo = prompt("1: lavadora, 2: licuadora , 3: olla , 4: lavaplatos , 10: ¿?" );


if (articulo == 1){
    alert(`la lavadora cuesta: 1500$`)
    let confirmar = confirm("Seguro quieres comprar?");
    if(confirmar == true){
      let contraseña = prompt("ponga la contraseña para realizar la compra");
      if(contraseña == 1234){
        let resultado = parseInt(money) - parseInt(lavaplatos);
        alert(`Tienes en tu cuenta ${resultado}`)
        alert("Su compra esta Hecha: ) --Gracias por Comprar--")
      }else{
        alert("contraseña incorrecta, llamando al 911 ahorita!!")
      }
    }else{
      alert("se cancela la compra")
      }
}

else if(articulo == 2){
    alert(`la licuadora cuesta: 300$`)
    let confirmar = confirm("Seguro quieres comprar?");
    if(confirmar == true){
      let contraseña = prompt("ponga la contraseña para realizar la compra");
      if(contraseña == 1234){
        let resultado = parseInt(money) - parseInt(lavaplatos);
        alert(`Tienes en tu cuenta ${resultado}`)
        alert("Su compra esta Hecha: ) --Gracias por Comprar--")
      }else{
        alert("contraseña incorrecta, llamando al 911 ahorita!!")
      }
    }else{
      alert("se cancela la compra")
      }
}
else if(articulo == 3){
    alert(`la olla cuesta: 250$`)
    let confirmar = confirm("Seguro quieres comprar?");
    if(confirmar == true){
      let contraseña = prompt("ponga la contraseña para realizar la compra");
      if(contraseña == 1234){
        let resultado = parseInt(money) - parseInt(lavaplatos);
        alert(`Tienes en tu cuenta ${resultado}`)
        alert("Su compra esta Hecha: ) --Gracias por Comprar--")
      }else{
        alert("contraseña incorrecta, llamando al 911 ahorita!!")
      }
    }else{
      alert("se cancela la compra")
      }
}
else if(articulo == 4){
    alert(`la lavaplatos cuesta: 500$`)
    let confirmar = confirm("Seguro quieres comprar?");
    if(confirmar == true){
      let contraseña = prompt("ponga la contraseña para realizar la compra");
      if(contraseña == 1234){
        let resultado = parseInt(money) - parseInt(lavaplatos);
        alert(`Tienes en tu cuenta ${resultado}`)
        alert("Su compra esta Hecha: ) --Gracias por Comprar--")
      }else{
        alert("contraseña incorrecta, llamando al 911 ahorita!!")
      }
    }else{
      alert("se cancela la compra")
    }
  }
  
  alert("****califiquenos el servicio que le brindamos**** ");
  let calificacion = Number(prompt("1: Buen servicio , 2: Bueno , 3: Estable , 4: Mal Servicio , 5: Cierren el local porfa"));

  switch(calificacion){
    case 1:
      alert("vamos a seguir mejorando");
      break;
      case 2:
        alert("a seguir mejorando");
        break;
        case 3:
          alert("su comentario nos hace mejorar");
          break;
          case 4:
            alert("disculpe por el mal servicio");
            break
            case 5:
              alert("no moleste ,vaya a joder a otro lado");
              break
  }

alert("Eso es todo Gracias")

