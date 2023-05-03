import AddOrderForm from "../addOrderForm/AddOrderForm";
import AddProductForm from "../addProductForm/AddProductForm";

const AddItemForm = (props) => {
  if (props.itemType === "orders") {
    return <AddOrderForm />;
  } else if (props.itemType === "products") {
    return <AddProductForm />;
  }
};

export default AddItemForm;
