import { StatusList, ListItems, Text, BoldText } from "./style";

const StatusTable = () => {
  return (
    <StatusList>
      <ListItems>
        <Text>Supplier</Text>
        <BoldText>East coast fruits & vegetables</BoldText>
      </ListItems>
      <ListItems>
        <Text>Shipping Date</Text>
        <BoldText>Thu, Feb 10 </BoldText>
      </ListItems>
      <ListItems>
        <Text>Total</Text>
        <BoldText>$ 15,028.3</BoldText>
      </ListItems>
      <ListItems>
        <Text>Category</Text>
        <BoldText>Grocery</BoldText>
      </ListItems>
      <ListItems>
        <Text>Department</Text>
        <BoldText>300-444-678</BoldText>
      </ListItems>
      <ListItems>
        <Text>Status</Text>
        <BoldText>Awaiting your approvel</BoldText>
      </ListItems>
    </StatusList>
  );
};
export default StatusTable;