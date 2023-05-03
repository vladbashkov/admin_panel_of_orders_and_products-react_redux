import { useHttp } from "../../hooks/http.hook";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";

import { fetchFilters, activeFilterChanged } from "./FiltersSlice";
import Spinner from "../spinner/Spinner";

const ProductsFilters = () => {
  const { filters, filtersLoadingStatus, activeFilter } = useSelector(
    (state) => state.filters
  );
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(fetchFilters(request));

    // eslint-disable-next-line
  }, []);

  if (filtersLoadingStatus === "loading") {
    return <Spinner />;
  } else if (filtersLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Loading error</h5>;
  }

  const renderFilters = (arr) => {
    if (arr.length === 0) {
      return <h5 className="text-center mt-5">Products not found</h5>;
    }

    return arr.map(({ name, className, label }) => {
      const btnClass = classNames("btn", className, {
        active: name === activeFilter,
      });

      return (
        <button
          key={name}
          id={name}
          className={btnClass}
          onClick={() => dispatch(activeFilterChanged(name))}
        >
          {label}
        </button>
      );
    });
  };

  const elements = renderFilters(filters);

  return (
    <CSSTransition timeout={500} in={true} classNames="fade">
      <div className="card shadow-lg my-4">
        <div className="card-body">
          <h4 className="display-4 mb-3">Filter products</h4>
          <div className="btn-group">{elements}</div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ProductsFilters;
