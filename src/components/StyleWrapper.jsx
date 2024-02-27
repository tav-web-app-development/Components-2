/* eslint-disable react/prop-types */
export default function StyleWrapper({ styles, section }) {
  return (
    <>
      <div style={styles}>{section}</div>
    </>
  );
}
