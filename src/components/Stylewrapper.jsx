/* eslint-disable react/prop-types */
export default function Stylewrapper({ styles, section }) {
  return (
    <>
      <div style={styles}>{section}</div>
    </>
  );
}
