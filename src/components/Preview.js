import React from "react";

function Preview(props) {
  return (
    <div id="preview" className="window-content">
      <div dangerouslySetInnerHTML={createMarkup(props.data)} />
    </div>
  );
}

function createMarkup(data) {
  return { __html: data };
}

export default Preview;
