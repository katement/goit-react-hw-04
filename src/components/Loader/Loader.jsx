import { DNA } from "react-loader-spinner";

const Loader = () => {
  return (
    <center>
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </center>
  );
};
export default Loader;
