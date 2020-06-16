import React from "react";
import PropTypes from "prop-types";
import Header from "components/Header";

function Layout(props) {
  return (
    <div>
      <Header />
      <div>
        <main>{props.children}</main>
        <aside></aside>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
