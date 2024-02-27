export default function StyleWrapper({ styles, section }) {
  return (
    <>
      <div style={styles}>{section}</div>
    </>
  );
}
