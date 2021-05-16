import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { StyledDropDownItemMainText, StyledDropDownItemSubText } from './styles';

interface IOrder {
  orderId: string;
  orderName: string;
  value: string;
}

const orders: IOrder[] = [
  {
    orderId: '2324534533',
    orderName: 'Samsung Galaxy S10 2pcs',
    value: '2324534533'
  },
  {
    orderId: '5734534533',
    orderName: 'Apple iPhone Pro Max 3pcs',
    value: '5734534533'
  }
];

const getDropDownItemElement = (orderId: string, orderName: string) => {
  return (
    <>
      <StyledDropDownItemMainText>{orderId}</StyledDropDownItemMainText>{' '}
      <StyledDropDownItemSubText>{orderName}</StyledDropDownItemSubText>
    </>
  );
};

const CustomActiveItemDropDownExample = () => {
  const [selectedOrderId, setSelectedOrderId] = useState(orders[1].value);

  const options = orders.map(({ orderId, orderName, value }) => {
    const item = getDropDownItemElement(orderId, orderName);
    return {
      value,
      children: item
    };
  });
  const selectedOrder = orders.find((order) => {
    return order.orderId === selectedOrderId;
  }) || {
    orderId: '',
    orderName: '',
    value: ''
  };
  const triggerObj = {
    trigger: getDropDownItemElement(selectedOrder.orderId, selectedOrder.orderName)
  };

  return (
    <Dropdown
      placeholder="Select order"
      fluid
      selection
      options={options}
      {...triggerObj}
      // @ts-ignore 'event' is declared but its value is never read.
      onChange={(event, data: any) => {
        setSelectedOrderId(data.value);
      }}
      value={selectedOrderId}
    />
  );
};

export default CustomActiveItemDropDownExample;
