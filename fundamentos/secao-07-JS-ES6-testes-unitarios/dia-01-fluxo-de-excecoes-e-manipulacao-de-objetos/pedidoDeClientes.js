const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  let nomeDeliveryPerson = order.order.delivery.deliveryPerson;
  const nome = order.name;
  const phone = order.phoneNumber;
  const addressRua = order.address.street;
  const addressNumero = order.address.number;
  const addressApt = order.address.apartment;

  console.log(`Olá ${nomeDeliveryPerson}, entrega para: ${nome}, Telefone: ${phone}, R. ${addressRua}, Nº: ${addressNumero}, AP: ${addressApt}`);
};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  nomeDeliveryPerson = "Luiz Silva";
  let payment = order.payment;
  payment = 'R$ 50,00';
  console.log(`Olá ${nomeDeliveryPerson}, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é ${payment}.`);
};

orderModifier(order);