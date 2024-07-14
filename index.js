const Button = (props) => {
  const { content } = props;
  return <button>{content}</button>;
};

const element = (
  <div className="social-btn-bg">
    <h1>This is the goal</h1>
    <Button content="Like" />
    <Button content="Share" />
    <Button content="Subscribe" />
  </div>
);

// const Button = (props) => {
//   const { clss, content } = props;
//   return <button className={clss}>{content}</button>;
// };

// const element = (
//   <div className="social-btn-bg">
//     <h1 className="social-heading">Social Button</h1>
//     <div className="social-btn-con">
//       <Button clss="social-btn-like" content="Like" />
//       <Button clss="social-btn-share" content="Share" />
//       <Button clss="social-btn-button" content="Button" />
//     </div>
//   </div>
// );

// ReactDOM.render(element, document.getElementById("root"));

ReactDOM.render(element, document.getElementById("root"));
