import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";
import ratingStart from "../../assets/ratingStart.svg";
import Header from "components/SearchBar/Header";
import { getProductsList } from "Redux/Slices/ProductPage/ProductsPageSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FMFilter from "components/FMFilters/FMFilter";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productPageData = useSelector(
    (state) => state?.getProductsList?.getProductsListData?.products
  );
  console.log(productPageData);

  useEffect(() => {
    dispatch(getProductsList());
  }, [dispatch]);

  const onCardClick = (element) => {
    console.log("element", element);
    let pId = element?._id;
    navigate(`/product-detail/${pId}`);
  };

  return (
    <>
      <Header />
      <Grid sx={{ padding: "0 100px" }}>
        <Box sx={{ display: "flex" }}>
          <FMTypography
            displayText={"Birthday Cakes"}
            styleData={{ fontWeight: "500", fontSize: "40px" }}
          />
          <Box
            sx={{ display: "flex", alignItems: "center", marginLeft: "24px" }}
          >
            <FMTypography
              displayText={`(${productPageData?.length} Products)`}
              styleData={{
                fontWeight: "300",
                fontSize: "20px",
                lineHeight: "30px",
                color: "#717171",
              }}
            />
          </Box>
        </Box>
        <Box>
          <FMFilter />
        </Box>

        {/* product box below */}
        <Grid
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexBasis: "33.333333%",
            justifyContent: "space-evenly",
          }}
        >
          {productPageData?.map((elem) => (
            <Box onClick={() => onCardClick(elem)}>
              <Box
                sx={{
                  backgroundColor: "#008539",
                  display: "flex",
                  padding: ".5rem",
                  width: "fit-content",
                  position: "relative",
                  top: "3.5rem",
                  left: "205px",
                  zIndex: "111",
                  borderRadius: "4px",
                }}
              >
                <img
                  src={ratingStart}
                  alt="rating-star"
                  style={{ width: "14px" }}
                />
                <FMTypography
                  displayText={elem?.rating}
                  styleData={{ color: "#FFFFFF", fontSize: "12px" }}
                />
              </Box>
              <Card sx={{ width: "283px", borderRadius: "20px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="283"
                    width="283"
                    // image={womanCard}
                    image={elem?.productPictures[0]?.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontSize: "18px", color: "#222222" }}
                    >
                      {elem?.name}
                    </Typography>
                    <span style={{ display: "flex" }}>
                      <del style={{ fontSize: "14px", color: "#717171" }}>
                        ₹ {elem?.actualPrice}
                      </del>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#000000",
                          marginLeft: ".5rem",
                        }}
                      >
                        ₹ {elem?.discountPrice}
                      </Typography>
                    </span>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="body2" sx={{ color: "#717171" }}>
                        {elem?.deliveryDay}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#008539" }}>
                        Reviews {elem?.numReviews}
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          ))}
          {/* prodct box ended */}
        </Grid>
      </Grid>
    </>
  );
};

export default ProductPage;
