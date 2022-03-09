import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import ProductDetailsFeature from "../features/ProductDetailsFeature";
import ProductTwoFeature from "../FilterProductList/ProductTwoFeature";
import ProductThreeFeature from "../FilterProductList/ProductThreeFeature";
import ProductOneFeature from "../FilterProductList/ProductOneFeature";
import ProductForFeature from "../FilterProductList/ProductForFeature";
import ProductFiveFeature from "../FilterProductList/ProductFiveFeature";
import ProductSixFeature from "../FilterProductList/ProductSixFeature";
import ProductSevenFeature from "../FilterProductList/ProductSevenFeature";
import ProductEightFeature from "../FilterProductList/ProductEightFeature";
import ProductNineFeature from "../FilterProductList/ProductNineFeature";
import BackgroundTet from "../Filter/BackgroundTet";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

class FilterProduct extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="HIỆN TẤT CẢ" />
            <Tab label="TRÀ TRÁI CÂY" />
            <Tab label="CÀ PHÊ ĐÁ XAY" href="#basic-tabs" />
            <Tab label="CÀ PHÊ GÓI" />
            <Tab label="BÁNH & SNACK" />
            <Tab label="CÀ PHÊ MÁY" />
            <Tab label="COLD BREW" />
            <Tab label="CÀ PHÊ Ý" />
            <Tab label="SỮA" />
            <Tab label="TRÀ" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <BackgroundTet /> <ProductDetailsFeature />{" "}
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <BackgroundTet /> <ProductOneFeature />{" "}
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <BackgroundTet /> <ProductTwoFeature />{" "}
          </TabContainer>
        )}
        {value === 3 && (
          <TabContainer>
            <BackgroundTet /> <ProductThreeFeature />{" "}
          </TabContainer>
        )}
        {value === 4 && (
          <TabContainer>
            <BackgroundTet /> <ProductForFeature />{" "}
          </TabContainer>
        )}
        {value === 5 && (
          <TabContainer>
            <BackgroundTet /> <ProductFiveFeature />{" "}
          </TabContainer>
        )}
        {value === 6 && (
          <TabContainer>
            <BackgroundTet /> <ProductSixFeature />{" "}
          </TabContainer>
        )}
        {value === 7 && (
          <TabContainer>
            <BackgroundTet /> <ProductSevenFeature />{" "}
          </TabContainer>
        )}
        {value === 8 && (
          <TabContainer>
            <BackgroundTet /> <ProductEightFeature />{" "}
          </TabContainer>
        )}
        {value === 9 && (
          <TabContainer>
            <BackgroundTet /> <ProductNineFeature />{" "}
          </TabContainer>
        )}
      </div>
    );
  }
}

FilterProduct.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FilterProduct);
