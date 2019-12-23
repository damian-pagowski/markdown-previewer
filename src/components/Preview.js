import React from "react";

function Preview(props) {
  return (
    <div id="preview" className="window-content" dangerouslySetInnerHTML={createMarkup(props.data)} />
    
  );
}

function createMarkup(data) {
  return { __html: data };
}

export default Preview;
