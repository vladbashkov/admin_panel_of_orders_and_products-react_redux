import { useHttp } from "../../hooks/http.hook";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { createSelector } from "@reduxjs/toolkit";

import { fetchProducts, productDeleted } from "./ProductsSlice";
import ProductsListItem from "../productsListItem/ProductsListItem";
import ProductsFilters from "../productsFilters/ProductsFilters";
import AddItemForm from "../addItemForm/AddItemForm";
import Spinner from "../spinner/Spinner";

const ProductsList = () => {
  const filtredProductsSelector = createSelector(
    (state) => state.filters.activeFilter,
    (state) => state.products.products,
    (filter, products) => {
      if (filter === "all") {
        return products;
      } else {
        return products.filter((item) => item.isNew === filter);
      }
    }
  );

  const filteredProducts = useSelector(filtredProductsSelector);
  const productsLoadingStatus = useSelector(
    (state) => state.products.productsLoadingStatus
  );
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(fetchProducts(request));

    // eslint-disable-next-line
  }, []);

  const onDelete = useCallback(
    (id) => {
      request(`http://localhost:3001/products/${id}`, "DELETE")
        .then((data) => console.log(data, "Deleted"))
        .then(dispatch(productDeleted(id)))
        .catch((err) => console.log(err));

      // eslint-disable-next-line
    },
    [filteredProducts]
  );

  if (productsLoadingStatus === "loading") {
    return <Spinner />;
  } else if (productsLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Loading error</h5>;
  }

  const renderProductsList = (arr) => {
    if (arr.length === 0) {
      return (
        <CSSTransition timeout={0} in={true} classNames="fade">
          <h5 className="text-center mt-5">No products yet</h5>
        </CSSTransition>
      );
    }

    return arr.map(({ id, ...props }) => {
      return (
        <CSSTransition key={id} in={true} timeout={500} classNames="fade">
          <ProductsListItem {...props} onDelete={() => onDelete(id)} />
        </CSSTransition>
      );
    });
  };

  const elements = renderProductsList(filteredProducts);
  return (
    <div className="mb-3 card-body">
      <button
        className="btn btn-success mb-3 btn-lg btn-block w-100"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseForm"
        aria-expanded="false"
        aria-controls="collapseForm"
      >
        Add New Product
      </button>
      <div className="collapse" id="collapseForm">
        <AddItemForm itemType="products" />
      </div>
      <ProductsFilters />
      <ul>{elements}</ul>
    </div>
  );
};

export default ProductsList;
