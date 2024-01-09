import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ProductModel } from "../../models/responses/ProductModel";
import ProductService from "../../services/ProductService";

type Props = {};

const ProductDetail = (props: Props) => {
  const params = useParams<{ id: string }>();
  useEffect(() => {
    if (params.id) {
      fetchDetails(params.id);
    }
  }, []);

  const fetchDetails = async (id: string) => {
    let service: ProductService = new ProductService();
    let response = await service.getById(parseInt(id));
    console.log(response);
  };

  return <div>ProductDetail</div>;
};

export default ProductDetail;
